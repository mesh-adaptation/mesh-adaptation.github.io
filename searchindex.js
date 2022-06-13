Search.setIndex({docnames:["demos/burgers.py","demos/burgers1.py","demos/burgers2.py","demos/burgers_ee.py","demos/burgers_oo.py","demos/burgers_time_integrated.py","demos/mesh_seq.py","demos/point_discharge.py","demos/solid_body_rotation.py","demos/solid_body_rotation_split.py","demos/time_partition.py","index","maths/1-motivation","maths/2-goal-oriented-error-estimation","maths/3-metric-based","maths/4-goal-oriented-mesh-adaptation","maths/index","pyroteus"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,"sphinxcontrib.bibtex":9,sphinx:56},filenames:["demos/burgers.py.rst","demos/burgers1.py.rst","demos/burgers2.py.rst","demos/burgers_ee.py.rst","demos/burgers_oo.py.rst","demos/burgers_time_integrated.py.rst","demos/mesh_seq.py.rst","demos/point_discharge.py.rst","demos/solid_body_rotation.py.rst","demos/solid_body_rotation_split.py.rst","demos/time_partition.py.rst","index.rst","maths/1-motivation.rst","maths/2-goal-oriented-error-estimation.rst","maths/3-metric-based.rst","maths/4-goal-oriented-mesh-adaptation.rst","maths/index.rst","pyroteus.rst"],objects:{"":[[17,0,0,"-","pyroteus"]],"pyroteus.adjoint":[[17,1,1,"","AdjointMeshSeq"],[17,4,1,"","annotate_qoi"]],"pyroteus.adjoint.AdjointMeshSeq":[[17,2,1,"","get_checkpoints"],[17,2,1,"","get_qoi"],[17,3,1,"","initial_condition"],[17,2,1,"","solve_adjoint"]],"pyroteus.error_estimation":[[17,4,1,"","get_dwr_indicator"]],"pyroteus.form":[[17,4,1,"","transfer_form"]],"pyroteus.go_mesh_seq":[[17,1,1,"","GoalOrientedMeshSeq"]],"pyroteus.go_mesh_seq.GoalOrientedMeshSeq":[[17,2,1,"","fixed_point_iteration"],[17,2,1,"","get_enriched_mesh_seq"],[17,2,1,"","global_enrichment"],[17,2,1,"","indicate_errors"]],"pyroteus.interpolation":[[17,4,1,"","clement_interpolant"],[17,4,1,"","project"]],"pyroteus.log":[[17,4,1,"","critical"],[17,4,1,"","debug"],[17,4,1,"","error"],[17,4,1,"","info"],[17,4,1,"","pyrint"],[17,4,1,"","set_log_level"],[17,4,1,"","warning"]],"pyroteus.math":[[17,4,1,"","bessi0"],[17,4,1,"","bessk0"],[17,4,1,"","construct_orthonormal_basis"],[17,4,1,"","gram_schmidt"]],"pyroteus.mesh_seq":[[17,1,1,"","MeshSeq"]],"pyroteus.mesh_seq.MeshSeq":[[17,3,1,"","bcs"],[17,2,1,"","debug"],[17,3,1,"","form"],[17,3,1,"","function_spaces"],[17,2,1,"","get_bcs"],[17,2,1,"","get_checkpoints"],[17,2,1,"","get_form"],[17,2,1,"","get_function_spaces"],[17,2,1,"","get_initial_condition"],[17,2,1,"","get_lagged_dependency_index"],[17,2,1,"","get_solve_blocks"],[17,2,1,"","get_solver"],[17,3,1,"","initial_condition"],[17,2,1,"","plot"],[17,2,1,"","solve_forward"],[17,3,1,"","solver"],[17,2,1,"","warning"]],"pyroteus.metric":[[17,4,1,"","anisotropic_metric"],[17,4,1,"","assemble_eigendecomposition"],[17,4,1,"","check_spd"],[17,4,1,"","combine_metrics"],[17,4,1,"","compute_eigendecomposition"],[17,4,1,"","density_and_quotients"],[17,4,1,"","determine_metric_complexity"],[17,4,1,"","enforce_element_constraints"],[17,4,1,"","hessian_metric"],[17,4,1,"","isotropic_metric"],[17,4,1,"","metric_average"],[17,4,1,"","metric_complexity"],[17,4,1,"","metric_exponential"],[17,4,1,"","metric_intersection"],[17,4,1,"","metric_logarithm"],[17,4,1,"","metric_relaxation"],[17,4,1,"","ramp_complexity"],[17,4,1,"","space_normalise"],[17,4,1,"","space_time_normalise"]],"pyroteus.plot":[[17,4,1,"","plot_indicator_snapshots"],[17,4,1,"","plot_snapshots"]],"pyroteus.quality":[[17,4,1,"","get_areas2d"],[17,4,1,"","get_aspect_ratios2d"],[17,4,1,"","get_aspect_ratios3d"],[17,4,1,"","get_eskews2d"],[17,4,1,"","get_eskews3d"],[17,4,1,"","get_facet_areas"],[17,4,1,"","get_facet_areas2d"],[17,4,1,"","get_facet_areas3d"],[17,4,1,"","get_min_angles2d"],[17,4,1,"","get_min_angles3d"],[17,4,1,"","get_pyop2_kernel"],[17,4,1,"","get_quality_metrics2d"],[17,4,1,"","get_quality_metrics3d"],[17,4,1,"","get_scaled_jacobians2d"],[17,4,1,"","get_scaled_jacobians3d"],[17,4,1,"","get_skewnesses2d"],[17,4,1,"","get_skewnesses3d"],[17,4,1,"","get_volumes3d"]],"pyroteus.recovery":[[17,4,1,"","recover_boundary_hessian"],[17,4,1,"","recover_hessian"]],"pyroteus.thetis_compat":[[17,1,1,"","FlowSolver2d"],[17,4,1,"","timed_stage"]],"pyroteus.thetis_compat.FlowSolver2d":[[17,2,1,"","correct_counters"],[17,2,1,"","iterate"],[17,2,1,"","update_tags"]],"pyroteus.time_partition":[[17,1,1,"","TimeInstant"],[17,1,1,"","TimeInterval"],[17,1,1,"","TimePartition"]],"pyroteus.time_partition.TimeInterval":[[17,3,1,"","timestep"]],"pyroteus.time_partition.TimePartition":[[17,2,1,"","debug"]],"pyroteus.utility":[[17,1,1,"","AttrDict"],[17,1,1,"","File"],[17,4,1,"","Mesh"],[17,4,1,"","assemble_mass_matrix"],[17,4,1,"","classify_element"],[17,4,1,"","create_directory"],[17,4,1,"","create_section"],[17,4,1,"","effectivity_index"],[17,4,1,"","errornorm"],[17,4,1,"","norm"],[17,4,1,"","rotate"],[17,4,1,"","rotation_matrix_2d"]],pyroteus:[[17,0,0,"-","adjoint"],[17,0,0,"-","error_estimation"],[17,0,0,"-","form"],[17,0,0,"-","go_mesh_seq"],[17,0,0,"-","interpolation"],[17,0,0,"-","log"],[17,0,0,"-","math"],[17,0,0,"-","mesh_seq"],[17,0,0,"-","metric"],[17,0,0,"-","plot"],[17,0,0,"-","quality"],[17,0,0,"-","recovery"],[17,0,0,"-","thetis_compat"],[17,0,0,"-","time_partition"],[17,0,0,"-","utility"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","property","Python property"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:property","4":"py:function"},terms:{"0":[0,1,2,3,4,5,6,7,8,9,10,12,14,17],"00":14,"0001":[0,4],"00294":14,"025":8,"05":[0,4,5],"05606388":7,"06":17,"0625":[6,10],"0733033":8,"090754078":14,"0e":[0,4,5],"0e3":[],"1":[0,1,2,3,4,5,6,7,8,10,12,14,17],"10":[7,8,12,14],"100":7,"1016":[12,14],"103187":12,"11":[],"1137":[8,14],"12":14,"1213":17,"1242":17,"125":[6,10],"134":12,"145":12,"15":8,"16":6,"16666666666666666":[],"190":14,"1992":17,"1996":8,"2":[0,1,2,3,4,5,6,7,8,9,10,12,14,17],"20":[7,8,9,12],"200":7,"2001":14,"2006":17,"2010":17,"2011":14,"2013":17,"2014":12,"2021":[12,14],"2022":12,"229":17,"25":8,"25560":14,"2866":17,"2897":17,"29":14,"2d":[12,14,17],"2p":14,"3":[7,17],"30":14,"300":[8,9],"32":[0,1,2,3,4,5,6],"33":8,"35":[8,17],"3771":14,"3796":14,"38":14,"3d":[14,17],"4":[6,10],"40":[7,8],"49":14,"5":[0,1,2,3,4,5,7,8,12],"50":[3,7],"52":17,"6":7,"60":14,"627":8,"665":8,"6666666666666666":[],"6d":7,"7":[7,12],"75":[6,10],"7825":14,"8":[1,2,4,17],"9":[0,1,2,4,17],"92820":14,"\u00e9":17,"abstract":[],"case":[1,2,3,5,7,8,9,10,12,14,17],"class":[1,4,11,17],"default":[7,10,14,17],"do":[2,3,4,7,14,17],"export":[0,1,3,10,17],"final":[0,1,6,7,8,9,17],"function":[0,1,2,3,4,5,6,7,8,9,11,12,14,17],"import":[0,1,2,3,4,5,6,7,8,9,10,12,14],"new":[8,10,14,17],"return":[0,1,4,5,7,8,9,17],"super":[],"transient":14,"true":[2,3,4,8,14,17],"try":[2,3,10],"while":[0,4,5,8],A:[3,4,8,12,14,17],And:8,As:[3,5,7,8,12,14,17],By:[7,17],For:[0,1,3,5,6,7,8,12,14,17],If:[2,4,7,8,10,14],In:[0,1,2,3,4,5,6,7,8,9,10,12,14,17],It:[0,3,5,7,10,11,12,14],Its:0,On:7,One:10,That:[0,2,3,12,14],The:[0,1,2,3,4,5,6,7,8,9,10,11,12,16,17],Then:[9,14],There:[2,8],These:[0,12,14],To:[0,8,10,17],With:[5,6,7,10],_:[8,14],__:[],__init__:[],_adjoint:[8,9],_forward:[8,9],_old:[0,8],a861:17,a885:17,a_max:17,abl:[0,1,3,9,12,14],about:[2,17],abov:[0,1,10,12,14],access:[0,1,2,3,4,5,6,10,17],accord:7,account:[4,5,10,14,17],accru:12,accumul:5,accur:12,achiev:[0,1,14,17],across:[12,17],act:1,action:17,activ:[2,8],actual:[2,6,7],ad:3,ad_block_tag:[0,4,5,7,8],adapt:[2,7,10,12,16,17],addit:[1,3,7,8,12,17],addition:17,adj_kwarg:17,adj_outfil:[8,9],adj_solver_kwarg:17,adjoint:[0,3,4,7,8,9,10,11,12,14],adjoint_error:17,adjoint_next:[1,17],adjointmeshseq:[1,2,3,4,5,8,9,17],adjust:17,admit:17,adopt:4,adrien:17,advanc:11,advect:[0,7,8,12],after:17,again:[0,2,3,6,8,9],agre:17,aid:12,ajh:14,al:17,alain:17,alauzet:[14,17],algebra:[14,17],algorithm:[8,14],all:[3,4,6,7,8,9,12,14,17],allow:[12,17],alon:17,along:[3,14],alphabet:11,alreadi:3,also:[0,1,2,3,4,5,6,7,9,10,11,12,14,17],altern:[14,17],alwai:[1,7],amongst:14,an:[0,1,2,3,5,7,8,11,12,14,17],analog:16,analogu:17,analysi:[8,12,14],analyt:[7,17],ancient:11,angl:[14,17],ani:[10,17],anisotrop:[12,14,17],anisotropi:[14,17],anisotropic_metr:[14,17],annot:[4,17],annotate_qoi:[4,17],anoth:[1,6,12,14],anthoni:17,ap:[14,17],api:[9,11,14],appear:2,append:[0,17],appli:[0,2,3,4,8,14,17],applic:[12,14,17],approach:[5,8,9,11,12],appropri:[12,17],approx:3,approxim:[3,7,12,17],ar:[0,1,2,3,4,6,7,8,9,10,11,12,14,17],arbitrari:17,area:17,arg:[9,17],argument:[2,3,8,9,10,17],arr:[],arrai:7,arriv:14,arrow:1,artifici:[],as_matrix:14,as_vector:[0,4,7,8,17],aspect:[6,14,17],aspect_ratio:17,assembl:[14,17],assemble_eigendecomposit:[14,17],assemble_mass_matrix:17,assign:[0,4,5,7,8],associ:[0,1,3,6,10,12,14,17],associt:14,assum:[10,11,14,17],assumpt:14,attr:17,attrdict:17,attribut:[0,5,17],augment:17,author:[12,14],automat:[0,1,3,4,7],auxiliari:3,avail:17,averag:[5,14,17],avoid:[5,8],ax:[0,1,2,3,4,5,6,7,8,17],axi:14,b:17,background:11,backslash:7,backward:[1,5,17],backwardeul:[],ball:8,band:12,barral:12,base:[3,10,11,12,15,16,17],basi:17,basic:2,bathymetri:17,bathymetry_2d:17,bc:[7,8,17],becas:3,becaus:[4,7,8,14],becom:[8,9,12,14],been:[4,7],befor:[3,4,9,11,12,17],begin:[0,1,2,5,7,10,14],behind:14,being:[12,14],bell:[8,9],bell_adjoint:9,bell_initial_condit:[8,9],bell_r0:8,bell_x0:8,bell_y0:8,below:12,bermejo:17,bessel:17,bessi0:17,bessk0:17,better:8,between:[0,2,3,5,9,11,12,14],bit:17,blob:[],block:17,bmatrix:14,bodi:11,boldsymbol0:0,boldsymbol:[14,17],bool:17,both:[2,3,4,6,8,10,17],bottom:1,boundari:[1,3,5,7,8,12,17],boundary_tag:17,briefli:[],build:[0,10,11,12],built:6,burger:[8,11],burgers1:[1,2,3],burgers2:2,burgers_oo:[],burgersmeshseq:4,butcher:[],butchertableau:[],c:[7,8,12,14,17],c_:[7,8],c_adjoint:9,c_init:8,c_old:7,c_t:14,cad:12,calcul:14,calibr:7,call:[0,1,4,8,9,14,17],cambridg:17,can:[0,1,2,3,4,5,6,7,8,9,10,12,14,17],cap_:10,capabl:17,carpio:17,carri:14,cbar:7,cc:14,cdot:[0,1,3,5,7,8,12],cedric:12,cell:[7,17],cell_node_map:[],cellsiz:7,centr:[8,12],cg:[0,4,7,8,14],chang:[2,3,5,9,11,17],channel:12,check:[1,2,14,17],check_spd:[14,17],checkpoint:17,chemic:[9,12],choic:17,choos:[0,1,3,17],chosen:17,christoph:17,circl:14,circular:7,citat:[],cl:17,classic:[],classifi:17,classify_el:17,clear:[8,17],clear_tap:17,clearest:11,clement:17,clement_interpol:17,close:[7,14],cm:[],cmap:7,co:8,coastal:14,code:[10,11,14,17],coeffici:[0,4,7,12,17],coincid:2,colleg:14,color:7,colorbar:[7,8],combin:[4,12,14,17],combine_metr:[14,17],come:[0,7],comm:17,common:[3,12],commonli:12,commun:17,complex:[7,14,17],compon:[7,8,9,10,17],compound:9,compris:[6,8,11,14,17],comput:[1,3,5,10,12,14,17],compute_eigendecomposit:[14,17],concentr:[7,8,9,12],concept:14,concret:[0,1],condit:[0,1,2,7,8,9,12,17],cone:[8,9],cone_adjoint:9,cone_initial_condit:[8,9],cone_r0:8,cone_x0:8,cone_y0:8,connect:14,conserv:[0,2,8],consid:[5,6,7,8,9,10,12,14],consist:14,constant:[0,3,4,5,7,8],constantli:11,construct:[0,1,2,10,12,14,17],construct_orthonormal_basi:17,constructor:[1,2,4,10,17],contain:[0,1,2,10,11,12,14,17],content:[0,4,12],continu:[8,16,17],continuum:14,contrast:7,contribut:[3,7,12,17],control:[10,14,17],conveni:14,convinc:9,coolwarm:7,coord:8,coordin:8,copi:[4,8,17],correct:11,correct_count:17,correspond:[0,1,5,6,9,10,12,14,17],could:[0,3,12,17],count:[14,17],counter:17,coupl:0,cours:3,cpb13:17,crank:8,cranknicolson:[],cre:14,creat:[0,3,7,8,10,11,17],create_directori:17,create_sect:17,critic:17,cuboid:8,cumbersom:[0,9],current:[0,3,5,17],curv:[8,14],curvatur:14,cyfunct:17,cyl_r0:8,cyl_x0:8,cyl_y0:8,cylind:8,d:[7,12,14,17],d_2:14,d_:14,da:12,data:[0,2,10,17],de:[12,14],debug:[2,3,4,6,10,17],decompos:3,decomposit:[14,17],decor:[4,17],deduc:[12,14,17],deem:12,deepcopi:8,def:[0,1,4,5,7,8,9],defin:[0,1,2,4,5,7,8,14,17],definit:[10,14,17],degre:[3,14,17],delta:[10,14],demo:[0,1,2,3,4,5,6,8,9,10,11],demonstr:12,denot:[7,12,14],dens:[],densiti:[14,17],density_and_quoti:[14,17],depend:[5,7,10,14,17],deploi:12,depth:17,deriv:17,dervieux:17,desalin:12,descend:17,describ:[11,12,17],descript:3,design:[12,14],desir:17,det:14,detail:[0,7,12,14,17],determin:17,determine_metric_complex:17,develop:7,dg:8,diag:14,diagnost:12,diagon:[2,3,4,5,17],dict:17,dictionari:[0,1,9,17],differ:[2,3,4,5,6,9,10,11,12,14,17],differenti:[1,7,12],difficult:[7,8],diffus:[8,11,12],dim:17,dimens:[8,14,17],dimension:[6,14],direct:[1,7,12,14],directli:17,directori:17,dirichlet:[8,17],dirichletbc:[7,8],disast:17,disc:8,discharg:[11,12],disclaim:17,discontinu:[8,17],discret:[1,14,17],discretis:[0,7,11,12],discuss:12,disk:17,distanc:14,distribut:12,divid:17,doc:[],document:[11,14],doe:2,dof:17,doi:[8,12,14],dolfin:[1,11],domain:[3,7,8,12,14,17],domin:12,done:[3,12],dot:[0,4,7,8,14],dowload:[7,8,9],downstream:[7,12],downward:17,drive:[8,12,14],driven:7,driver:[0,1,3,16,17],ds:[1,4,5],dt:[0,1,2,3,4,5,6,8,9,10,14],dtc:[],dual:[3,17],dualiti:14,due:2,duplic:9,dure:[0,3,10,14],dwr:17,dx:[0,4,7,8,12,14],dy:[1,5],dynam:10,e:[12,14,17],e_i:14,each:[0,1,2,3,6,8,9,10,12,14,17],earlier:11,earth:14,eas:1,easili:[9,17],eastward:0,edg:14,ee:3,effect:[1,2,5,12],effectivity_index:17,effici:8,eigen:17,eigen_kernel:[],eigendecomposit:[14,17],eigenkernelhandl:[],eigenvalu:[14,17],eigenvector:[14,17],eight:10,either:17,electricit:12,element:[0,3,6,7,11,12,14,17],ell:17,ell_2:14,ell_:14,ellips:14,ellipsoid:14,ellipt:[14,17],els:4,em:[],encod:17,end:[0,1,5,7,8,10,14,17],end_tim:[0,1,2,3,4,5,6,7,8,9,10,17],end_time_qoi:[1,4],endow:17,enforc:[7,17],enforce_element_constraint:17,engin:[11,14],enrich:[3,17],enrichment_kwarg:[3,7,17],enrichment_method:[3,7,17],ensur:[7,17],entiti:[14,17],entri:[8,17],enumer:[8,9],epsilon:3,equal:[8,14,17],equat:[7,8,9,11,12,17],equiangl:17,equidistribut:14,equilater:14,error:[2,4,7,11,12,14,16,17],error_estim:[],error_ind:17,errornorm:17,eskew:17,establish:14,estim:[2,4,7,11,12,14,16,17],et:17,euclidean:14,euler:[5,17],evalu:[3,12,17],evector:17,even:7,event:[],everi:[8,17],evolv:10,exact:3,exactli:4,exampl:[0,2,9,11,12,14],exc_info:17,excel:11,except:[1,4,17],exercis:[2,3,9],exist:17,exp:7,expect:[8,9,10],exponenti:17,express:14,extens:[14,17],extent:14,extra:17,extract:[3,17],f:[0,4,5,7,8,9,14,17],facet:17,facet_area:17,facilit:[],fact:[0,7,14],factor:17,fairli:12,fals:17,familiar:11,famou:14,fang:17,fangxin:17,far:[3,5,8,9,10],farm:[],featur:12,feel:4,few:17,field:[0,1,2,3,5,6,7,8,9,10,12,14,17],fig:[0,1,2,3,4,5,6,7,8,17],figsiz:7,figur:17,file:[8,9,10,17],filenam:17,find:[4,9],finit:[0,3,7,11,12,14,17],finiteel:17,firedrak:[0,1,2,3,4,5,6,7,8,11,14,17],firedrakeproject:[],first:[0,3,5,8,10,14,17],fit:14,fix:[14,17],fixed_point_iter:17,flanneri:17,flow:[1,8,12],flowsolver2d:17,fluid:[7,12],focus:10,follow:[2,3,4,5,7,14,17],foral:17,form:[0,1,3,4,5,7,8,12,14],format:[8,17],formul:[12,14,17],formula:14,forward:[0,1,2,3,7,8,9,12,14,17],forward_old:[0,1,17],forwardeul:[],found:11,four:10,fr:17,frac18:10,frac1:[14,17],frac2n:[14,17],frac:[0,7,8,14,17],framework:[2,11,16],franc:12,freedom:3,frequent:10,from:[0,1,2,3,4,5,6,7,8,9,10,12,14,17],fs:[0,4,8,9],fulli:17,func:17,function_spac:[0,4,5,7,8,9,17],functionspac:[0,7,8,17],fundament:[3,6,10],further:12,fwd_outfil:[8,9],g:[12,17],galerkin:7,gamma:14,gaussian:[7,8],gear:7,gener:[0,4,12,14,17],generalis:14,genericsolveblock:17,geometr:16,geometri:14,gerard:17,get:[4,6,7,8,10,17],get_adj_valu:17,get_area2d:[],get_areas2d:17,get_aspect_ratio2d:[],get_aspect_ratio3d:[],get_aspect_ratios2d:17,get_aspect_ratios3d:17,get_bc:[7,8,9,17],get_checkpoint:17,get_dwr_ind:17,get_enriched_mesh_seq:17,get_eskew2d:[],get_eskew3d:[],get_eskews2d:17,get_eskews3d:17,get_facet_area:17,get_facet_areas2d:17,get_facet_areas3d:17,get_form:[0,1,2,3,4,5,7,8,9,17],get_function_spac:[0,1,2,3,4,5,7,8,9,17],get_function_spaces_split:9,get_initial_condit:[0,1,2,3,4,5,7,8,9,17],get_initial_condition_split:9,get_lagged_dependency_index:17,get_metric2d:[],get_metric3d:[],get_min_angle2d:[],get_min_angle3d:[],get_min_angles2d:17,get_min_angles3d:17,get_pyop2_kernel:17,get_qoi:[1,2,3,4,5,7,8,9,17],get_qoi_funct:4,get_qoi_split:9,get_quality_metrics2d:17,get_quality_metrics3d:17,get_rk_block:[],get_scaled_jacobian2d:[],get_scaled_jacobian3d:[],get_scaled_jacobians2d:17,get_scaled_jacobians3d:17,get_skewness2d:[],get_skewnesses2d:17,get_skewnesses3d:17,get_solv:[0,1,2,3,4,5,7,8,9,17],get_solve_block:17,get_solver_split:9,get_values_at_el:[],get_volume3d:[],get_volumes3d:17,getter:[],github:11,give:[12,14,17],given:[0,1,3,9,12,14,17],global:[3,17],global_enrich:17,global_factor:17,go:[1,2],go_mesh_seq:[],goal:[3,4,7,12,16,17],goalorientedmeshseq:[3,7,17],god:11,goddard:[14,17],goe:12,gorman:17,govern:12,grad:[0,4,7,8],gradient:[8,12],gram:17,gram_schmidt:17,gravit:14,greater:14,greek:11,gregori:[],guess:7,h1:17,h:[3,7,17],h_boundari:17,h_boundary_sc:17,h_i:[14,17],h_interior:17,h_interior_sc:17,h_j:14,h_max:17,h_min:17,ha:[5,7,8,14],half:8,ham:12,hand:[0,1,3,5,7,8,12,14],handi:0,happen:[2,12],has_adj_sol:17,have:[0,1,2,3,4,5,7,8,9,10,12,14,17],hcurl:17,hdiv:17,helper:17,henc:[0,2],here:[0,3,7,8,9,12,17],hessian:[14,17],hessian_metr:17,high:[8,12],higher:[3,14],highli:11,highlight:[],hold:17,hood:17,horizont:7,host:11,houston:17,how:[0,2,3,6,9,10,12,14,17],howev:[7,14,17],hp:[],http:17,hydrodynam:12,i:[0,1,3,4,5,8,9,12,14,17],i_k:3,ic:[0,4,5,7,8],id:17,idea:[6,8,12,14],idealis:12,iden:[],ident:[0,2,4,8,11,14],illustr:11,im:17,imag:[12,14],immedi:[7,14],imperi:14,implement:8,impli:[7,14],implicit:8,impos:8,impuls:1,inbetween:[2,7],inbuilt:11,includ:[7,9,12,14,17],incompress:8,increas:3,increment:5,independ:12,index:[0,1,4,5,7,8,9,11,17],indic:[3,7,12,14,17],indicate_error:[3,7,17],individu:17,inflow:[7,12],info:17,inform:[0,1,3,8,12,14,17],infti:14,ingredi:[7,10],inher:14,init:[8,9],initi:[0,1,2,7,8,9,17],initial_condit:17,initial_mesh:17,initialis:[0,4,5,7,8],inlet:12,inner:[0,1,4,5,7],input:[0,4,7,14,17],insid:[],instanc:[6,14,17],instantan:5,instead:[2,7,9,14],int_0:[1,5,14],int_:14,int_k:14,int_r:12,integr:[0,1,2,4,7,8,9,11,14,17],interest:[3,5,7,8,10,12,14,17],interior:17,intern:[4,17],interpol:[0,4,8,9,14],interpret:[8,16],intersect:[11,14,17],interv:[11,14,17],intracomm:17,introduc:8,introduct:11,involv:2,ipynb:[],isn:10,isotrop:[12,17],isotropic_metr:[14,17],item:[8,9],iter:17,its:[1,3,7,8,11,12,14,17],j:[0,1,3,4,5,8,12,14,17],jacobian:17,jaim:17,je:17,jean:12,jg:[12,14],jh:17,joseph:[],journal:[8,14,17],jpg:[0,1,2,3,4,5,6,7,8],juan:17,jupyt:[],just:[2,5,7],k:[3,10,14],keep_log:17,kei:[1,3,14,17],kernel:[7,17],keyword:[2,8,9,10,17],kind:17,kinmathc:[],klass:[],know:3,known:14,kutta:[],kwarg:17,l1:17,l2:17,l2_dist:[],l:[8,14,17],la11:14,label:[0,17],lag:[0,1,4,5,7,8,17],lagrang:[14,17],lambda:[14,17],lambda_1:14,lambda_i:[14,17],lambda_n:14,larg:[],larger:[3,10],largest:[7,14],last:5,later:[],lda10:17,learn:10,learnt:3,least:[10,12],left:[2,3,4,5,7,8,12,14],len:[0,2,3,4,5,6],length:[10,14,17],leq:10,less:[12,14],let:[7,8,9,10,12],lev96:8,level:[0,1,2,3,4,7,17],levequ:8,librari:11,like:[4,5,7,12],limit:14,line:[1,2,14],linear:[0,7,8,14],linearvariationalproblem:8,linearvariationalsolv:8,linf:17,linspac:[0,1,2,4],list:[0,1,6,7,8,10,11,17],live:17,local:[3,12],localis:17,locat:7,log:[],logarithm:17,logger:17,logloc:7,lognorm:7,london:14,longer:2,look:[7,9],loop:[1,7],loseil:[14,17],lot:4,low:12,lp:17,lui:17,lv:8,lvp:8,m:[6,14,17],m_1:14,m_2:14,m_:14,made:14,magnitud:[3,14,17],mai:[0,2,4,5,7,10,11,14,17],main:4,maintain:7,major:17,make:[1,3,8,12,14],mani:[8,11,12,14,17],manual:[7,11,12,13,15,17],map:[0,17],mapsto:7,mass:17,master:[],match:[0,1,2,9,17],math:[],mathbb:[2,7,8,10,14,17],mathbf:[0,1,5,7,8,12,14,17],mathcal:[3,10,14],mathemat:[11,14,17],mathrm:[1,5,7,10,12,14],matplotlib:[7,8,17],matric:17,matrix:[2,14,17],maxim:6,maximum:17,mcolor:7,md:[12,17],mean:[2,10,12,14,17],measur:[7,12,17],mechan:14,member:17,mention:14,mesh2d:17,mesh:[1,3,4,5,7,8,9,10,12,16,17],mesh_seq:[0,1,2,3,4,5,6,7,8,9],mesher:14,meshseq:[0,2,3,4,6,7,8,10,17],method:[0,1,3,4,6,7,8,9,11,12,14,17],metric:[11,12,16],metric_averag:[14,17],metric_complex:[14,17],metric_exponenti:17,metric_intersect:[14,17],metric_logarithm:17,metric_relax:[14,17],mh:12,midpoint:5,mimic:1,min:7,min_angl:17,min_valu:[7,8],mind:7,minimis:[12,14],minimum:17,minu:17,miss:[],mix:17,mode:[1,2,6,8,10,17],model:[7,12,14,17],modeloptions2d:17,modifi:[4,5,7,12,14,17],modul:[],modulu:17,more:[0,3,4,5,8,10,12],moreov:12,most:[12,14],mostli:[4,17],motiv:[7,11,16],move:[0,1,14],mpi4pi:17,mpi:17,msg:17,much:[3,9],multi:14,multipl:[8,10,11],multipli:5,must:[14,17],n:[0,1,2,3,4,5,6,7,10,12,14,17],nabla:[0,7,8,12],nabla_grad:[0,4],name:[0,4,5,7,8,9,10,17],namespac:6,natur:[4,12],navon:17,nbviewer:[],need:[0,3,5,7,8,10,14,17],neglig:7,neighbour:17,nest:[0,17],neumann:12,newmesh:17,next:[0,1,2,4,5,6,8,10],nicolson:8,nodal:14,node:[],non:[7,9,10,14],none:17,nonlinear:[0,7,8],nonlinearli:0,norm:[7,17],norm_typ:17,normalis:[14,17],notat:14,note:[0,2,3,4,5,7,8,10,17],notebook:[],notic:[4,10],now:[0,1,2,7,8,12,14,17],np:[0,1,2,4],nu:[0,4],num:[],num_enrich:17,num_enrichments_h:[],num_enrichments_p:[],num_h_enrich:[],num_iter:17,num_p_enrich:[],num_subinterv:[0,2,3,4,5,10,17],number:[6,10,11,12,14,17],numer:[7,8,12,14,17],object:[5,6,8,10,11,17],observ:[3,9],obtain:[1,3,14,17],obviou:14,occur:10,ocean:14,odd:7,offset:[],often:10,oliveira:14,omega:[0,7,8,12,14,17],omega_:7,on_boundari:8,one:[0,1,2,3,5,6,8,10,11,12,14,17],ones:[3,11],onli:[2,3,5,7,8,9,14,17],onto:[0,1,17],oo:4,oper:[0,2,16,17],opposit:1,optim:[],optimis:[12,14,17],option:[8,17],order:[0,1,3,5,11,14,17],org:17,orient:[3,5,7,12,14,16,17],origin:[1,8,17],orthogon:[14,17],orthogonalis:17,orthonorm:[14,17],other:[7,10,14,17],otherwis:[0,17],our:1,out:[10,14],outfal:12,outflow:12,outlet:12,output:[0,6,8,9,17],over:[0,1,3,6,7,8,9,10,14,17],overarrow:[],overestim:17,overload:17,overrid:17,overwrit:17,own:7,p0:17,p1:[7,8,17],p1_ten:14,p2:2,p:[0,3,4,7,8,10,14,17],packag:11,pad:7,page:[11,12],pain:[14,17],paramet:[0,7,17],parametr:14,parametris:14,paraview:[8,9,17],parent:14,pari:12,part:[0,1,3,7,8,10,14],partial:[0,7,8,12,14],particular:[0,8,12,14,17],particularli:10,partit:[1,5,6,11,17],pass:[2,8,9,10,17],patch:3,path:17,pattern:8,pde:[0,3,6,8,9,10,12,17],peak:8,per:[10,17],perform:[3,4,14],period:14,permiss:[12,14],perspect:14,petrov:7,petsc:17,phd:14,phi:8,physic:[12,14,17],pi:[0,4,8,9],piec:8,piecewis:14,piggott:[12,17],pipe:12,plant:12,plot:[0,1,2,3,4,6,7,8,9,12],plot_indicator_snapshot:[3,7,17],plot_kwarg:7,plot_snapshot:[0,1,2,4,5,7,17],plt:8,plu:17,point:[11,12,14,17],pollut:12,polynomi:3,pose:14,posit:[8,14,17],possibl:[7,10,14,17],post:17,posteriori:17,pow:8,power:17,ppp:17,practic:[3,14],pre:17,prefix:17,present:[11,17],press:17,previou:[0,1,2,3,4,5,6,9],previous:[4,5,9],prieto:17,primarili:7,primiarli:[],print:[10,17],prior:0,probabl:14,problem:[0,1,2,3,4,5,7,8,9,10,11,12,14,17],process:[12,14,17],prod:[],prod_:[14,17],produc:17,product:[],product_:[],prognost:[0,11,12,17],programat:7,progress:12,project:[0,2,17],project_output:17,prolong:17,pronunci:11,propag:[1,5,12],properli:17,properti:[14,17],proteu:11,provid:[0,6,7,11,12,14,17],psi:[7,8],pudog01:14,puls:5,pure:14,purpos:[0,3,8,17],pvd:[8,9,17],pw:17,pyop2:17,pyplot:8,pyrint:17,pyroteu:[0,1,2,3,4,5,6,7,8,9,10,12,14],pyroteus_adjoint:[1,2,3,4,5,7,8],python:[0,1,2,3,4,5,6,7,8,9,10,11,17],q_:14,q_m:17,qoi:[1,2,3,4,7,8,9,11,12,17],qoi_kwarg:17,qoi_typ:[1,2,3,4,5,7,8,9],qquad:17,quad:[0,14],quadratur:5,qualiti:14,quantif:12,quantifi:14,quantiti:[3,5,7,12,14,17],quasi:14,quotient:[14,17],r0:8,r:[7,8,12,14,17],r_1:14,r_i:[14,17],r_n:14,radiu:[7,12],ramp:17,ramp_complex:17,randal:8,random:17,rather:[3,5,7,8,12,14],ratio:[6,17],rcj14:[7,12],read:[1,11],readi:8,real:14,reason:[8,14],reassembl:8,recal:[2,14],receiv:[7,12],recip:17,recommend:11,recompil:5,recomput:17,record:0,recov:17,recover_boundary_hessian:17,recover_hessian:17,recoveri:3,rectangl:7,rectanglemesh:7,rectangular:12,reduc:14,refer:[8,11,16,17],refin:[3,17],region:[3,7,9,12],regular:14,rel:[12,14],relat:[12,14],relax:17,releas:12,relev:[3,14],remedi:10,remov:[8,17],reorder:17,replac:[3,17],replace_map:17,report:6,repres:[7,12,14,17],represent:[2,7,14],requir:[0,1,7],researchg:[],reset:17,residu:[3,12,17],resolut:[6,8,12],respect:[7,12,17],restart:17,result:[1,3,4,7,17],ret:9,revers:[1,2],rho:[3,14],riadh:12,ric:17,riemannian:[14,17],right:[0,1,2,3,5,7,8,12,14],rightarrow:14,rise:[12,14],rk:[],rl:7,rodolfo:17,root:14,rotat:[11,17],rotation_matrix_2d:17,routin:[0,5],rr:7,rule:5,run:[2,3,9,17],run_final_subinterv:17,rung:[],s0045:14,s:[0,1,3,4,6,7,8,9,10,12,14,17],sai:3,salin:12,salt:12,same:[0,1,2,4,5,7,8,9,17],satisfi:12,save:8,savefig:[0,1,2,3,4,5,6,7,8],saw:6,scalar:17,scale:[14,17],scaled_jacobian:17,scenario:12,scheme:[],schmidt:17,scientif:17,script:[0,1,2,3,4,5,6,7,8,9,10],sea:11,search:11,second:[0,2,3,10,17],section:17,see:[0,7,9,14,17],seed:17,seek:[14,17],seem:[0,7],seen:[3,5],segment:17,self:[4,17],semi:14,sens:[3,7,12,14],sensit:[12,17],separ:14,sequenc:[3,10,11,17],set:[3,7,8,9,10,14,17],set_aspect:8,set_log_level:[6,10,17],set_titl:7,setup:[0,2,4,5,7,8,12],sever:17,shape:14,shift:8,should:[0,1,2,4,8,9,10,14,17],show:0,shown:[12,14],siam:[8,14,17],side:[0,8,12,14],sigma:17,sign:17,silent:11,similar:1,similarli:[0,14],simpl:[0,6,8,12,14,17],simplest:[10,14],simpli:[2,4,5,8,14],simplic:8,simul:[0,10,17],sin:[0,4],sinc:[0,1,7,8,9,12,14],sine:0,singl:[0,1,6,9,10,17],sinusoid:0,size:[7,14,17],skew:17,slightli:[5,17],slot:8,slot_cyl:[8,9],slot_cyl_adjoint:9,slot_cyl_initial_condit:[8,9],slot_left:8,slot_right:8,slot_top:8,snapshot:[2,17],snippet:14,so:[0,1,2,3,4,5,7,8,9,10,11,12,14,17],sobolevspac:17,softwar:12,sol:[7,8,9],solid:11,solid_body_rot:[8,9],solid_body_rotation_split:9,solut:[0,1,2,3,4,5,6,7,8,9,10,12,14,17],solution_map:[4,5,17],solv:[0,1,2,3,4,5,6,7,8,9,10,11,12,14,17],solve_adjoint:[1,2,4,5,8,9,17],solve_block:17,solve_forward:[0,1,2,17],solver2d:17,solver:[0,1,2,4,5,7,8,9,17],solver_kwarg:17,some:[0,5,7,10,11,12,14,17],sometim:9,sought:17,sourc:[5,7,11,12,14,17],space:[0,1,2,3,5,7,8,12,16,17],space_normalis:[14,17],space_time_normalis:[14,17],spatial:[5,8,14,17],spatialcoordin:[0,4,7,8,9],spd:14,speci:12,specif:14,specifi:[0,4,5,7,10,12,14,17],split:[8,9],split_solv:9,sqrt3:14,sqrt:[7,8,14,17],squar:[0,1,8,14],ssprk33:[],stabilis:7,stackoverflow:17,stage:17,stand:17,start:[7,10,11,17],start_tim:17,state:[7,12,14,17],staticmethod:4,steadi:[7,12,14,17],steadyst:[],step:17,still:2,store:17,straight:[14,17],strategi:12,streamlin:7,string:[],strongli:[7,8],structur:7,subclass:[3,4,7],subdict:17,subdivid:10,subdomain:17,subinter:17,subinterv:[0,1,2,4,5,6,8,10,17],submodul:[],subplot:8,subsect:[],subsequ:6,subset:14,subseteq:14,suggest:[],suit:2,suitabl:[5,10,17],sum:14,sum_:[3,14],superspac:3,supg:7,support:3,suppos:[9,10,12,14],sure:8,surfac:11,suspend:12,symmetr:[14,17],symmetri:17,syndic:17,system:[0,12],t:[0,1,4,5,8,10,14,17],t_:[1,5,10],t_end:[0,4,5,8],t_start:[0,4,5,8],tableau:[],tableaux:[],tag:17,take:[2,3,4,5,12,14,17],taken:[8,12,14,17],tape:17,target:[14,17],target_continu:17,target_degre:17,target_spac:17,tau:7,tc:[0,1,2,3,4,5,7,8],techniqu:14,technolog:12,telemac:12,tell:12,tempor:17,tend:[3,12],tensor:[14,17],tensorfunctionspac:[14,17],term:[5,7,8,12,14,17],termin:5,tessel:14,test:[2,3,7,8,12,17],test_checkpoint_qoi:17,test_spac:17,testfunct:[0,4,7,8],tetrahedr:[14,17],teukolski:17,text:[0,7],tfrac12:14,th:[0,14],than:[0,1,3,5,8,10,12,14],thei:[2,6,9,11,12,14,17],them:[4,8,9,12],theori:[],therebi:1,therefor:[7,8,14],thesi:14,theta:8,theti:17,thetis_compat:[],thetisproject:17,thi:[0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,17],thing:[10,14],think:[2,14],third:8,thorni:17,those:[2,4],thought:[8,14],three:[12,14],through:17,throughout:[8,11,14],ticker:7,tidal:[],tight_layout:8,time:[0,1,2,4,6,7,8,9,11,12,14,17],time_integr:[3,4,5],time_integrated_qoi:[4,5],time_partit:[0,1,2,3,4,5,6,7,8,9],timed_region:[],timed_stag:17,timeinst:[7,17],timeinterv:[1,8,9,17],timepartit:[0,1,2,3,4,5,6,7,10,17],timestep:[0,1,2,3,4,5,8,10,14,17],timestepp:17,timesteps_per_export:[0,1,2,3,4,5,6,8,9,10,17],todo:[],toggl:17,toler:[14,17],too:[3,8],top:[1,6,10],topic:11,topolog:17,total:14,toward:[7,14],trace:17,tracer:[7,8,9,16],transfer:[0,2,17],transfer_form:17,transform:17,transport:[8,16],transpos:[2,17],trasfer:2,trialfunct:8,triangular:[14,17],tricontourf:[8,17],triplot:17,trivial:[1,14,17],truli:14,truth:17,ts_data:17,tupl:[0,10],turn:6,tutori:[7,8,9],two:[0,1,6,11,14,17],type:[0,3,7,17],typic:17,u:[0,1,2,3,4,5,7,8,12,14,17],u_1:14,u_:[0,4,5],u_h:3,u_i:14,u_n:14,u_old:[0,4,5],ufl:17,uh:17,umplebi:[14,17],uncertain:12,under:[14,17],underli:0,underlin:[14,17],understand:[12,14],understood:[12,14],uniform:[2,3,10,14,17],uniformli:[7,12],unit:[0,8,14],unitsquaremesh:[0,1,2,3,4,5,6,8,14],univers:17,unknown:12,unless:[],unnecessarili:12,unorm:7,unstabl:7,up:[3,7,8,9,10,17],updat:[9,17],update_tag:17,upon:[11,12,14,17],upstream:12,upwind:7,us:[0,1,2,3,4,5,6,7,8,9,10,11,12,14,17],usag:[0,11],user:[11,12,17],usual:[1,8,14],util:[2,6],uv:14,uv_2d:[],uv_2d_old:[],v:[0,4,8,14,17],v_1:14,v_i:14,v_n:14,valu:[1,3,5,7,10,14,17],vari:14,variabl:[0,11,17],variat:[0,4,7,8],varieti:12,variou:[3,8,9,12,14],vec:14,vector:[14,17],vectorfunctionspac:[0,4],veloc:[7,8,12],verbos:6,verifi:[2,17],version:[5,12,17],vertex:[14,17],vertic:[6,14],vetterl:17,via:[0,17],view:14,viscos:[0,4],visualis:[8,14,17],vmax:[],vmin:[],volum:[14,17],vtk:17,vtu:17,w:17,wa:[0,2,8],wai:[1,2,4,7,9,12,14],wal21:14,wallwork:[12,14],want:17,warn:17,warp:14,wast:12,water:[12,17],wave:0,wbhp22:[7,12],we:[0,1,2,3,4,5,6,7,8,9,10,11,12,14,17],weak:[0,3,17],weight:[3,17],well:[2,5,6,14,17],westward:5,what:[3,4,12],when:[0,2,5,7,9,10,12,14,17],where:[3,7,8,9,10,12,13,14,15,17],wherea:14,whether:17,which:[0,1,2,3,5,6,7,8,9,10,11,12,14,17],whilst:[1,14,17],whole:17,whose:[0,7,14,17],wide:12,widehat:[0,7],wikipedia:14,wise:[14,17],within:[12,14],work:[2,7,14],would:[7,12],wrap:5,write:[4,8,9,14],written:[7,10],x0:[7,8],x:[0,1,4,7,8,9,12,14,17],x_0:7,xi:14,xr:7,y0:[7,8],y:[0,1,4,5,7,8,9,11],y_0:7,yet:8,yield:14,york:17,you:[2,4,9,10],yourmesh_seq:[],yourself:[4,9],yr:7,zero:[7,9,10,12]},titles:["<span class=\"section-number\">3. </span>Burgers equation on a sequence of meshes","<span class=\"section-number\">4. </span>Adjoint of Burgers equation","<span class=\"section-number\">5. </span>Adjoint Burgers equation on two meshes","<span class=\"section-number\">8. </span>Error estimation for Burgers equation","<span class=\"section-number\">7. </span>Object-oriented Burgers equation","<span class=\"section-number\">6. </span>Adjoint Burgers equation with a time integrated QoI","<span class=\"section-number\">2. </span>Creating a mesh sequence","<span class=\"section-number\">11. </span>Point discharge with diffusion","<span class=\"section-number\">9. </span>Solid body rotation","<span class=\"section-number\">10. </span>Solid body rotation with multiple prognostic variables","<span class=\"section-number\">1. </span>Partitioning a time interval","Pyroteus Goal-Oriented Mesh Adaptation Toolkit","<span class=\"section-number\">1. </span>Motivation","<span class=\"section-number\">2. </span>Goal-oriented error estimation","<span class=\"section-number\">3. </span>The metric-based framework","<span class=\"section-number\">4. </span>Goal-oriented mesh adaptation","Pyroteus manual","pyroteus package"],titleterms:{The:14,adapt:[11,14,15],adjoint:[1,2,5,17],analog:14,base:14,bodi:[8,9],burger:[0,1,2,3,4,5],content:17,continu:14,creat:6,demo:[],diffus:7,discharg:7,driver:14,equat:[0,1,2,3,4,5],error:[3,13],error_estim:17,estim:[3,13],farm:[],form:17,framework:14,geometr:14,go_mesh_seq:17,goal:[11,13,15],integr:5,interpol:17,interpret:14,interv:10,kernel:[],log:17,manual:16,math:17,mesh:[0,2,6,11,14,15],mesh_seq:17,metric:[14,17],model:[],modul:17,motiv:12,multipl:9,object:4,oper:14,orient:[4,11,13,15],packag:17,partit:10,plot:17,point:7,prognost:9,pyroteu:[11,16,17],qoi:5,qualiti:17,recoveri:17,refer:[12,14],rotat:[8,9],runge_kutta:[],section:[],sequenc:[0,6],solid:[8,9],space:14,submodul:17,thetis_compat:17,tidal:[],time:[5,10],time_partit:17,toolkit:11,tracer:12,transport:12,two:2,util:17,variabl:9}})