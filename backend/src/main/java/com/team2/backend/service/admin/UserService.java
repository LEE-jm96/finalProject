package com.team2.backend.service.admin;

import com.amazonaws.services.xray.model.Http;
import com.mysema.commons.lang.Assert;
import com.team2.backend.domain.reservation.ReservationQuerydslRepository;
import com.team2.backend.domain.user.*;
import com.team2.backend.web.dto.JsonResponse;
import com.team2.backend.web.dto.Message;
import com.team2.backend.web.dto.admin.EmployeeManagementDto;
import com.team2.backend.web.dto.admin.ReservationManagementDto;
import com.team2.backend.web.dto.user.UserReservationDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import javax.persistence.PersistenceException;
import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.util.*;

import static com.team2.backend.domain.user.EmployeeRepository.*;

@RequiredArgsConstructor
@Service
public class UserService {

    private final EmployeeQuerydslRepository employeeQuerydslRepository;

    private final EmployeeRepository employeeRepository;
    private final ReservationQuerydslRepository reservationQuerydslRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Transactional
    public ResponseEntity<Message> getUserList(HttpServletRequest req){
        List<EmployeeManagementDto> userList = employeeQuerydslRepository.getAllEmployeeList();

        Message message = Message.builder()
                .resCode(1000)
                .message("[SUCCESS] Select all Employee")
                .data(userList)
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> getUserView(HttpServletRequest req, String userNo){
        List<EmployeeManagementDto> userView = employeeQuerydslRepository.getEmployeeView(userNo);

        Message message = Message.builder()
                .resCode(1000)
                .message("[SUCCESS] Select Employee")
                .data(userView)
                .build();
        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> saveUser(HttpServletRequest req, EmployeeManagementDto body){

        Employee employee = body.toEntity();
        employee.encodePassword(bCryptPasswordEncoder.encode(body.getPassword()));

        Message message;

        Employee emp = employeeRepository.findByEmpNo(body.getEmpNo());

        if(emp != null && body.getEmpNo().equals(emp.getEmpNo())){
            employee.changeEmployee(emp.getNo(),emp.getAble(), emp.getCreateAt());
            employeeRepository.save(employee);
            message = Message.builder()
                    .resCode(1000)
                    .message("[Success] Update Employee")
                    .build();
            return new JsonResponse().send(200, message);
        }

        employeeRepository.save(employee);
        message = Message.builder()
                .resCode(1000)
                .message("[SUCCESS] insert Employee")
                .build();


        return new JsonResponse().send(200, message);
    }

    @Transactional
    public ResponseEntity<Message> getUserBookingList(HttpServletRequest req, Long userNo) throws ParseException {

        List<ReservationManagementDto> presentReservList = reservationQuerydslRepository.getReservList(userNo, "Present", "user");

        List<ReservationManagementDto> pastReservList = reservationQuerydslRepository.getReservList(userNo,"Past", "user");

        Map<String,List<ReservationManagementDto>> list = new HashMap<>();
        list.put("presentReservList",presentReservList);
        list.put("pastReservList",pastReservList);

        Message message = Message.builder()
                .resCode(1000)
                .message("[SUCCESS] select Reservation")
                .data(list)
                .build();

        return new JsonResponse().send(200, message);
    }

}
