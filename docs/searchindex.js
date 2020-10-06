Search.setIndex({docnames:["README","api/clearer","api/clearer.management","api/clearer.management.commands","api/impsepa","api/impsepa.management","api/impsepa.management.commands","api/manage","api/modules","api/router","api/router.management","api/router.management.commands","api/router.migrations","api/settler","api/settler.management","api/settler.management.commands","api/settler.migrations","clearer","design","development","implementation","impsepa","impsic","index","introduction","related-work","router","running","settler"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["README.rst","api/clearer.rst","api/clearer.management.rst","api/clearer.management.commands.rst","api/impsepa.rst","api/impsepa.management.rst","api/impsepa.management.commands.rst","api/manage.rst","api/modules.rst","api/router.rst","api/router.management.rst","api/router.management.commands.rst","api/router.migrations.rst","api/settler.rst","api/settler.management.rst","api/settler.management.commands.rst","api/settler.migrations.rst","clearer.rst","design.rst","development.rst","implementation.rst","impsepa.rst","impsic.rst","index.rst","introduction.rst","related-work.rst","router.rst","running.rst","settler.rst"],objects:{"":{clearer:[1,0,0,"-"],impsepa:[4,0,0,"-"],manage:[7,0,0,"-"],router:[9,0,0,"-"],settler:[13,0,0,"-"],tapestry:[23,0,0,"-"]},"clearer.apps":{ClearerConfig:[1,1,1,""]},"clearer.apps.ClearerConfig":{name:[1,2,1,""],ready:[1,3,1,""],verbose_name:[1,2,1,""]},"clearer.handlers":{packet_received:[1,4,1,""]},"clearer.management":{commands:[3,0,0,"-"]},"clearer.management.commands":{receive_payment:[3,0,0,"-"],routing_daemon:[3,0,0,"-"],send_payment:[3,0,0,"-"]},"clearer.management.commands.receive_payment":{Command:[3,1,1,""]},"clearer.management.commands.receive_payment.Command":{add_arguments:[3,3,1,""],error:[3,3,1,""],format_payment:[3,3,1,""],handle:[3,3,1,""],help:[3,2,1,""],notice:[3,3,1,""],success:[3,3,1,""]},"clearer.management.commands.routing_daemon":{Command:[3,1,1,""]},"clearer.management.commands.routing_daemon.Command":{QUEUES:[3,2,1,""],RoutingService:[3,1,1,""],error:[3,3,1,""],handle:[3,3,1,""],help:[3,2,1,""],notice:[3,3,1,""],success:[3,3,1,""]},"clearer.management.commands.routing_daemon.Command.RoutingService":{authorise:[3,3,1,""],format_payment:[3,3,1,""],route:[3,3,1,""]},"clearer.management.commands.send_payment":{Command:[3,1,1,""]},"clearer.management.commands.send_payment.Command":{add_arguments:[3,3,1,""],error:[3,3,1,""],handle:[3,3,1,""],help:[3,2,1,""],notice:[3,3,1,""],success:[3,3,1,""]},"clearer.services":{RoutingError:[1,5,1,""],RoutingService:[1,1,1,""]},"clearer.services.RoutingService":{authorise:[1,3,1,""],format_payment:[1,3,1,""],route:[1,3,1,""]},"impsepa.apps":{ImpsepaConfig:[4,1,1,""]},"impsepa.apps.ImpsepaConfig":{name:[4,2,1,""],ready:[4,3,1,""],verbose_name:[4,2,1,""]},"impsepa.constants":{SepaCsm:[4,1,1,""]},"impsepa.constants.SepaCsm":{BSRA:[4,2,1,""],CECB:[4,2,1,""],CSIA:[4,2,1,""],CTRL:[4,2,1,""],DBSC:[4,2,1,""],DIAS:[4,2,1,""],EBAS:[4,2,1,""],EQNS:[4,2,1,""],IBPA:[4,2,1,""],KIRP:[4,2,1,""],PBSD:[4,2,1,""],SCTI:[4,2,1,""],STET:[4,2,1,""],STPA:[4,2,1,""],TIPS:[4,2,1,""]},"impsepa.handlers":{fex_message_received:[4,4,1,""]},"impsepa.management":{commands:[6,0,0,"-"]},"impsepa.management.commands":{impsepa_hax:[6,0,0,"-"],sepa_ingress:[6,0,0,"-"]},"impsepa.management.commands.impsepa_hax":{Command:[6,1,1,""]},"impsepa.management.commands.impsepa_hax.Command":{handle:[6,3,1,""],help:[6,2,1,""]},"impsepa.management.commands.sepa_ingress":{Command:[6,1,1,""],FIToFICustomerCreditTransferV02:[6,1,1,""],pacs008:[6,2,1,""]},"impsepa.management.commands.sepa_ingress.Command":{add_arguments:[6,3,1,""],handle:[6,3,1,""],help:[6,2,1,""],success:[6,3,1,""]},"impsepa.management.commands.sepa_ingress.FIToFICustomerCreditTransferV02":{DoesNotExist:[6,5,1,""],MultipleObjectsReturned:[6,5,1,""],amount:[6,2,1,""],creditor_bic:[6,2,1,""],creditor_iban:[6,2,1,""],currency:[6,2,1,""],debtor_bic:[6,2,1,""],debtor_iban:[6,2,1,""],root:[6,2,1,""]},"impsepa.processors":{Processor:[4,1,1,""],ProcessorError:[4,5,1,""],SCTSEPAProcessor:[4,1,1,""],SEPAProcessor:[4,1,1,""]},"impsepa.processors.Processor":{can_process:[4,3,1,""],create_payments:[4,3,1,""],debulk_message:[4,3,1,""],scheme:[4,3,1,""],validate_message:[4,3,1,""]},"impsepa.processors.SCTSEPAProcessor":{can_process:[4,3,1,""],create_payments:[4,3,1,""],debulk_message:[4,3,1,""],scheme:[4,3,1,""],validate_message:[4,3,1,""]},"router.admin":{SepaRouteAdmin:[9,1,1,""]},"router.admin.SepaRouteAdmin":{list_display:[9,2,1,""],list_filter:[9,2,1,""],media:[9,3,1,""]},"router.apps":{RouterConfig:[9,1,1,""]},"router.apps.RouterConfig":{name:[9,2,1,""]},"router.forms":{SepaRouteForm:[9,1,1,""]},"router.forms.SepaRouteForm":{Meta:[9,1,1,""],base_fields:[9,2,1,""],declared_fields:[9,2,1,""],media:[9,3,1,""]},"router.forms.SepaRouteForm.Meta":{fields:[9,2,1,""],model:[9,2,1,""]},"router.management":{commands:[11,0,0,"-"]},"router.management.commands":{import_scldirectory:[11,0,0,"-"],import_separouting:[11,0,0,"-"],import_tipsreach:[11,0,0,"-"]},"router.management.commands.import_scldirectory":{Command:[11,1,1,""]},"router.management.commands.import_scldirectory.Command":{add_arguments:[11,3,1,""],handle:[11,3,1,""],help:[11,2,1,""]},"router.management.commands.import_separouting":{Command:[11,1,1,""]},"router.management.commands.import_separouting.Command":{add_arguments:[11,3,1,""],handle:[11,3,1,""],help:[11,2,1,""]},"router.management.commands.import_tipsreach":{Command:[11,1,1,""]},"router.management.commands.import_tipsreach.Command":{add_arguments:[11,3,1,""],handle:[11,3,1,""],help:[11,2,1,""]},"router.migrations":{"0001_initial":[12,0,0,"-"],"0002_auto_20201003_1926":[12,0,0,"-"],"0003_auto_20201003_2000":[12,0,0,"-"],"0004_auto_20201004_2235":[12,0,0,"-"]},"router.migrations.0001_initial":{Migration:[12,1,1,""]},"router.migrations.0001_initial.Migration":{dependencies:[12,2,1,""],initial:[12,2,1,""],operations:[12,2,1,""]},"router.migrations.0002_auto_20201003_1926":{Migration:[12,1,1,""]},"router.migrations.0002_auto_20201003_1926.Migration":{dependencies:[12,2,1,""],operations:[12,2,1,""]},"router.migrations.0003_auto_20201003_2000":{Migration:[12,1,1,""]},"router.migrations.0003_auto_20201003_2000.Migration":{dependencies:[12,2,1,""],operations:[12,2,1,""]},"router.migrations.0004_auto_20201004_2235":{Migration:[12,1,1,""]},"router.migrations.0004_auto_20201004_2235.Migration":{dependencies:[12,2,1,""],operations:[12,2,1,""]},"router.models":{SepaRoute:[9,1,1,""]},"router.models.SepaRoute":{DoesNotExist:[9,5,1,""],MultipleObjectsReturned:[9,5,1,""],ReachabilityChoice:[9,1,1,""],bic:[9,2,1,""],external_key:[9,2,1,""],get_psp_country_display:[9,3,1,""],get_reachability_type_display:[9,3,1,""],get_reachable_via_display:[9,3,1,""],get_scheme_display:[9,3,1,""],id:[9,2,1,""],intermediary_bic:[9,2,1,""],objects:[9,2,1,""],preferred_route:[9,2,1,""],psp_city:[9,2,1,""],psp_country:[9,2,1,""],psp_name:[9,2,1,""],reachability_type:[9,2,1,""],reachable_via:[9,2,1,""],scheme:[9,2,1,""],uuid:[9,2,1,""],valid_from:[9,2,1,""],valid_to:[9,2,1,""]},"router.models.SepaRoute.ReachabilityChoice":{DIRECT:[9,2,1,""],INDIRECT:[9,2,1,""],UNKNOWN:[9,2,1,""]},"settler.admin":{AccountAdmin:[13,1,1,""],TransactionAdmin:[13,1,1,""],TransferInline:[13,1,1,""]},"settler.admin.AccountAdmin":{balance:[13,3,1,""],list_display:[13,2,1,""],list_filter:[13,2,1,""],media:[13,3,1,""]},"settler.admin.TransactionAdmin":{inlines:[13,2,1,""],list_display:[13,2,1,""],media:[13,3,1,""]},"settler.admin.TransferInline":{media:[13,3,1,""],model:[13,2,1,""]},"settler.apps":{SettlerConfig:[13,1,1,""]},"settler.apps.SettlerConfig":{name:[13,2,1,""]},"settler.management":{commands:[15,0,0,"-"]},"settler.management.commands":{add_transaction:[15,0,0,"-"],dump_accounts:[15,0,0,"-"]},"settler.management.commands.add_transaction":{Command:[15,1,1,""]},"settler.management.commands.add_transaction.Command":{add_arguments:[15,3,1,""],handle:[15,3,1,""],help:[15,2,1,""],success:[15,3,1,""]},"settler.management.commands.dump_accounts":{Command:[15,1,1,""]},"settler.management.commands.dump_accounts.Command":{add_arguments:[15,3,1,""],handle:[15,3,1,""],help:[15,2,1,""],success:[15,3,1,""]},"settler.migrations":{"0001_initial":[16,0,0,"-"],"0002_auto_20200921_1432":[16,0,0,"-"],"0003_auto_20200921_1937":[16,0,0,"-"],"0004_auto_20200921_1937":[16,0,0,"-"],"0005_auto_20200921_1945":[16,0,0,"-"]},"settler.migrations.0001_initial":{Migration:[16,1,1,""]},"settler.migrations.0001_initial.Migration":{dependencies:[16,2,1,""],initial:[16,2,1,""],operations:[16,2,1,""]},"settler.migrations.0002_auto_20200921_1432":{Migration:[16,1,1,""]},"settler.migrations.0002_auto_20200921_1432.Migration":{dependencies:[16,2,1,""],operations:[16,2,1,""]},"settler.migrations.0003_auto_20200921_1937":{Migration:[16,1,1,""]},"settler.migrations.0003_auto_20200921_1937.Migration":{dependencies:[16,2,1,""],operations:[16,2,1,""]},"settler.migrations.0004_auto_20200921_1937":{Migration:[16,1,1,""]},"settler.migrations.0004_auto_20200921_1937.Migration":{dependencies:[16,2,1,""],operations:[16,2,1,""]},"settler.migrations.0005_auto_20200921_1945":{Migration:[16,1,1,""]},"settler.migrations.0005_auto_20200921_1945.Migration":{dependencies:[16,2,1,""],operations:[16,2,1,""]},"settler.models":{Account:[13,1,1,""],Transaction:[13,1,1,""],TransactionManager:[13,1,1,""],Transfer:[13,1,1,""]},"settler.models.Account":{DoesNotExist:[13,5,1,""],MultipleObjectsReturned:[13,5,1,""],currency:[13,2,1,""],description:[13,2,1,""],get_balance:[13,3,1,""],handle:[13,2,1,""],id:[13,2,1,""],objects:[13,2,1,""],transfer_set:[13,2,1,""]},"settler.models.Transaction":{DoesNotExist:[13,5,1,""],MultipleObjectsReturned:[13,5,1,""],currency:[13,2,1,""],description:[13,2,1,""],id:[13,2,1,""],objects:[13,2,1,""],transfer_set:[13,2,1,""]},"settler.models.TransactionManager":{add_transaction:[13,3,1,""]},"settler.models.Transfer":{DoesNotExist:[13,5,1,""],MultipleObjectsReturned:[13,5,1,""],account:[13,2,1,""],account_id:[13,2,1,""],amount:[13,2,1,""],description:[13,2,1,""],id:[13,2,1,""],objects:[13,2,1,""],transaction:[13,2,1,""],transaction_id:[13,2,1,""]},"settler.services":{AuthorisationService:[13,1,1,""]},"settler.services.AuthorisationService":{authorise:[13,3,1,""]},clearer:{apps:[1,0,0,"-"],handlers:[1,0,0,"-"],management:[2,0,0,"-"],services:[1,0,0,"-"],signals:[1,0,0,"-"]},impsepa:{apps:[4,0,0,"-"],constants:[4,0,0,"-"],handlers:[4,0,0,"-"],management:[5,0,0,"-"],processors:[4,0,0,"-"]},manage:{main:[7,4,1,""]},router:{admin:[9,0,0,"-"],apps:[9,0,0,"-"],forms:[9,0,0,"-"],management:[10,0,0,"-"],migrations:[12,0,0,"-"],models:[9,0,0,"-"]},settler:{admin:[13,0,0,"-"],apps:[13,0,0,"-"],management:[14,0,0,"-"],migrations:[16,0,0,"-"],models:[13,0,0,"-"],services:[13,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:exception"},terms:{"0001_initi":[8,9,13],"0002_auto_20200921_1432":[8,13],"0002_auto_20201003_1926":[8,9],"0003_auto_20200921_1937":[8,13],"0003_auto_20201003_2000":[8,9],"0004_auto_20200921_1937":[8,13],"0004_auto_20201004_2235":[8,9],"0005_auto_20200921_1945":[8,13],"001":11,"006":11,"2000":24,"2010":24,"abstract":4,"case":24,"class":[1,3,4,6,9,11,12,13,15,16],"default":19,"enum":[4,9],"function":13,"import":[9,11],"new":[9,24],"public":24,"return":[4,9,13],"static":9,"true":[12,16],AND:16,For:[11,19],THE:[],The:[3,6,13,15,19,24],Use:19,Used:13,Useful:11,With:24,_build:19,abc:4,acceler:24,access:[9,24],accessor:13,accoount_currency_regex_alpha3:16,accord:4,account:[13,15,16,23,24],account_id:13,accountadmin:13,accuraci:24,achiev:19,actual:[3,6,11,15],add:[3,6,11,13,15,19],add_argu:[3,6,11,15],add_transact:[13,14],addconstraint:16,address:13,admin:8,admin_sit:[9,13],administr:7,adopt:19,akin:13,alia:[6,9,13],all:[9,13,15],also:[19,24],alterfield:[12,16],altermodelopt:12,alwai:19,amount:[6,13,16],api:[],apidoc:[0,19],app:[8,17],app_label:[12,16],app_modul:[1,4,9,13],app_nam:[1,4,9,13],appconfig:[1,4,9,13],applic:[13,24],area:24,arg:[3,6,9,11,13,15],arguabl:24,argument:[3,6,11,15],assum:11,atom:11,audienc:24,author:13,authoris:[1,3,13,24],authorisationservic:13,auto_id:9,autodoc:19,autofield:[12,16],automat:19,avail:[9,11,19,24],avoid:11,background:23,balanc:[13,15],bank:[23,24],barri:24,base:[1,3,4,6,9,11,12,13,15,16],base_field:9,basecommand:[3,6,11,15],been:[19,24],below:[13,19],besid:19,best:[23,24],between:[23,24],bic:[1,3,9,12],bicfield:12,bicformfield:9,bind:11,bit:[1,11,17],bool:4,booleanfield:[9,12],both:[0,19,24],browsabl:19,bsra:4,build:0,built:[13,19],bundesbank:11,call:13,can:[0,4,9,13,19,24],can_process:4,cecb:4,central:13,charfield:[9,12,16],check:[16,19],checkconstraint:16,child:13,children:13,chri:9,clear:[3,13,19,23,24],clearer:[4,8,11,13,23],clearerconfig:1,code:[0,1,4,23,24],com:[],command:[1,2,4,5,7,9,10,13,14],commun:24,companion:24,compar:24,compat:4,complex:24,compon:24,comput:[23,24],concentr:24,concept:[23,24],config:[1,4,9,13],conform:19,consist:24,constant:8,constraint:16,construct:24,content:[],contrib:[9,13],convent:23,copi:13,core:[3,6,9,11,13,15],countri:9,countryfield:[9,12],cover:24,coverag:19,creat:[4,11,13],create_forward_many_to_many_manag:13,create_pay:4,createmodel:[12,16],credit:[13,24],creditor_b:6,creditor_iban:6,criteria:24,crop:24,csia:4,csm:[4,23,24],ctrl:4,currenc:[6,13,16],currency__regex:16,currency_regex_alpha3:16,current:19,custom:[3,6,11,13,15,19,24],daemon:3,data:[9,11,13],databas:11,datafil:11,datefield:12,datetimefield:[9,12],dbsc:4,debit:13,debtor_b:6,debtor_iban:6,debulk:4,debulk_messag:4,decimalfield:16,decis:[1,3],declared_field:9,defer:[9,13],defin:13,degre:24,deleg:13,deliv:24,deliveri:24,delta:11,demand:24,depend:[12,16],describ:19,descript:[13,16,27],descriptor:9,design:[13,23,24],destin:[1,3,9],deutsch:11,dev:19,develop:[23,24],devic:24,dia:4,differ:4,difficult:24,direct:9,directori:[0,11],django:[1,3,4,6,7,9,11,12,13,15,16,19],django_countri:[9,12],djxml:6,doc:19,docstr:[0,19],document:[23,24,25],doe:19,doesn:13,doesnotexist:[6,9,13],done:19,dragon:27,due:24,dump:15,dump_account:[13,14],duplic:11,dynam:13,each:[4,11,13],eba:4,ecb:11,effort:24,egress:1,emploi:24,empty_permit:9,engin:23,enter:24,entri:[3,6,11,13,15],enumer:9,eqn:4,error:3,error_class:9,errorlist:9,escap:25,especi:24,europ:24,exampl:[13,23,24],excel:11,except:[1,4,6,9,13],exchang:24,execut:[9,13],exist:13,experi:[23,24],explor:24,exposur:24,ext:19,extens:19,external_kei:[9,12],facil:[1,3,19],fals:[3,6,9,11,15],fex:4,fex_message_receiv:4,field:[9,12,13,16,24],file:[4,9,11,19],filenam:19,filevalidityd:11,fin:13,financi:[23,24],fincopi:13,find:[1,3],fintech:24,first:[9,13],fitoficustomercredittransferv02:6,fixm:[18,19,20,21,22,25,26,27,28],flag:9,flake8:19,follow:[0,4,19],force_color:[3,6,11,15],foreignkei:[13,16],form:[8,13],format:[4,11,19],format_pay:[1,3],forward:[1,3,13],forwardmanytoonedescriptor:13,forwardonetoonedescriptor:13,from:[3,4,9,11,13,19,24],furthermor:24,gener:[9,12,19,24],get:9,get_bal:13,get_psp_country_displai:9,get_reachability_type_displai:9,get_reachable_via_displai:9,get_scheme_displai:9,gif:9,github:19,githubpag:19,good:19,googl:19,group:13,grphdr:11,guid:23,handl:[3,4,6,11,13,15,16],handler:8,has:[19,24],have:[19,24],hax:6,hello:[],help:[3,6,11,15],helper:[1,3],helsinki:24,here:[1,13,17,20,21,22,26,27,28],high:24,highli:24,how:[19,24,27],howev:[19,24],html:[0,19],http:[],hygien:19,ibpa:4,id_:9,idea:24,identifi:4,illustr:[11,24],imp:[4,6,23],implement:[1,3,4,6,13,15,19,23],import_scldirectori:[9,10],import_separout:[9,10],import_tipsreach:[9,10],improv:23,impsepa:8,impsepa_hax:[4,5],impsepaconfig:4,incom:[6,13],increas:24,independ:13,index:23,indirect:9,individu:[4,24],influenc:13,inform:[11,24],infrastructur:24,ingress:1,initi:[9,12,16],inlin:13,input:1,instal:19,instanc:[9,13],instant:11,institut:[13,23,24],interact:24,interfac:[1,3,4],intermediary_b:[9,12],intro:[1,17],introduct:23,intuit:24,issu:23,its:[1,3],journal:13,just:25,keep:19,kei:13,kept:24,kirp:4,kwarg:[1,4,9,13],label_suffix:9,layer:24,lazytypedchoicefield:9,least:24,legaci:24,length:24,level:[19,24],leverag:24,like:[9,23,24],likewis:19,limit:[19,24],line:7,list:[4,13,19],list_displai:[9,13],list_filt:[9,13],littl:24,load:[9,13],localflavor:[9,12],logic:[3,6,15],lower:24,main:7,maintain:[0,19],make:[0,1,3,19,24],mambu:25,manag:[1,4,8,9,13,19],mangl:11,mani:13,market:24,master:24,match:4,mechan:[23,24],media:[9,13],mental:24,messag:[3,4,6,13,15,24],meta:9,method:[1,3,4,6,15],microfin:25,migrat:[8,9,13],minix:[23,24],mobil:24,model:[4,8,12,16,24],model_nam:[12,16],modeladmin:[9,13],modelform:9,modifi:24,modul:[2,5,8,10,14,23],monei:24,more:[1,3,13,24],most:13,mt096:13,mt097:13,mt103:13,multi:[23,24],multipl:[11,13],multipleobjectsreturn:[6,9,13],must:[3,6,13,15],name:[1,4,9,12,13,16,23,25],nativ:19,natur:24,need:4,neg:13,network:24,no_color:[3,6,11,15],none:[3,6,9,11,15],note:[11,19],noth:[20,21,22,26,28],notic:3,notif:13,now:[11,25],number:[19,24],object:[1,3,9,13,23],objectdoesnotexist:[6,9,13],offici:11,often:24,one:[13,24,25],onli:24,opaqu:24,open:[24,25],oper:[12,16,23,24],option:[3,6,9,11,12,13,15],other:[23,24],out:1,overal:24,overrid:[1,4],overview:23,packag:[8,19],packet:[1,3,4,13],packet_receiv:1,pacs008:6,page:19,paradigm:24,paramount:19,parent:13,parent_model:13,parser:[3,6,11,15],part:24,parti:[11,24],particip:[11,24],particular:24,payment:[1,3,4,11,13],pbsd:4,peopl:9,perform:24,person:9,pervas:24,pip:19,pipelin:[],place:19,plan:19,player:24,point:[3,6,11,15,19],port:1,posit:13,practic:24,preferred_rout:[9,12],prefix:9,process:[4,6,11,23],processor:8,processorerror:4,produc:19,product:[11,23,24],project:24,properti:[4,9,13],proprietari:24,provid:[1,3,4,13,23,24],psp:[23,24],psp_citi:[9,12],psp_countri:[9,12],psp_name:[9,12],psu:24,publish:19,pull:19,purpos:11,pyguid:[],pylint:19,pylintrc:19,pytest:19,python:[0,19],pyxb:11,qualiti:[23,24],queri:[9,13],queue:3,rather:24,ratio:19,reach:11,reachability_typ:[9,12],reachabilitychoic:9,reachabl:11,reachable_via:[9,12],read:[9,11,13],readabl:[1,3],readi:[1,4],receiv:[3,4,24],receive_pay:[1,2],record:11,refer:[],refus:13,relat:[13,16,23,24],related_nam:13,reliabl:24,removeconstraint:16,render:9,report:19,repositori:19,repres:[9,13,24],requir:[9,19],respons:[13,24],revers:13,reversemanytoonedescriptor:13,rewrit:19,rise:24,robust:24,roc:11,root:[6,19],rout:[1,3,9,11,12],router:[1,3,8],routerconfig:9,routing_daemon:[1,2],routingerror:1,routingservic:[1,3],rule:24,run:[0,1,3,4,11,19,23,24],s6e15:23,s6e15_:[],same:24,schema:4,scheme:[4,9,12,23,24],scienc:[23,24],scl:11,scti:4,sctsepaprocessor:4,search:[],section:19,see:[20,21,22,23,26,28],send:[1,3,24],send_pay:[1,2],sender:[1,4],sent:[1,4],sepa:[4,6,9,11,12,23],sepa_ingress:[4,5],sepacsm:4,sepaprocessor:4,separout:[4,9,11,12],separouteadmin:9,separouteform:9,servic:[8,23,24],set:[23,24],settlement:[1,3,11,13,23,24],settler:[8,23],settlerconfig:13,setup:19,should:[4,11,19],show:[1,3],sic:23,side:13,signal:8,singl:[1,3,4,13,15],softwar:[23,24],solut:24,some:24,someth:[1,3],somewhat:19,sourc:[1,3,4,6,7,9,11,12,13,15,16,19,24,25],sphinx:19,split:4,star:23,start:[1,4,19,24],stderr:[3,6,11,15],stdout:[3,6,11,15],stet:4,still:24,stpa:4,strict:24,style:23,styleguid:[],sub:4,subclass:[1,3,4,6,11,13,15],submodul:[2,5,8,10,14],subpackag:8,success:[3,6,15],sum:13,suppli:24,support:[4,11],swiftnet:13,swiftref:[4,11],synchron:13,system:[11,23,24,25],tabl:11,tabularinlin:13,take:[1,3,13],tapestri:[19,24,27],target:[11,24],task:7,teach:[23,24],technic:24,technolog:24,telecommun:24,term:24,test:19,textchoic:[4,9],tha:25,thesi:24,thi:[0,1,3,4,6,9,11,13,15,19,24],thing:9,third:24,through:24,thu:24,time:[9,13,24],timeli:24,tip:[4,11],tng:23,todo:19,togeth:13,tool:19,top:19,tradit:[23,24],tradition:24,transact:[11,13,15,16,24],transaction_currency_regex_alpha3:16,transaction_id:13,transactionadmin:13,transactionmanag:13,transfer:[13,16,24],transfer_set:13,transferinlin:13,trek:23,txt:19,type:24,typedchoicefield:9,understand:24,understood:[23,24],uniqu:13,unit:19,univers:24,unix:[23,24],unknown:9,unless:24,use:24,use_required_attribut:9,used:[11,19],user:24,usual:24,util:[7,9,24],uuid:[9,12],uuidfield:12,valid:[4,11],valid_from:[9,12],valid_to:[9,12],validate_messag:4,valu:[4,9,13,24],verbose_nam:[1,4,12],via:[1,3,13],view:[],volum:24,want:24,well:[19,24],what:[4,23],when:[1,4,9,13],where:[1,3,13],which:[13,25],who:24,widget:9,within:[0,24],woot:18,work:[23,24],would:[11,19],wrapper:[9,13],written:[18,19],xml:11,xmlmodel:6,xsd:4,xv6:[23,24],yapf:19,yet:[19,20,21,22,26,28],you:[0,9],zealand:9,zero:13},titles:["Documentation for Tapestry","clearer package","clearer.management package","clearer.management.commands package","impsepa package","impsepa.management package","impsepa.management.commands package","manage module","tapestry","router package","router.management package","router.management.commands package","router.migrations package","settler package","settler.management package","settler.management.commands package","settler.migrations package","Clearer","System design","Development","System implementation","SEPA IMP","SIC IMP","TAPESTRY - A PAYMENTS ROUTER","Introduction","Related work","Router","Running the code","Settler"],titleterms:{"0001_initi":[12,16],"0002_auto_20200921_1432":16,"0002_auto_20201003_1926":12,"0003_auto_20200921_1937":16,"0003_auto_20201003_2000":12,"0004_auto_20200921_1937":16,"0004_auto_20201004_2235":12,"0005_auto_20200921_1945":16,THE:[],add_transact:15,admin:[9,13],app:[1,4,9,13],background:24,clearer:[1,2,3,17],code:[19,27],command:[3,6,11,15],constant:4,convent:19,design:18,develop:19,document:[0,19],dump_account:15,engin:24,form:9,guid:19,handler:[1,4],imp:[21,22],implement:20,import_scldirectori:11,import_separout:11,import_tipsreach:11,improv:19,impsepa:[4,5,6],impsepa_hax:6,indic:23,introduct:24,issu:19,manag:[2,3,5,6,7,10,11,14,15],migrat:[12,16],model:[9,13],modul:[1,3,4,6,7,9,11,12,13,15,16],object:24,packag:[1,2,3,4,5,6,9,10,11,12,13,14,15,16],payment:[23,24],process:19,processor:4,receive_pay:3,relat:25,router:[9,10,11,12,23,26],routing_daemon:3,run:27,send_pay:3,sepa:21,sepa_ingress:6,servic:[1,13],settler:[13,14,15,16,28],sic:22,signal:1,style:19,submodul:[1,3,4,6,9,11,12,13,15,16],subpackag:[1,2,4,5,9,10,13,14],system:[18,20],tabl:[],tapestri:[0,1,8,23],test:[],todo:11,view:[],welcom:[],work:25}})