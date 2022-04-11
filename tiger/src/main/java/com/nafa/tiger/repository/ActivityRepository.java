// package com.nafa.tiger.repository;

// import java.util.ArrayList;
// import java.util.Optional;

// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
// import org.springframework.data.repository.query.Param;
// import org.springframework.stereotype.Repository;

// import com.nafa.tiger.entity.Activity;

// @Repository
// public interface ActivityRepository extends JpaRepository<Activity, Long>{

	
// 	@Query(value="SELECT activity.user_id from activity where activity.detail ilike %:detail%",nativeQuery = true)
// 	ArrayList<Long> findAllByDetailId(@Param("detail") String detail);
	
// 	@Query(value="SELECT * from activity where activity.user_id=:userId",nativeQuery =true)
// 	ArrayList<Activity> findAllByMemberId(Long userId);

// }
