package com.nafa.tiger.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.lang.reflect.GenericArrayType;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRelationship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private Relationship relationship;
    private Long relatedTo;
    @ManyToMany(mappedBy = "relationOfUser", cascade = CascadeType.ALL)
    @JsonIgnore
    private Collection<User> relationof = new ArrayList<>();

//    @ManyToOne
//    @MapsId("user_id")
//    private User relationof;



    public UserRelationship(Relationship relationship, Long user2Id) {
        this.relatedTo =user2Id;
        this.relationship =relationship;
    }

//    @ManyToOne
//    @MapsId("user_id")
//    private User relatedTo;

//    public UserRelationship(Relationship relationship, User relationof, User relatedTo) {
//        this.relationship = relationship;
//        this.relationof = relationof;
//        this.relatedTo = relatedTo;
//    }

}
