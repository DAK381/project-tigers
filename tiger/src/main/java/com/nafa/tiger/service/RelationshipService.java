package com.nafa.tiger.service;

import com.nafa.tiger.entity.Relationship;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.entity.UserRelationship;
import com.nafa.tiger.repository.MemberRepositrory;
import com.nafa.tiger.repository.RelationShipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class RelationshipService {
    @Autowired
    private RelationShipRepository relationShipRepository;
    @Autowired
    private MemberRepositrory memberRepositrory;

  public String addRelationship(Long user1Id, String relation, Long user2Id) {

    if (relation.equals("SPOUSE") || relation.equals("SIBILING")) {
      addUserToRelation(user1Id, relation, user2Id);
      addUserToRelation(user2Id, relation, user1Id);
    } else if (relation.equals("PARENT")) {
        addUserToRelation(user1Id,relation,user2Id);
        addUserToRelation(user2Id,"CHILDREN",user1Id);
    }
    else {
        addUserToRelation(user1Id,relation,user2Id);
        addUserToRelation(user2Id,"PARENT",user1Id);
    }
    return"Relationship Added";
        }
    public void addUserToRelation(Long user1Id, String relation, Long user2Id){
        UserRelationship relationship = new UserRelationship(Relationship.valueOf(relation),user2Id);
        relationShipRepository.save(relationship);
        User user1 = memberRepositrory.getById(user1Id);
        User user2 = memberRepositrory.getById(user2Id);
        user1.getRelationOfUser().add(relationship);
    }
}
