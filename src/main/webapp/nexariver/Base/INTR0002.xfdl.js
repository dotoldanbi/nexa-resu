(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("INTR0002");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1090,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Employee", this);
            obj._setContents("<ColumnInfo><Column id=\"Check\" type=\"STRING\" size=\"256\"/><Column id=\"이름\" type=\"STRING\" size=\"256\"/><Column id=\"나이\" type=\"STRING\" size=\"256\"/><Column id=\"핸드폰\" type=\"STRING\" size=\"256\"/><Column id=\"집전화\" type=\"STRING\" size=\"256\"/><Column id=\"집주소\" type=\"STRING\" size=\"256\"/><Column id=\"집우편번호\" type=\"STRING\" size=\"256\"/><Column id=\"성별\" type=\"STRING\" size=\"256\"/><Column id=\"직장주소\" type=\"STRING\" size=\"256\"/><Column id=\"직장우편번호\" type=\"STRING\" size=\"256\"/><Column id=\"직장전화\" type=\"STRING\" size=\"256\"/><Column id=\"직급\" type=\"STRING\" size=\"256\"/><Column id=\"입사일\" type=\"STRING\" size=\"256\"/><Column id=\"퇴사일\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"이름\">서동천</Col><Col id=\"나이\">66</Col><Col id=\"핸드폰\">010-1111-1111</Col><Col id=\"집전화\">02-1111-1111</Col><Col id=\"집주소\">서울시 강북구 미아동</Col><Col id=\"집우편번호\">05321</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 강동구 성내동</Col><Col id=\"직장우편번호\">05312</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">수석컨설턴트</Col><Col id=\"입사일\">2003-03-04</Col></Row><Row><Col id=\"이름\">모태강</Col><Col id=\"나이\">51</Col><Col id=\"핸드폰\">010-2222-2222</Col><Col id=\"집전화\">02-2222-2222</Col><Col id=\"집주소\">서울시 강남구 청담동</Col><Col id=\"집우편번호\">05312</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 강동구 성내동</Col><Col id=\"직장우편번호\">05485</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">수석컨설턴트</Col><Col id=\"입사일\">2003-03-05</Col></Row><Row><Col id=\"이름\">김이경</Col><Col id=\"나이\">25</Col><Col id=\"핸드폰\">010-3333-3333</Col><Col id=\"집전화\">02-3333-3333</Col><Col id=\"집주소\">서울시 강북구 수유동</Col><Col id=\"집우편번호\">05485</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 강동구 성내동</Col><Col id=\"직장우편번호\">05893</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2003-04-05</Col></Row><Row><Col id=\"이름\">지서영</Col><Col id=\"나이\">48</Col><Col id=\"핸드폰\">010-4444-4444</Col><Col id=\"집전화\">02-4444-4444</Col><Col id=\"집주소\">서울시 강남구 대치동</Col><Col id=\"집우편번호\">05893</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 강동구 성내동</Col><Col id=\"직장우편번호\">06523</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2005-12-11</Col></Row><Row><Col id=\"이름\">공수래</Col><Col id=\"나이\">60</Col><Col id=\"핸드폰\">010-5555-5555</Col><Col id=\"집전화\">02-5555-5555</Col><Col id=\"집주소\">서울시 강동구 천호동</Col><Col id=\"집우편번호\">06523</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 강동구 성내동</Col><Col id=\"직장우편번호\">02183</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2005-12-12</Col></Row><Row><Col id=\"이름\">차요한</Col><Col id=\"나이\">42</Col><Col id=\"핸드폰\">010-6666-6666</Col><Col id=\"집전화\">02-6666-6666</Col><Col id=\"집주소\">서울시 강남구 역삼동</Col><Col id=\"집우편번호\">02183</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 강남구 논현동</Col><Col id=\"직장우편번호\">02854</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2007-01-03</Col></Row><Row><Col id=\"이름\">강시영</Col><Col id=\"나이\">28</Col><Col id=\"핸드폰\">010-7777-7777</Col><Col id=\"집전화\">02-7777-7777</Col><Col id=\"집주소\">서울시 강남구 논현동</Col><Col id=\"집우편번호\">02854</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 강남구 논현동</Col><Col id=\"직장우편번호\">05985</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2009-05-30</Col></Row><Row><Col id=\"이름\">손석기</Col><Col id=\"나이\">43</Col><Col id=\"핸드폰\">010-8888-8888</Col><Col id=\"집전화\">02-8888-8888</Col><Col id=\"집주소\">서울시 강서구 여의도동</Col><Col id=\"집우편번호\">05985</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 서초구 서초동</Col><Col id=\"직장우편번호\">05327</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2009-11-12</Col></Row><Row><Col id=\"이름\">이유준</Col><Col id=\"나이\">34</Col><Col id=\"핸드폰\">010-9999-9999</Col><Col id=\"집전화\">02-9999-9999</Col><Col id=\"집주소\">서울시 강남구 논현동</Col><Col id=\"집우편번호\">05327</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 강남구 논현동</Col><Col id=\"직장우편번호\">05123</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2009-12-05</Col></Row><Row><Col id=\"이름\">강미래</Col><Col id=\"나이\">28</Col><Col id=\"핸드폰\">010-1111-2222</Col><Col id=\"집전화\">02-1111-2222</Col><Col id=\"집주소\">서울시 강남구 논현동</Col><Col id=\"집우편번호\">05123</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 강남구 논현동</Col><Col id=\"직장우편번호\">05952</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">선임컨설턴트</Col><Col id=\"입사일\">2010-01-22</Col></Row><Row><Col id=\"이름\">장만월</Col><Col id=\"나이\">30</Col><Col id=\"핸드폰\">010-3333-4444</Col><Col id=\"집전화\">02-3333-4444</Col><Col id=\"집주소\">서울시 중구 명동</Col><Col id=\"집우편번호\">05952</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 중구 명동</Col><Col id=\"직장우편번호\">05423</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">수석컨설턴트</Col><Col id=\"입사일\">2010-10-01</Col></Row><Row><Col id=\"이름\">구찬성</Col><Col id=\"나이\">30</Col><Col id=\"핸드폰\">010-5555-6666</Col><Col id=\"집전화\">02-5555-6666</Col><Col id=\"집주소\">서울시 강남구 개포동</Col><Col id=\"집우편번호\">05423</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 중구 명동</Col><Col id=\"직장우편번호\">04235</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">수석컨설턴트</Col><Col id=\"입사일\">2015-01-01</Col></Row><Row><Col id=\"이름\">산체스</Col><Col id=\"나이\">33</Col><Col id=\"핸드폰\">010-7777-8888</Col><Col id=\"집전화\">02-7777-8888</Col><Col id=\"집주소\">서울시 강남구 일원동</Col><Col id=\"집우편번호\">04235</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 강남구 삼성동</Col><Col id=\"직장우편번호\">05243</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2017-06-30</Col></Row><Row><Col id=\"이름\">지현중</Col><Col id=\"나이\">18</Col><Col id=\"핸드폰\">010-9999-0000</Col><Col id=\"집전화\">02-9999-0000</Col><Col id=\"집주소\">서울시 중구 명동</Col><Col id=\"집우편번호\">05243</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 중구 명동</Col><Col id=\"직장우편번호\">05886</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">책임컨설턴트</Col><Col id=\"입사일\">2017-08-20</Col></Row><Row><Col id=\"이름\">이재상</Col><Col id=\"나이\">37</Col><Col id=\"핸드폰\">010-0000-1111</Col><Col id=\"집전화\">02-0000-1111</Col><Col id=\"집주소\">서울시 강남구 도곡동</Col><Col id=\"집우편번호\">05886</Col><Col id=\"성별\">남</Col><Col id=\"직장주소\">서울시 서초구 서초동</Col><Col id=\"직장우편번호\">05412</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">선임컨설턴트</Col><Col id=\"입사일\">2019-02-01</Col></Row><Row><Col id=\"이름\">라시온</Col><Col id=\"나이\">33</Col><Col id=\"핸드폰\">010-2222-3333</Col><Col id=\"집전화\">02-2222-3333</Col><Col id=\"집주소\">서울시 강동구 명일동</Col><Col id=\"집우편번호\">05932</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 서초구 서초동</Col><Col id=\"직장우편번호\">05796</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">선임컨설턴트</Col><Col id=\"입사일\">2019-09-01</Col></Row><Row><Col id=\"이름\">제니장</Col><Col id=\"나이\">44</Col><Col id=\"핸드폰\">010-4444-5555</Col><Col id=\"집전화\">02-4444-5555</Col><Col id=\"집주소\">서울시 강남구 도곡동</Col><Col id=\"집우편번호\">05886</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 서초구 서초동</Col><Col id=\"직장우편번호\">05412</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">대표</Col><Col id=\"입사일\">2001-01-01</Col></Row><Row><Col id=\"이름\">김여옥</Col><Col id=\"나이\">58</Col><Col id=\"핸드폰\">010-6666-7777</Col><Col id=\"집전화\">02-6666-7777</Col><Col id=\"집주소\">서울시 강남구 도곡동</Col><Col id=\"집우편번호\">05886</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 서초구 서초동</Col><Col id=\"직장우편번호\">05412</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">회장</Col><Col id=\"입사일\">2001-01-01</Col></Row><Row><Col id=\"이름\">위예남</Col><Col id=\"나이\">35</Col><Col id=\"핸드폰\">010-8888-9999</Col><Col id=\"집전화\">02-8888-9999</Col><Col id=\"집주소\">서울시 강남구 개포동</Col><Col id=\"집우편번호\">05886</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 강남구 삼성동</Col><Col id=\"직장우편번호\">05243</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">전무</Col><Col id=\"입사일\">2001-01-01</Col></Row><Row><Col id=\"이름\">이현지</Col><Col id=\"나이\">30</Col><Col id=\"핸드폰\">010-1111-0000</Col><Col id=\"집전화\">02-1111-0000</Col><Col id=\"집주소\">서울시 강남구 논현동</Col><Col id=\"집우편번호\">05886</Col><Col id=\"성별\">여</Col><Col id=\"직장주소\">서울시 강남구 삼성동</Col><Col id=\"직장우편번호\">05243</Col><Col id=\"직장전화\">02-1234-5678</Col><Col id=\"직급\">이사</Col><Col id=\"입사일\">2001-01-01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Prj", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRJ_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_FRNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_BKND\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_DB\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_SVR\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_TOOL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PrjEdit", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRJ_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_FRNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_BKND\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_DB\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_SVR\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_TOOL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Prj00", this);
            obj._setContents("<ColumnInfo><Column id=\"PRJ_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_FRONT\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_BACK\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_DB\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_SERVER\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_TOOL\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRJ_NAME\">우선구매시스템 운영</Col><Col id=\"PRJ_DATE\">2021</Col><Col id=\"PRJ_TYPE\">SM</Col><Col id=\"PRJ_CUSTOMER\">장애인개발원</Col><Col id=\"PRJ_FRONT\">MiPLATFORM</Col><Col id=\"PRJ_BACK\">JAVA, SPRING</Col><Col id=\"PRJ_DB\">ORACLE</Col><Col id=\"PRJ_SERVER\">Weblogic</Col></Row><Row><Col id=\"PRJ_NAME\">AI기반 전자감독서비스 구축</Col><Col id=\"PRJ_DATE\">2020</Col><Col id=\"PRJ_TYPE\">SI</Col><Col id=\"PRJ_CUSTOMER\">법무부</Col><Col id=\"PRJ_TOOL\">Eclipse</Col><Col id=\"PRJ_FRONT\">MiPLATFORM</Col><Col id=\"PRJ_BACK\">JAVA, SPRING</Col><Col id=\"PRJ_DB\">ORACLE</Col><Col id=\"PRJ_SERVER\">Tomcat(개발)</Col></Row><Row><Col id=\"PRJ_NAME\">국민체육진흥동단 경륜경정시스템</Col><Col id=\"PRJ_DATE\">2019</Col><Col id=\"PRJ_TYPE\">SM</Col><Col id=\"PRJ_CUSTOMER\">국민체육진흥공단</Col><Col id=\"PRJ_FRONT\">xPLATFORM</Col><Col id=\"PRJ_BACK\">JAVA, SPRING</Col><Col id=\"PRJ_DB\">ORACLE</Col><Col id=\"PRJ_TOOL\">Eclipse</Col><Col id=\"PRJ_SERVER\">Tomcat(개발)</Col></Row><Row><Col id=\"PRJ_NAME\">삼성SDS BOSS시스템 빌링엔진 교체</Col><Col id=\"PRJ_DATE\">2018</Col><Col id=\"PRJ_TYPE\">SI</Col><Col id=\"PRJ_CUSTOMER\">삼성SDS</Col><Col id=\"PRJ_FRONT\">xPLATFORM</Col><Col id=\"PRJ_BACK\">JAVA, SPRING</Col><Col id=\"PRJ_DB\">ORACLE</Col><Col id=\"PRJ_TOOL\">Eclipse</Col><Col id=\"PRJ_SERVER\">Tomcat(개발)</Col></Row><Row><Col id=\"PRJ_NAME\">CMC 인사개발</Col><Col id=\"PRJ_DATE\">2017</Col><Col id=\"PRJ_TYPE\">SI</Col><Col id=\"PRJ_CUSTOMER\">평화IS(카톨릭성모병원)</Col><Col id=\"PRJ_FRONT\">xPLATFORM</Col><Col id=\"PRJ_BACK\">JAVA, SPRING</Col><Col id=\"PRJ_DB\">ORACLE</Col><Col id=\"PRJ_TOOL\">Eclipse</Col><Col id=\"PRJ_SERVER\">Tomcat(개발)</Col></Row><Row><Col id=\"PRJ_NAME\">대우증권 사후상품관리 고도화 구축</Col><Col id=\"PRJ_DATE\">2016</Col><Col id=\"PRJ_TYPE\">SI</Col><Col id=\"PRJ_CUSTOMER\">대우증권</Col><Col id=\"PRJ_FRONT\">xPLATFORM</Col><Col id=\"PRJ_BACK\">JAVA, SPRING</Col><Col id=\"PRJ_DB\">ORACLE</Col><Col id=\"PRJ_TOOL\">Eclipse</Col><Col id=\"PRJ_SERVER\">Tomcat(개발)</Col></Row><Row><Col id=\"PRJ_NAME\">화진화장품 종합시스템 프로젝트</Col><Col id=\"PRJ_DATE\">2015</Col><Col id=\"PRJ_TYPE\">SI</Col><Col id=\"PRJ_CUSTOMER\">화진화장품</Col><Col id=\"PRJ_FRONT\">xPLATFORM</Col><Col id=\"PRJ_BACK\">JAVA, SPRING</Col><Col id=\"PRJ_DB\">ORACLE</Col><Col id=\"PRJ_TOOL\">Eclipse</Col><Col id=\"PRJ_SERVER\">Tomcat(개발)</Col></Row><Row><Col id=\"PRJ_NAME\">현대모비스 중국 AMOS 프로젝트</Col><Col id=\"PRJ_DATE\">2014</Col><Col id=\"PRJ_TYPE\">SI</Col><Col id=\"PRJ_CUSTOMER\">현대모비스</Col><Col id=\"PRJ_FRONT\">MiPLATFORM</Col><Col id=\"PRJ_BACK\">JAVA, SPRING</Col><Col id=\"PRJ_DB\">ORACLE</Col><Col id=\"PRJ_TOOL\">Eclipse</Col><Col id=\"PRJ_SERVER\">Tomcat(개발)</Col></Row><Row><Col id=\"PRJ_NAME\">삼성물산 IAM고도화 프로젝트</Col><Col id=\"PRJ_DATE\">2014</Col><Col id=\"PRJ_TYPE\">SI</Col><Col id=\"PRJ_CUSTOMER\">삼성물산</Col><Col id=\"PRJ_FRONT\">xPLATFORM</Col><Col id=\"PRJ_BACK\">JAVA, SPRING</Col><Col id=\"PRJ_DB\">ORACLE</Col><Col id=\"PRJ_TOOL\">Eclipse(Anyframe)</Col><Col id=\"PRJ_SERVER\">Tomcat(개발)</Col></Row><Row><Col id=\"PRJ_NAME\">대우증권 리스크관리 프로젝트</Col><Col id=\"PRJ_DATE\">2013</Col><Col id=\"PRJ_TYPE\">SI</Col><Col id=\"PRJ_CUSTOMER\">대우증권</Col><Col id=\"PRJ_FRONT\">xPLATFORM</Col><Col id=\"PRJ_BACK\">JAVA, SPRING</Col><Col id=\"PRJ_DB\">ORACLE</Col><Col id=\"PRJ_TOOL\">Eclipse</Col><Col id=\"PRJ_SERVER\">Tomcat(개발)</Col></Row><Row><Col id=\"PRJ_NAME\">삼성전자 챗온개발</Col><Col id=\"PRJ_DATE\">2013</Col><Col id=\"PRJ_TYPE\">SI</Col><Col id=\"PRJ_CUSTOMER\">삼성전자</Col><Col id=\"PRJ_FRONT\">JSP</Col><Col id=\"PRJ_BACK\">JAVA, SPRING</Col><Col id=\"PRJ_DB\">mySQL</Col><Col id=\"PRJ_TOOL\">Eclipse(Anyframe)</Col><Col id=\"PRJ_SERVER\">Tomcat(개발)</Col></Row><Row><Col id=\"PRJ_NAME\">한국사이버결제 시스템개발</Col><Col id=\"PRJ_DATE\">2012</Col><Col id=\"PRJ_TYPE\">SI</Col><Col id=\"PRJ_CUSTOMER\">한국사이버결제</Col><Col id=\"PRJ_FRONT\">JSP</Col><Col id=\"PRJ_BACK\">JAVA, SPRING</Col><Col id=\"PRJ_DB\">ORACLE</Col><Col id=\"PRJ_TOOL\">Eclipse</Col><Col id=\"PRJ_SERVER\">jBOSS(개발)</Col></Row><Row><Col id=\"PRJ_NAME\">대한생명 콜센터 차세대</Col><Col id=\"PRJ_DATE\">2012</Col><Col id=\"PRJ_TYPE\">SI</Col><Col id=\"PRJ_CUSTOMER\">대한생명</Col><Col id=\"PRJ_FRONT\">MiPLATFORM</Col><Col id=\"PRJ_BACK\">JAVA, SPRING</Col><Col id=\"PRJ_DB\">ORACLE</Col><Col id=\"PRJ_TOOL\">Eclipse</Col><Col id=\"PRJ_SERVER\">Tomcat(개발)</Col></Row><Row><Col id=\"PRJ_NAME\">차세대 자치체 시스템</Col><Col id=\"PRJ_DATE\">2010</Col><Col id=\"PRJ_TYPE\">SI</Col><Col id=\"PRJ_CUSTOMER\">료묘시스템즈(両毛システムズ)</Col><Col id=\"PRJ_FRONT\">MiPLATFORM</Col><Col id=\"PRJ_BACK\">JAVA, SPRING</Col><Col id=\"PRJ_DB\">ORACLE</Col><Col id=\"PRJ_TOOL\">Eclipse(Anyframe)</Col><Col id=\"PRJ_SERVER\">Tomcat(개발)</Col></Row><Row><Col id=\"PRJ_NAME\">차세대 POS 시스템</Col><Col id=\"PRJ_DATE\">2008</Col><Col id=\"PRJ_TYPE\">SI</Col><Col id=\"PRJ_CUSTOMER\">이데미츠(出光)</Col><Col id=\"PRJ_FRONT\">JSP</Col><Col id=\"PRJ_BACK\">JAVA, STRUTS</Col><Col id=\"PRJ_DB\">ORACLE</Col><Col id=\"PRJ_TOOL\">Eclipse</Col><Col id=\"PRJ_SERVER\">Tomcat(개발)</Col></Row><Row><Col id=\"PRJ_NAME\">차세대 보험 시스템</Col><Col id=\"PRJ_DATE\">2007</Col><Col id=\"PRJ_TYPE\">SI</Col><Col id=\"PRJ_CUSTOMER\">미츠이스미토모보험(三井住友&#10;保険&#10;)</Col><Col id=\"PRJ_FRONT\">PYTHON</Col><Col id=\"PRJ_TOOL\">AQUALOGIC</Col></Row><Row><Col id=\"PRJ_NAME\">차세대 POS 시스템</Col><Col id=\"PRJ_DATE\">2007</Col><Col id=\"PRJ_TYPE\">SI</Col><Col id=\"PRJ_CUSTOMER\">이데미츠(出光)</Col><Col id=\"PRJ_FRONT\">JSP</Col><Col id=\"PRJ_BACK\">JAVA, STRUTS</Col><Col id=\"PRJ_DB\">ORACLE</Col><Col id=\"PRJ_TOOL\">Eclipse</Col><Col id=\"PRJ_SERVER\">Tomcat(개발)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PRJ_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRJ_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("· Home > 소개  > 경력증명");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","6","507",null,"140","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid");
            obj.set_text("");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","6","6","110","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트명");
            obj.set_cssclass("sta_cm_box01R");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static08","115","6","835","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00","120","10","827","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static08_00","115","37","832","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","120","40","199","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_01","6","66","110","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("프론트");
            obj.set_cssclass("sta_cm_box01R");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static08_01","115","66","285","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","120","70","199","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","6","97","110","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("SERVER");
            obj.set_cssclass("sta_cm_box01R");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static08_00_00","115","97","285","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","120","101","199","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_02","320","36","110","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("수행년도");
            obj.set_cssclass("sta_cm_box01R");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static08_02","429","36","285","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_00","6","37","110","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("고객사");
            obj.set_cssclass("sta_cm_box01R");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","434","40","199","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","320","66","110","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("백엔드");
            obj.set_cssclass("sta_cm_box01R");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static08_02_00","429","66","285","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","320","97","110","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("TOOL");
            obj.set_cssclass("sta_cm_box01R");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static08_00_01_00","429","97","206","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00","434","101","199","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_03","634","36","110","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("SI / SM");
            obj.set_cssclass("sta_cm_box01R");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00","434","70","199","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static08_03","743","36","207","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","634","66","110","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("DB");
            obj.set_cssclass("sta_cm_box01R");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static08_01_00","743","66","207","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","748","70","199","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("Combo00","748","40","199","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            var divDetail_form_Combo00_innerdataset = new nexacro.NormalDataset("divDetail_form_Combo00_innerdataset", obj);
            divDetail_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SI</Col><Col id=\"datacolumn\">SI</Col></Row><Row><Col id=\"codecolumn\">SM</Col><Col id=\"datacolumn\">SM</Col></Row></Rows>");
            obj.set_innerdataset(divDetail_form_Combo00_innerdataset);
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnApply","963","11","75","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_add01");
            obj.set_text("적용");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnInit","963","40","75","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_delete01");
            obj.set_text("초기화");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divResult","6","120",null,"358","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_border("1px solid");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","6","10",null,null,"9","7",null,null,null,null,this.divResult.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Prj");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 데이터가 없습니다");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"프로젝트명\"/><Cell col=\"1\" rowspan=\"2\" text=\"수행년도\"/><Cell col=\"2\" rowspan=\"2\" text=\"SI / SM\"/><Cell col=\"3\" rowspan=\"2\" text=\"고객사\"/><Cell col=\"4\" colspan=\"5\" text=\"소요기술\"/><Cell row=\"1\" col=\"4\" text=\"프론트\"/><Cell row=\"1\" col=\"5\" text=\"프레임워크\"/><Cell row=\"1\" col=\"6\" text=\"DB\"/><Cell row=\"1\" col=\"7\" text=\"SERVER\"/><Cell row=\"1\" col=\"8\" text=\"TOOL\"/></Band><Band id=\"body\"><Cell text=\"bind:PRJ_NAME\"/><Cell col=\"1\" text=\"bind:PRJ_YEAR\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRJ_TYPE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PRJ_CUSTOMER\"/><Cell col=\"4\" text=\"bind:PRJ_FRNT\"/><Cell col=\"5\" text=\"bind:PRJ_BKND\"/><Cell col=\"6\" text=\"bind:PRJ_DB\"/><Cell col=\"7\" text=\"bind:PRJ_SVR\"/><Cell col=\"8\" text=\"bind:PRJ_TOOL\"/></Band></Format></Formats>");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("Static00_00","6","479",null,"34","4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("프로젝트 상세");
            obj.set_cssclass("sta_WF_title01");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","6","45",null,"70","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid");
            obj.set_text("");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("stcSrchPrjName","6","6","110","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트명");
            obj.set_cssclass("sta_cm_box01R");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08_00_00","115","6","285","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSrchPrjName","120","10","199","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcSrchPrjType","320","6","110","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("유형");
            obj.set_cssclass("sta_cm_box01R");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08_00_01_00","429","6","206","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchPrjType","434","10","199","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            var divSearch_form_cboSearchPrjType_innerdataset = new nexacro.NormalDataset("divSearch_form_cboSearchPrjType_innerdataset", obj);
            divSearch_form_cboSearchPrjType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">SI</Col><Col id=\"datacolumn\">SI</Col></Row><Row><Col id=\"codecolumn\">SM</Col><Col id=\"datacolumn\">SM</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboSearchPrjType_innerdataset);
            obj.set_text("SI");
            obj.set_value("SI");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSrch",null,"-2","70","70","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_search03");
            obj.set_text("");
            obj.set_font("normal 10pt/normal \"나눔고딕\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnExExl","996","13",null,"26","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀출력");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divResult.form
            obj = new Layout("default","",0,0,this.divResult.form,function(p){});
            this.divResult.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1090,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.Edit00","value","ds_PrjEdit","PRJ_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit00_02","value","ds_PrjEdit","PRJ_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit00_00","value","ds_PrjEdit","PRJ_CUSTOMER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit00_01_00","value","ds_PrjEdit","PRJ_DB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Edit00_02_00","value","ds_PrjEdit","PRJ_BACK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Edit00_01","value","ds_PrjEdit","PRJ_FRONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Edit00_00_00","value","ds_PrjEdit","PRJ_SERVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Edit00_00_01_00","value","ds_PrjEdit","PRJ_TOOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.Edit00_00","value","ds_PrjEdit","PRJ_CUSTOMER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.Edit00_01","value","ds_PrjEdit","PRJ_FRNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.Edit00_00_00","value","ds_PrjEdit","PRJ_SVR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.Edit00_02","value","ds_PrjEdit","PRJ_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.Edit00_02_00","value","ds_PrjEdit","PRJ_BKND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.Edit00_00_01_00","value","ds_PrjEdit","PRJ_TOOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.Edit00_01_00","value","ds_PrjEdit","PRJ_DB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.Combo00","value","ds_PrjEdit","PRJ_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.Edit00","value","ds_PrjEdit","PRJ_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.Edit00_00","value","ds_PrjEdit","PRJ_CUSTOMER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.Edit00_01","value","ds_PrjEdit","PRJ_FRNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.Edit00_02","value","ds_PrjEdit","PRJ_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSearch.form.Edit00_02_00","value","ds_PrjEdit","PRJ_BKND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divSearch.form.Edit00_00_01_00","value","ds_PrjEdit","PRJ_TOOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divSearch.form.Edit00_01_00","value","ds_PrjEdit","PRJ_DB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("INTR0002.xfdl","LIB::common.xjs");
        this.registerScript("INTR0002.xfdl", function() {
        /************************************************************************
        TITLE  : 경력기술 관리
        AUTHOR : jhsong
        DATE   : 2024.01.01.
        ************************************************************************/
        this.executeIncludeScript("LIB::common.xjs"); /*include "LIB::common.xjs"*/;

        //서버 Xeni Excel 관련 servlet mapping 주소
        this.url = "http://" + nexacro.getEnvironmentVariable("SVR_URL") + ":8081/river/XExportImport.do";

        //Export에 사용할 ExcelExportObject 변수생성
        this.objExcelExport = null;

        /************************************************************************
        INTR0002_onload : form onload
        ************************************************************************/
        this.INTR0002_onload = function(obj,e)
        {
          //폼로딩후 ExcelExportObject 생성
          this.objExcelExport = new nexacro.ExcelExportObject("ExcelExportObject",this);

          //생성한 오브젝트에 이벤트추가
          this.objExcelExport.addEventHandler("onprogress", this.ExcelExportObject_onprogress, this);
          this.objExcelExport.addEventHandler("onsuccess", this.ExcelExportObject_onsuccess, this);
          this.objExcelExport.addEventHandler("onerror", this.ExcelExportObject_onerror, this);

          //ExcelExportObject 의 대상 Grid 및 속성설정
          this.objExcelExport.addExportItem(nexacro.ExportItemTypes.GRID, this.divResult.form.grdList, "Sheet1!A1","allband","allrecord", "merge", "allstyle", "none", "none", "width");
          this.objExcelExport.set_exportmessageprocess("%d [ %d / %d ]");
          this.objExcelExport.set_exportuitype("exportprogress");
          this.objExcelExport.set_exporteventtype("itemrecord");
          this.objExcelExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
          this.objExcelExport.set_exporturl(this.url);

          this.addChild("ExcelExportObject", this.objExcelExport);
        };


        /************************************************************************
        검색버튼 onClick Event
        ************************************************************************/
        this.divSearch_btnSrch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };


        /************************************************************************
        트랜잭션 콜백
        ************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
          // 에러 시 화면 처리 내역
          if(errorCode != 0)
          {
            this.alert(errorCode+"\n"+errorMsg);
            return;
          }

          switch(svcID)
          {
            case "search":
              if(this.ds_Prj.rowcount < 1){
                this.alert("조회된 결과가 없습니다.");
              } else {
        		this.lfn_dispBottom(nexacro.toNumber(this.ds_Prj.rowcount) + "건 조회되었습니다.");
        	  }

              break;
          }
        };

        /************************************************************************
        검색 트랜잭션
        ************************************************************************/
        this.fnSearch = function ()
        {
          // 조회조건 셋팅
          this.dsSearch.setColumn(0, "PRJ_NAME", this.divSearch.form.edtSrchPrjName.text);
          this.dsSearch.setColumn(0, "PRJ_TYPE", this.divSearch.form.cboSearchPrjType.value);

          var strSvcId    = "search";
          var strSvcUrl   = "svc::selectRiverProfileList.do";
          var inData      = "input1=dsSearch";
          var outData     = "ds_Prj=output1";
          var strArg      = "";
          var callBackFnc = "fnCallback";
          var isAsync     = true;

          this.transaction(strSvcId ,     // transaction을 구분하기 위한 svc id값
                    strSvcUrl ,   // trabsaction을 요청할 주소
                    inData ,     // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                    outData ,     // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                    strArg,     // 입력값으로 보낼 arguments, a=b
                    callBackFnc,   // transaction의 결과를 받을 Function 이름
                    isAsync);     // 비동기통신 여부 [생략가능]
        };

        /************************************************************************
        엑셀출력 버튼 onClick
        ************************************************************************/
        this.btnExExl_onclick = function(obj,e)
        {
        	if (this.ds_Prj.rowcount < 1)
        	{
        		alert("출력할 데이터가 없습니다.");
        		return false;
        	}

          //파일이름 셋팅 및 ExcelExport 실행
          this.objExcelExport.set_exportfilename("Project_Hist");
          this.objExcelExport.exportData();
        };

        /************************************************************************
        엑셀출력 success callback
        ************************************************************************/
        this.ExcelExportObject_onsuccess = function(obj, e)
        {
          var str = "";
          str += "\n=========== onsuccess event start=================";
          str += "\ne.eventid : " + e.eventid;
          str += "\ne.url: " +  e.url;
          str += "\ne.id :"+e.id;
          str += "\ne.fromobject :"+e.fromobject;
          str += "\ne.fromreferenceobject  :"+e.fromreferenceobject;
          //trace(str);
        };

        /************************************************************************
        엑셀출력 progress
        ************************************************************************/
        this.ExcelExportObject_onprogress = function(obj, e)
        {
          var str = "";
          str += "\n=========== onprogress event start================";
          str += "\ne.eventid  :"+e.eventid;
          str += "\ne.id :"+e.id;
          str += "\ne.fromobject :"+e.fromobject;
          str += "\ne.fromreferenceobject  :"+e.fromreferenceobject;
          str += "\ne.itemindex :"+e.itemindex;
          str += "\ne.itemtype :"+e.itemtype;
          str += "\ne.recordindex :"+e.recordindex;
          //trace(str);
        };

        /************************************************************************
        엑셀출력 error callback
        ************************************************************************/
        this.ExcelExportObject_onerror = function(obj, e)
        {
          var str = "";
          str += "\n=========== onerror event start===================";
          str += "\ne.eventid :"+e.eventid;
          str += "\ne.id :"+e.id;
          str += "\ne.fromobject :"+e.fromobject;
          str += "\ne.fromreferenceobject :"+e.fromreferenceobject;
          str += "\ne.errorcode :"+e.errorcode;
          str += "\ne.errormsg :"+e.errormsg;
          //trace(str);
        };


        /************************************************************************
        divDetail_btnApply_onclick : 적용버튼 클릭 이벤트
        ************************************************************************/
        this.divDetail_btnApply_onclick = function(obj,e)
        {
        	var nRow = this.ds_Prj.rowposition;
        	this.ds_Prj.copyRow(nRow, this.ds_PrjEdit, 0);
        };

        /************************************************************************
        divDetail_btnInit_onclick : 초기화버튼 클릭 이벤트
        ************************************************************************/
        this.divDetail_btnInit_onclick = function(obj,e)
        {
        	this.ds_PrjEdit.clearData();
        	var aRow = this.ds_PrjEdit.addRow();
        	this.ds_PrjEdit.copyRow(0, this.ds_Prj, this.ds_PrjEdit.rowposition);
        };


        ///// DATASET
        /************************************************************************
        dataset onrowpostchanged event
        ************************************************************************/
        this.ds_Prj_onrowposchanged = function(obj,e)
        {
        	this.ds_PrjEdit.clearData();
        	var aRow = this.ds_PrjEdit.addRow();
        	this.ds_PrjEdit.copyRow(0, this.ds_Prj, e.newrow);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.INTR0002_onload,this);
            this.divDetail.form.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.divDetail.form.Static01_01.addEventHandler("onclick",this.Static01_onclick,this);
            this.divDetail.form.Static01_00_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.divDetail.form.Static01_02.addEventHandler("onclick",this.Static01_onclick,this);
            this.divDetail.form.Static01_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.divDetail.form.Static01_02_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.divDetail.form.Static01_00_01_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.divDetail.form.Static01_03.addEventHandler("onclick",this.Static01_onclick,this);
            this.divDetail.form.Static01_01_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.divDetail.form.btnApply.addEventHandler("onclick",this.divDetail_btnApply_onclick,this);
            this.divDetail.form.btnInit.addEventHandler("onclick",this.divDetail_btnInit_onclick,this);
            this.divSearch.form.stcSrchPrjName.addEventHandler("onclick",this.Static01_onclick,this);
            this.divSearch.form.stcSrchPrjType.addEventHandler("onclick",this.Static01_onclick,this);
            this.divSearch.form.btnSrch.addEventHandler("onclick",this.divSearch_btnSrch_onclick,this);
            this.btnExExl.addEventHandler("onclick",this.btnExExl_onclick,this);
            this.ds_Prj.addEventHandler("onrowposchanged",this.ds_Prj_onrowposchanged,this);
            this.ds_Prj00.addEventHandler("onrowposchanged",this.ds_Prj_onrowposchanged,this);
        };
        this.loadIncludeScript("INTR0002.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
