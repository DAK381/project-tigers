package com.nafa.tiger.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nafa.tiger.entity.Group;
import com.nafa.tiger.entity.PendingGroupRequest;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.repository.AddGroupRequestRepository;
import com.nafa.tiger.repository.MemberRepositrory;

@Service
public class AddGroupRequestServiceImp  implements AddGroupRequestService{
	
	@Autowired
	private AddGroupRequestRepository addGroupRequestRepository;
	
	@Autowired
	private MemberRepositrory memberRepository;

	@Override
	public ArrayList<PendingGroupRequest> getAllRequests() {
		return (ArrayList<PendingGroupRequest>) addGroupRequestRepository.findAll();
	}

	@Override
	public String responseToAddGroup(Long requestId, Boolean response) {
		PendingGroupRequest request = addGroupRequestRepository.findById(requestId).get();
		User user = memberRepository.findByEmailIgnoreCase(request.getUserEmail());
		if(response == true) {
			Group newGroup = new Group(request.getSuggestedGroupName());
			user.getUserGroup().add(newGroup);
		}
		addGroupRequestRepository.deleteById(requestId);
		return"sucessful";
		
	}

	@Override
	public String deleteRequest(Long requestId) {
		addGroupRequestRepository.deleteById(requestId);
		return "Sucessfully Deleted";
	}
}