package river.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import river.service.RiverProfileService;

@Controller
public class RiverProfileController {
	private Logger logger = LoggerFactory.getLogger(RiverProfileController.class);

	@Resource(name = "riverProfileService")
	private RiverProfileService riverProfileService;

	@RequestMapping(value = "/selectRiverProfileList.do")
	public NexacroResult selectRiverProfileList(
			@ParamDataSet(name = "input1", required = false) Map<String, String> ds_search) {

		logger.debug("ds_search >>> " + ds_search);

		List<Map<String, Object>> sampleList = null;

		sampleList = riverProfileService.selectProjectList(ds_search);

		NexacroResult result = new NexacroResult();
		result.addDataSet("output1", sampleList);

		return result;
	}

}
