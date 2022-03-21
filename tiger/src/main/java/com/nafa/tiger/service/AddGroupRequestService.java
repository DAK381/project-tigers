package com.nafa.tiger.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.nafa.tiger.entity.PendingGroupRequest;


public interface AddGroupRequestService {

	ArrayList<PendingGroupRequest> getAllRequests();

	String responseToAddGroup(Long requestId, Boolean response);

	String deleteRequest(Long requestId);

}
