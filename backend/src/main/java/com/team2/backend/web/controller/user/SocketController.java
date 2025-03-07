package com.team2.backend.web.controller.user;

import com.team2.backend.config.security.auth.EmployeeDetails;
import com.team2.backend.domain.reservation.Reservation;
import com.team2.backend.domain.reservation.ReservationRepository;
import com.team2.backend.domain.user.Employee;
import com.team2.backend.domain.user.EmployeeRepository;
import com.team2.backend.service.user.SocketService;
import com.team2.backend.web.dto.SocketMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.text.ParseException;
import java.util.List;

@RequiredArgsConstructor
@Controller
public class SocketController {

    private final SocketService socketService;
    private final EmployeeRepository employeeRepository;
    private final ReservationRepository reservationRepository;

    @MessageMapping("/public") // 관리자 공지사항용 브로드캐스트
    @SendTo("/announce/public")
    public SocketMessage makeAnnouncement(@Payload SocketMessage message) {
        return null;
    }

    @MessageMapping("/timelist")
    public SocketMessage getTimelist(@Payload SocketMessage message) throws ParseException {
        return socketService.getTimelist(message);
    }

    @MessageMapping("/check")
    public SocketMessage checkReservation(Principal principal, @Payload SocketMessage message) throws ParseException {

        System.out.println("ㅎㅇ"  + principal.getName());
        return socketService.checkReservation(message);
    }
    @MessageMapping("/reserve")
    public SocketMessage fixReservation(@Payload SocketMessage message) throws ParseException {
        return socketService.fixReservation(message);
    }
}
