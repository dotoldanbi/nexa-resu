package river.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

import river.service.RiverProfileService;

@Service("riverProfileService")
public class RiverProfileServiceImpl extends EgovAbstractServiceImpl implements RiverProfileService {
	private Logger logger = LoggerFactory.getLogger(RiverProfileService.class);

	@Resource(name = "riverProfileMapper")
	private RiverProfileMapper riverProfileMapper;

	@Override
	public List<Map<String, Object>> selectProjectList(Map<String, String> searchInfo) {
		return riverProfileMapper.selectProjectList(searchInfo);
	}
}
