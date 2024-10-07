(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("INTR0001");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1090,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Employee", this);
            obj._setContents("<ColumnInfo><Column id=\"Check\" type=\"STRING\" size=\"256\"/><Column id=\"이름\" type=\"STRING\" size=\"256\"/><Column id=\"나이\" type=\"STRING\" size=\"256\"/><Column id=\"핸드폰\" type=\"STRING\" size=\"256\"/><Column id=\"집전화\" type=\"STRING\" size=\"256\"/><Column id=\"집주소\" type=\"STRING\" size=\"256\"/><Column id=\"집우편번호\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"직장주소\" type=\"STRING\" size=\"256\"/><Column id=\"직장우편번호\" type=\"STRING\" size=\"256\"/><Column id=\"직장전화\" type=\"STRING\" size=\"256\"/><Column id=\"직급\" type=\"STRING\" size=\"256\"/><Column id=\"입사일\" type=\"STRING\" size=\"256\"/><Column id=\"퇴사일\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"이름\">서동천</Col><Col id=\"나이\">66</Col><Col id=\"핸드폰\">010-1111-1111</Col><Col id=\"집전화\">02-1111-1111</Col><Col id=\"집주소\">서울시 강북구 미아동</Col><Col id=\"집우편번호\">05321</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 강동구 성내동</Col><Col id=\"직장우편번호\">05312</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">수석컨설턴트</Col><Col id=\"입사일\">2003-03-04</Col></Row><Row><Col id=\"이름\">모태강</Col><Col id=\"나이\">51</Col><Col id=\"핸드폰\">010-2222-2222</Col><Col id=\"집전화\">02-2222-2222</Col><Col id=\"집주소\">서울시 강남구 청담동</Col><Col id=\"집우편번호\">05312</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 강동구 성내동</Col><Col id=\"직장우편번호\">05485</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">수석컨설턴트</Col><Col id=\"입사일\">2003-03-05</Col></Row><Row><Col id=\"이름\">김이경</Col><Col id=\"나이\">25</Col><Col id=\"핸드폰\">010-3333-3333</Col><Col id=\"집전화\">02-3333-3333</Col><Col id=\"집주소\">서울시 강북구 수유동</Col><Col id=\"집우편번호\">05485</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 강동구 성내동</Col><Col id=\"직장우편번호\">05893</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2003-04-05</Col></Row><Row><Col id=\"이름\">지서영</Col><Col id=\"나이\">48</Col><Col id=\"핸드폰\">010-4444-4444</Col><Col id=\"집전화\">02-4444-4444</Col><Col id=\"집주소\">서울시 강남구 대치동</Col><Col id=\"집우편번호\">05893</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 강동구 성내동</Col><Col id=\"직장우편번호\">06523</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2005-12-11</Col></Row><Row><Col id=\"이름\">공수래</Col><Col id=\"나이\">60</Col><Col id=\"핸드폰\">010-5555-5555</Col><Col id=\"집전화\">02-5555-5555</Col><Col id=\"집주소\">서울시 강동구 천호동</Col><Col id=\"집우편번호\">06523</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 강동구 성내동</Col><Col id=\"직장우편번호\">02183</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2005-12-12</Col></Row><Row><Col id=\"이름\">차요한</Col><Col id=\"나이\">42</Col><Col id=\"핸드폰\">010-6666-6666</Col><Col id=\"집전화\">02-6666-6666</Col><Col id=\"집주소\">서울시 강남구 역삼동</Col><Col id=\"집우편번호\">02183</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 강남구 논현동</Col><Col id=\"직장우편번호\">02854</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2007-01-03</Col></Row><Row><Col id=\"이름\">강시영</Col><Col id=\"나이\">28</Col><Col id=\"핸드폰\">010-7777-7777</Col><Col id=\"집전화\">02-7777-7777</Col><Col id=\"집주소\">서울시 강남구 논현동</Col><Col id=\"집우편번호\">02854</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 강남구 논현동</Col><Col id=\"직장우편번호\">05985</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2009-05-30</Col></Row><Row><Col id=\"이름\">손석기</Col><Col id=\"나이\">43</Col><Col id=\"핸드폰\">010-8888-8888</Col><Col id=\"집전화\">02-8888-8888</Col><Col id=\"집주소\">서울시 강서구 여의도동</Col><Col id=\"집우편번호\">05985</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 서초구 서초동</Col><Col id=\"직장우편번호\">05327</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2009-11-12</Col></Row><Row><Col id=\"이름\">이유준</Col><Col id=\"나이\">34</Col><Col id=\"핸드폰\">010-9999-9999</Col><Col id=\"집전화\">02-9999-9999</Col><Col id=\"집주소\">서울시 강남구 논현동</Col><Col id=\"집우편번호\">05327</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 강남구 논현동</Col><Col id=\"직장우편번호\">05123</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2009-12-05</Col></Row><Row><Col id=\"이름\">강미래</Col><Col id=\"나이\">28</Col><Col id=\"핸드폰\">010-1111-2222</Col><Col id=\"집전화\">02-1111-2222</Col><Col id=\"집주소\">서울시 강남구 논현동</Col><Col id=\"집우편번호\">05123</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 강남구 논현동</Col><Col id=\"직장우편번호\">05952</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">선임컨설턴트</Col><Col id=\"입사일\">2010-01-22</Col></Row><Row><Col id=\"이름\">장만월</Col><Col id=\"나이\">30</Col><Col id=\"핸드폰\">010-3333-4444</Col><Col id=\"집전화\">02-3333-4444</Col><Col id=\"집주소\">서울시 중구 명동</Col><Col id=\"집우편번호\">05952</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 중구 명동</Col><Col id=\"직장우편번호\">05423</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">수석컨설턴트</Col><Col id=\"입사일\">2010-10-01</Col></Row><Row><Col id=\"이름\">구찬성</Col><Col id=\"나이\">30</Col><Col id=\"핸드폰\">010-5555-6666</Col><Col id=\"집전화\">02-5555-6666</Col><Col id=\"집주소\">서울시 강남구 개포동</Col><Col id=\"집우편번호\">05423</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 중구 명동</Col><Col id=\"직장우편번호\">04235</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">수석컨설턴트</Col><Col id=\"입사일\">2015-01-01</Col></Row><Row><Col id=\"이름\">산체스</Col><Col id=\"나이\">33</Col><Col id=\"핸드폰\">010-7777-8888</Col><Col id=\"집전화\">02-7777-8888</Col><Col id=\"집주소\">서울시 강남구 일원동</Col><Col id=\"집우편번호\">04235</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 강남구 삼성동</Col><Col id=\"직장우편번호\">05243</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2017-06-30</Col></Row><Row><Col id=\"이름\">지현중</Col><Col id=\"나이\">18</Col><Col id=\"핸드폰\">010-9999-0000</Col><Col id=\"집전화\">02-9999-0000</Col><Col id=\"집주소\">서울시 중구 명동</Col><Col id=\"집우편번호\">05243</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 중구 명동</Col><Col id=\"직장우편번호\">05886</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2017-08-20</Col></Row><Row><Col id=\"이름\">이재상</Col><Col id=\"나이\">37</Col><Col id=\"핸드폰\">010-0000-1111</Col><Col id=\"집전화\">02-0000-1111</Col><Col id=\"집주소\">서울시 강남구 도곡동</Col><Col id=\"집우편번호\">05886</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 서초구 서초동</Col><Col id=\"직장우편번호\">05412</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">선임컨설턴트</Col><Col id=\"입사일\">2019-02-01</Col></Row><Row><Col id=\"이름\">라시온</Col><Col id=\"나이\">33</Col><Col id=\"핸드폰\">010-2222-3333</Col><Col id=\"집전화\">02-2222-3333</Col><Col id=\"집주소\">서울시 강동구 명일동</Col><Col id=\"집우편번호\">05932</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 서초구 서초동</Col><Col id=\"직장우편번호\">05796</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">선임컨설턴트</Col><Col id=\"입사일\">2019-09-01</Col></Row><Row><Col id=\"이름\">제니장</Col><Col id=\"나이\">44</Col><Col id=\"핸드폰\">010-4444-5555</Col><Col id=\"집전화\">02-4444-5555</Col><Col id=\"집주소\">서울시 강남구 도곡동</Col><Col id=\"집우편번호\">05886</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 서초구 서초동</Col><Col id=\"직장우편번호\">05412</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">대표</Col><Col id=\"입사일\">2001-01-01</Col></Row><Row><Col id=\"이름\">김여옥</Col><Col id=\"나이\">58</Col><Col id=\"핸드폰\">010-6666-7777</Col><Col id=\"집전화\">02-6666-7777</Col><Col id=\"집주소\">서울시 강남구 도곡동</Col><Col id=\"집우편번호\">05886</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 서초구 서초동</Col><Col id=\"직장우편번호\">05412</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">회장</Col><Col id=\"입사일\">2001-01-01</Col></Row><Row><Col id=\"이름\">위예남</Col><Col id=\"나이\">35</Col><Col id=\"핸드폰\">010-8888-9999</Col><Col id=\"집전화\">02-8888-9999</Col><Col id=\"집주소\">서울시 강남구 개포동</Col><Col id=\"집우편번호\">05886</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 강남구 삼성동</Col><Col id=\"직장우편번호\">05243</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">전무</Col><Col id=\"입사일\">2001-01-01</Col></Row><Row><Col id=\"이름\">이현지</Col><Col id=\"나이\">30</Col><Col id=\"핸드폰\">010-1111-0000</Col><Col id=\"집전화\">02-1111-0000</Col><Col id=\"집주소\">서울시 강남구 논현동</Col><Col id=\"집우편번호\">05886</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 강남구 삼성동</Col><Col id=\"직장우편번호\">05243</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">이사</Col><Col id=\"입사일\">2001-01-01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Gender", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">여성</Col></Row><Row><Col id=\"Column0\">남성</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkHist", this);
            obj._setContents("<ColumnInfo><Column id=\"COMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB\" type=\"STRING\" size=\"256\"/><Column id=\"PART\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COMP_NAME\">코스모컨설팅</Col><Col id=\"START_DT\">20090518</Col><Col id=\"END_DT\">20110930</Col><Col id=\"PART\">시스템개발2과</Col></Row><Row><Col id=\"COMP_NAME\">NIP</Col><Col id=\"PART\">시스템개발</Col><Col id=\"START_DT\">20070501</Col><Col id=\"END_DT\">20081031</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCert", this);
            obj._setContents("<ColumnInfo><Column id=\"CERT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_ORG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CERT_NAME\">정보처리기사</Col><Col id=\"CERT_NO\">06204010938T</Col><Col id=\"CERT_DATE\">20061218</Col><Col id=\"CERT_ORG\">한국산업인력공단</Col></Row><Row><Col id=\"CERT_NAME\">OCP</Col><Col id=\"CERT_NO\">20070501</Col><Col id=\"CERT_DATE\">20061015</Col><Col id=\"CERT_ORG\">ORACLE</Col></Row><Row><Col id=\"CERT_NAME\">SCJP</Col><Col id=\"CERT_DATE\">20060928</Col><Col id=\"CERT_ORG\">SUN MICROSYSTEMS</Col></Row><Row><Col id=\"CERT_NAME\">SCSA</Col><Col id=\"CERT_DATE\">20050930</Col><Col id=\"CERT_ORG\">SUN MICROSYSTEMS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGraduate", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ORG_NAME\">충북대학교</Col><Col id=\"MAJOR\">사회학</Col><Col id=\"DEGREE\">학사(B.A)</Col><Col id=\"START_DT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEducation", this);
            obj._setContents("<ColumnInfo><Column id=\"EDU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EDU_NAME\">NEXACRO PLATFORM N 실무활용</Col><Col id=\"EDU_ORG\">(주) 투비소프트</Col><Col id=\"EDU_NO\">2024-05-2121-234052</Col><Col id=\"START_DT\"/></Row><Row><Col id=\"EDU_NAME\">NEXACRO PLATFORM N 운영자</Col><Col id=\"EDU_ORG\">(주) 투비소프트</Col><Col id=\"EDU_NO\">2024-05-2222-234053</Col></Row><Row><Col id=\"EDU_NAME\">NEXACRO PLATFORM 17 운영자</Col><Col id=\"EDU_NO\">2021-02-1818-71214</Col><Col id=\"EDU_ORG\">(주) 투비소프트</Col></Row><Row><Col id=\"EDU_NAME\">NEXACRO PLATFORM 17 실무활용</Col><Col id=\"EDU_NO\">2021-01-2828-70954</Col><Col id=\"EDU_ORG\">(주) 투비소프트</Col></Row><Row><Col id=\"EDU_NAME\">NEXACRO PLATFORM 17 기본</Col><Col id=\"EDU_ORG\">(주) 투비소프트</Col><Col id=\"EDU_NO\">2021-01-2026-70952</Col></Row><Row><Col id=\"EDU_NAME\">넥사크로플랫폼14</Col><Col id=\"EDU_ORG\">(주) 투비소프트</Col><Col id=\"EDU_NO\">2016-10-0405-2212</Col></Row><Row><Col id=\"EDU_NAME\">PMP로 가는길</Col><Col id=\"EDU_ORG\">에듀퓨어</Col><Col id=\"EDU_NO\">E1001-2600004</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"srchType\" type=\"STRING\" size=\"256\"/><Column id=\"keyword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("참고 사이트");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","10","44","1072","599",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1090,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SITE0001.xfdl", function() {

        this.INTR0001_oninit = function(obj,e)
        {
        	this.WebBrowser00.set_url('http://naver.com');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.INTR0001_oninit,this);
        };
        this.loadIncludeScript("SITE0001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
