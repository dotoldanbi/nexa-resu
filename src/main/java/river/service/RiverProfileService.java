package river.service;

import java.util.List;
import java.util.Map;

public interface RiverProfileService {

	// 데이터 조회
	List<Map<String, Object>> selectProjectList(Map<String, String> searchInfo);
}
