package com.team2.backend.domain.reservation;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.team2.backend.domain.resource.Resource;
import com.team2.backend.domain.user.Employee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name="timelist")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Timelist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="listNo")
    @JsonIgnore
    private Long listNo;

    @Column(name="timeNo")
    private Integer timeNo;

    // 필요없을지도?
    @ManyToOne(targetEntity = ReservationCheck.class)
    @JoinColumn(name="checkNo", insertable = false, updatable = false)
    @JsonIgnore
    private ReservationCheck check;
    @Column(name="checkNo")
    @JsonIgnore
    private Long checkNo;
}
