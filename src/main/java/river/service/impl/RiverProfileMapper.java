package river.service.impl;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("riverProfileMapper")
public interface RiverProfileMapper {
	List<Map<String, Object>> selectProjectList(Map<String, String> searchInfo);
}
