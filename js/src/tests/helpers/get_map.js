/** Returns a test map */

module.exports = {
    get_map,
    get_small_map,
}

function get_small_map() {
    return [{"homepage":"https://escher.github.io","map_description":"E. coli core metabolic network\nLast Modified Thu Dec 11 2014 15:07:04 GMT-0800 (Pacific Standard Time)","map_id":"2938hoq32a1","map_name":"E coli core.Core metabolism","schema":"https://escher.github.io/escher/jsonschema/1-0-0#"},{"text_labels":{},"canvas":{"height":2815.9292053222653,"width":2269.555348968506,"x":522.1247779846192,"y":314.36893920898433},"nodes":{"1576485":{"bigg_id":"atp_c","label_x":1165,"label_y":2805,"name":"ATP","node_is_primary":false,"node_type":"metabolite","x":1145,"y":2805},"1576486":{"bigg_id":"3pg_c","label_x":1085,"label_y":2875,"name":"3-Phospho-D-glycerate","node_is_primary":true,"node_type":"metabolite","x":1055,"y":2875},"1576487":{"bigg_id":"13dpg_c","label_x":1085,"label_y":2565,"name":"3-Phospho-D-glyceroyl-phosphate","node_is_primary":true,"node_type":"metabolite","x":1055,"y":2565},"1576488":{"bigg_id":"adp_c","label_x":1165,"label_y":2635,"name":"ADP","node_is_primary":false,"node_type":"metabolite","x":1145,"y":2635},"1576489":{"bigg_id":"nadp_c","label_x":1907,"label_y":1145,"name":"Nicotinamide-adenine-dinucleotide-phosphate","node_is_primary":false,"node_type":"metabolite","x":1907,"y":1165},"1576490":{"bigg_id":"6pgc_c","label_x":1800.0250244140625,"label_y":1235,"name":"6-Phospho-D-gluconate","node_is_primary":true,"node_type":"metabolite","x":1827,"y":1265},"1576491":{"bigg_id":"co2_c","label_x":2007,"label_y":1145,"name":"CO2","node_is_primary":false,"node_type":"metabolite","x":2007,"y":1165},"1576492":{"bigg_id":"nadph_c","label_x":2080,"label_y":1140,"name":"Nicotinamide-adenine-dinucleotide-phosphate-reduced","node_is_primary":false,"node_type":"metabolite","x":2057,"y":1165},"1576493":{"bigg_id":"ru5p__D_c","label_x":2155,"label_y":1235,"name":"D-Ribulose-5-phosphate","node_is_primary":true,"node_type":"metabolite","x":2155,"y":1265},"1576834":{"node_type":"multimarker","x":1055,"y":2665},"1576835":{"node_type":"multimarker","x":1055,"y":2775},"1576836":{"node_type":"midmarker","x":1055,"y":2725},"1576837":{"node_type":"midmarker","x":1957,"y":1265},"1576838":{"node_type":"multimarker","x":1937,"y":1265},"1576839":{"node_type":"multimarker","x":1977,"y":1265}},"reactions":{"1576693":{"bigg_id":"PGK","gene_reaction_rule":"b2926","genes":[],"label_x":1065,"label_y":2715,"metabolites":[{"bigg_id":"3pg_c","coefficient":-1},{"bigg_id":"adp_c","coefficient":1},{"bigg_id":"13dpg_c","coefficient":1},{"bigg_id":"atp_c","coefficient":-1}],"name":"phosphoglycerate kinase","reversibility":true,"segments":{"291":{"b1":null,"b2":null,"from_node_id":"1576835","to_node_id":"1576836"},"292":{"b1":null,"b2":null,"from_node_id":"1576836","to_node_id":"1576834"},"293":{"b1":{"x":1055,"y":2822.4341649025255},"b2":{"x":1055,"y":2789.230249470758},"from_node_id":"1576485","to_node_id":"1576835"},"294":{"b1":{"x":1055,"y":2825},"b2":{"x":1055,"y":2790},"from_node_id":"1576486","to_node_id":"1576835"},"295":{"b1":{"x":1055,"y":2650},"b2":{"x":1055,"y":2615},"from_node_id":"1576834","to_node_id":"1576487"},"296":{"b1":{"x":1055,"y":2650.769750529242},"b2":{"x":1055,"y":2617.5658350974745},"from_node_id":"1576834","to_node_id":"1576488"}}},"1576694":{"bigg_id":"GND","gene_reaction_rule":"b2029","genes":[{"bigg_id":"b2029","name":"b2029"}],"label_x":1930.5045166015625,"label_y":1313.710205078125,"metabolites":[{"bigg_id":"nadp_c","coefficient":-1},{"bigg_id":"ru5p__D_c","coefficient":1},{"bigg_id":"nadph_c","coefficient":1},{"bigg_id":"co2_c","coefficient":1},{"bigg_id":"6pgc_c","coefficient":-1}],"name":"phosphogluconate dehydrogenase","reversibility":false,"segments":{"297":{"b1":null,"b2":null,"from_node_id":"1576838","to_node_id":"1576837"},"298":{"b1":null,"b2":null,"from_node_id":"1576837","to_node_id":"1576839"},"299":{"b1":{"x":1884.7984674554473,"y":1265},"b2":{"x":1921.339540236634,"y":1265},"from_node_id":"1576489","to_node_id":"1576838"},"300":{"b1":{"x":1882,"y":1265},"b2":{"x":1920.5,"y":1265},"from_node_id":"1576490","to_node_id":"1576838"},"301":{"b1":{"x":1992.660459763366,"y":1265},"b2":{"x":2029.2015325445527,"y":1265},"from_node_id":"1576839","to_node_id":"1576491"},"302":{"b1":{"x":1996.2093727122985,"y":1265},"b2":{"x":2041.0312423743285,"y":1265},"from_node_id":"1576839","to_node_id":"1576492"},"303":{"b1":{"x":2003.7,"y":1265},"b2":{"x":2066,"y":1265},"from_node_id":"1576839","to_node_id":"1576493"}}}}}]
}

function get_map() {
    return [{"map_name":"E coli core.Core metabolism","map_id":"2938hoq32a1","map_description":"E. coli core metabolic network\nLast Modified Thu Dec 11 2014 15:07:04 GMT-0800 (Pacific Standard Time)","homepage":"https://escher.github.io","schema":"https://escher.github.io/escher/jsonschema/1-0-0#"},{"reactions":{"1576693":{"name":"phosphoglycerate kinase","bigg_id":"PGK","reversibility":true,"label_x":1065,"label_y":2715,"gene_reaction_rule":"b2926","genes":[{"bigg_id":"b2926","name":"b2926"}],"metabolites":[{"coefficient":-1,"bigg_id":"3pg_c"},{"coefficient":1,"bigg_id":"adp_c"},{"coefficient":1,"bigg_id":"13dpg_c"},{"coefficient":-1,"bigg_id":"atp_c"}],"segments":{"291":{"from_node_id":"1576835","to_node_id":"1576836","b1":null,"b2":null},"292":{"from_node_id":"1576836","to_node_id":"1576834","b1":null,"b2":null},"293":{"from_node_id":"1576485","to_node_id":"1576835","b1":{"y":2822.4341649025255,"x":1055},"b2":{"y":2789.230249470758,"x":1055}},"294":{"from_node_id":"1576486","to_node_id":"1576835","b1":{"y":2825,"x":1055},"b2":{"y":2790,"x":1055}},"295":{"from_node_id":"1576834","to_node_id":"1576487","b1":{"y":2650,"x":1055},"b2":{"y":2615,"x":1055}},"296":{"from_node_id":"1576834","to_node_id":"1576488","b1":{"y":2650.769750529242,"x":1055},"b2":{"y":2617.5658350974745,"x":1055}}}},"1576694":{"name":"phosphogluconate dehydrogenase","bigg_id":"GND","reversibility":false,"label_x":1930.5045166015625,"label_y":1313.710205078125,"gene_reaction_rule":"b2029","genes":[{"bigg_id":"b2029","name":"b2029"}],"metabolites":[{"coefficient":-1,"bigg_id":"nadp_c"},{"coefficient":1,"bigg_id":"ru5p__D_c"},{"coefficient":1,"bigg_id":"nadph_c"},{"coefficient":1,"bigg_id":"co2_c"},{"coefficient":-1,"bigg_id":"6pgc_c"}],"segments":{"297":{"from_node_id":"1576838","to_node_id":"1576837","b1":null,"b2":null},"298":{"from_node_id":"1576837","to_node_id":"1576839","b1":null,"b2":null},"299":{"from_node_id":"1576489","to_node_id":"1576838","b1":{"y":1265,"x":1884.7984674554473},"b2":{"y":1265,"x":1921.339540236634}},"300":{"from_node_id":"1576490","to_node_id":"1576838","b1":{"y":1265,"x":1882},"b2":{"y":1265,"x":1920.5}},"301":{"from_node_id":"1576839","to_node_id":"1576491","b1":{"y":1265,"x":1992.660459763366},"b2":{"y":1265,"x":2029.2015325445527}},"302":{"from_node_id":"1576839","to_node_id":"1576492","b1":{"y":1265,"x":1996.2093727122985},"b2":{"y":1265,"x":2041.0312423743285}},"303":{"from_node_id":"1576839","to_node_id":"1576493","b1":{"y":1265,"x":2003.7},"b2":{"y":1265,"x":2066}}}},"1576702":{"name":"glucose-6-phosphate isomerase","bigg_id":"PGI","reversibility":true,"label_x":1065,"label_y":1385,"gene_reaction_rule":"b4025","genes":[{"bigg_id":"b4025","name":"b4025"}],"metabolites":[{"coefficient":-1,"bigg_id":"g6p_c"},{"coefficient":1,"bigg_id":"f6p_c"}],"segments":{"345":{"from_node_id":"1576524","to_node_id":"1576857","b1":{"y":1284.5,"x":1055},"b2":{"y":1330,"x":1055}},"346":{"from_node_id":"1576857","to_node_id":"1576525","b1":{"y":1417.5,"x":1055},"b2":{"y":1470,"x":1055}}}},"1576704":{"name":"fructose-bisphosphatase","bigg_id":"FBP","reversibility":false,"label_x":751.3809814453125,"label_y":1733.561767578125,"gene_reaction_rule":"(b3925 or b4232)","genes":[{"bigg_id":"b3925","name":"b3925"},{"bigg_id":"b4232","name":"b4232"}],"metabolites":[{"coefficient":-1,"bigg_id":"fdp_c"},{"coefficient":1,"bigg_id":"pi_c"},{"coefficient":1,"bigg_id":"f6p_c"},{"coefficient":-1,"bigg_id":"h2o_c"}],"segments":{"349":{"from_node_id":"1576861","to_node_id":"1576859","b1":null,"b2":null},"350":{"from_node_id":"1576859","to_node_id":"1576860","b1":null,"b2":null},"351":{"from_node_id":"1576528","to_node_id":"1576861","b1":{"y":1822.0087712549569,"x":835},"b2":{"y":1782.1026313764871,"x":835}},"352":{"from_node_id":"1576529","to_node_id":"1576861","b1":{"y":1901.0147050873545,"x":835},"b2":{"y":1805.8044115262064,"x":835}},"353":{"from_node_id":"1576860","to_node_id":"1576525","b1":{"y":1627.410107741575,"x":835},"b2":{"y":1539.7003591385833,"x":835}},"354":{"from_node_id":"1576860","to_node_id":"1576530","b1":{"y":1645.7906272877015,"x":835},"b2":{"y":1600.9687576256715,"x":835}}}},"1576711":{"name":"transaldolase","bigg_id":"TALA","reversibility":true,"label_x":2197.5205078125,"label_y":2008.8013916015625,"gene_reaction_rule":"(b2464 or b0008)","genes":[{"bigg_id":"b2464","name":"b2464"},{"bigg_id":"b0008","name":"b0008"}],"metabolites":[{"coefficient":1,"bigg_id":"e4p_c"},{"coefficient":-1,"bigg_id":"g3p_c"},{"coefficient":-1,"bigg_id":"s7p_c"},{"coefficient":1,"bigg_id":"f6p_c"}],"segments":{"369":{"from_node_id":"1576873","to_node_id":"1576872","b1":null,"b2":null},"370":{"from_node_id":"1576872","to_node_id":"1576874","b1":null,"b2":null},"371":{"from_node_id":"1576545","to_node_id":"1576873","b1":{"x":2283.184776999114,"y":1892.1518443631908},"b2":{"x":2173.815906732547,"y":1856.1727017464573}},"372":{"from_node_id":"1576546","to_node_id":"1576873","b1":{"x":2064.2112662569266,"y":1890.5651744413158},"b2":{"x":2175.402576654422,"y":1856.1728238167698}},"373":{"from_node_id":"1576874","to_node_id":"1576547","b1":{"y":2076.976957965055,"x":2178},"b2":{"x":2178,"y":2171.7496092324754}},"374":{"from_node_id":"1576874","to_node_id":"1576548","b1":{"y":2077.4778177405574,"x":2178},"b2":{"x":2178.000244140625,"y":2170.2455578331073}}}},"1576716":{"name":"ribulose 5-phosphate 3-epimerase","bigg_id":"RPE","reversibility":true,"label_x":1937.57958984375,"label_y":1422.4544677734375,"gene_reaction_rule":"(b3386 or b4301)","genes":[{"bigg_id":"b3386","name":"b3386"},{"bigg_id":"b4301","name":"b4301"}],"metabolites":[{"coefficient":-1,"bigg_id":"ru5p__D_c"},{"coefficient":1,"bigg_id":"xu5p__D_c"}],"segments":{"392":{"from_node_id":"1576493","to_node_id":"1576885","b1":{"y":1287.5,"x":2138.5},"b2":{"y":1340,"x":2100}},"393":{"from_node_id":"1576885","to_node_id":"1576558","b1":{"y":1436,"x":2030},"b2":{"y":1485,"x":1995}}}},"1576721":{"name":"phosphofructokinase","bigg_id":"PFK","reversibility":false,"label_x":1065,"label_y":1725,"gene_reaction_rule":"( b3916  or  b1723 )","genes":[{"bigg_id":"b3916","name":"b3916"},{"bigg_id":"b1723","name":"b1723"}],"metabolites":[{"coefficient":-1,"bigg_id":"f6p_c"},{"coefficient":-1,"bigg_id":"atp_c"},{"coefficient":1,"bigg_id":"h_c"},{"coefficient":1,"bigg_id":"fdp_c"},{"coefficient":1,"bigg_id":"adp_c"}],"segments":{"404":{"from_node_id":"1576893","to_node_id":"1576891","b1":null,"b2":null},"405":{"from_node_id":"1576891","to_node_id":"1576892","b1":null,"b2":null},"406":{"from_node_id":"1576525","to_node_id":"1576893","b1":{"y":1617.5,"x":1055},"b2":{"y":1668.25,"x":1055}},"407":{"from_node_id":"1576572","to_node_id":"1576893","b1":{"y":1639.6884705062548,"x":1055},"b2":{"y":1674.9065411518764,"x":1055}},"408":{"from_node_id":"1576892","to_node_id":"1576573","b1":{"y":1789.2302494707578,"x":1055},"b2":{"y":1822.4341649025257,"x":1055}},"409":{"from_node_id":"1576892","to_node_id":"1576529","b1":{"y":1797.5,"x":1055},"b2":{"y":1850,"x":1055}},"410":{"from_node_id":"1576892","to_node_id":"1576574","b1":{"y":1793.0623918681883,"x":1055},"b2":{"y":1835.2079728939614,"x":1055}}}},"1576723":{"name":"transketolase","bigg_id":"TKT2","reversibility":true,"label_x":1520.71923828125,"label_y":1702.785400390625,"gene_reaction_rule":"( b2935  or  b2465 )","genes":[{"bigg_id":"b2935","name":"b2935"},{"bigg_id":"b2465","name":"b2465"}],"metabolites":[{"coefficient":-1,"bigg_id":"e4p_c"},{"coefficient":1,"bigg_id":"g3p_c"},{"coefficient":-1,"bigg_id":"xu5p__D_c"},{"coefficient":1,"bigg_id":"f6p_c"}],"segments":{"413":{"from_node_id":"1576897","to_node_id":"1576896","b1":null,"b2":null},"414":{"from_node_id":"1576896","to_node_id":"1576898","b1":null,"b2":null},"415":{"from_node_id":"1576547","to_node_id":"1576897","b1":{"y":1735,"x":1954.5789860524153},"b2":{"y":1735,"x":1772.8736958157247}},"416":{"from_node_id":"1576558","to_node_id":"1576897","b1":{"y":1735,"x":1849.0292180074937},"b2":{"y":1735,"x":1741.208765402248}},"417":{"from_node_id":"1576898","to_node_id":"1576525","b1":{"x":1235.776382408843,"y":1741.3470458984375},"b2":{"x":1280.4546812716637,"y":1587.43115234375}},"418":{"from_node_id":"1576898","to_node_id":"1576575","b1":{"y":1735,"x":1318.2979239002893},"b2":{"x":1312.7516245895065,"y":1735}}}},"1576733":{"name":"fructose-bisphosphate aldolase","bigg_id":"FBA","reversibility":true,"label_x":969.7942504882812,"label_y":2031.01611328125,"gene_reaction_rule":"(b2097 or b1773 or b2925)","genes":[{"bigg_id":"b2097","name":"b2097"},{"bigg_id":"b1773","name":"b1773"},{"bigg_id":"b2925","name":"b2925"}],"metabolites":[{"coefficient":1,"bigg_id":"dhap_c"},{"coefficient":-1,"bigg_id":"fdp_c"},{"coefficient":1,"bigg_id":"g3p_c"}],"segments":{"53":{"from_node_id":"1576926","to_node_id":"1576925","b1":null,"b2":null},"54":{"from_node_id":"1576925","to_node_id":"1576575","b1":{"y":2067.5,"x":1055},"b2":{"y":2120,"x":1055}},"55":{"from_node_id":"1576925","to_node_id":"1576601","b1":{"y":2082.5,"x":1055},"b2":{"x":929.645751953125,"y":2081.141357421875}},"475":{"from_node_id":"1576529","to_node_id":"1576926","b1":{"x":1055,"y":1970.4088134765625},"b2":{"x":1055,"y":1974.28076171875}}}},"1576734":{"name":"triose-phosphate isomerase","bigg_id":"TPI","reversibility":true,"label_x":936.438232421875,"label_y":2245.297119140625,"gene_reaction_rule":"b3919","genes":[{"bigg_id":"b3919","name":"b3919"}],"metabolites":[{"coefficient":-1,"bigg_id":"dhap_c"},{"coefficient":1,"bigg_id":"g3p_c"}],"segments":{"56":{"from_node_id":"1576601","to_node_id":"1576927","b1":{"x":911.255859375,"y":2195},"b2":{"x":911.3470458984375,"y":2195}},"57":{"from_node_id":"1576927","to_node_id":"1576575","b1":{"y":2195,"x":970},"b2":{"y":2195,"x":1005}}}},"1576736":{"name":"ribose-5-phosphate isomerase","bigg_id":"RPI","reversibility":true,"label_x":2315,"label_y":1415,"gene_reaction_rule":"( b2914  or  b4090 )","genes":[{"bigg_id":"b2914","name":"b2914"},{"bigg_id":"b4090","name":"b4090"}],"metabolites":[{"coefficient":1,"bigg_id":"ru5p__D_c"},{"coefficient":-1,"bigg_id":"r5p_c"}],"segments":{"66":{"from_node_id":"1576605","to_node_id":"1576931","b1":{"y":1535.5,"x":2401.9},"b2":{"y":1490,"x":2362}},"67":{"from_node_id":"1576931","to_node_id":"1576493","b1":{"y":1401,"x":2282.5},"b2":{"y":1345,"x":2230}}}},"1576743":{"name":"glucose 6-phosphate dehydrogenase","bigg_id":"G6PDH2r","reversibility":true,"label_x":1261.46337890625,"label_y":1320.0572509765625,"gene_reaction_rule":"b1852","genes":[{"bigg_id":"b1852","name":"b1852"}],"metabolites":[{"coefficient":-1,"bigg_id":"nadp_c"},{"coefficient":1,"bigg_id":"nadph_c"},{"coefficient":1,"bigg_id":"h_c"},{"coefficient":1,"bigg_id":"6pgl_c"},{"coefficient":-1,"bigg_id":"g6p_c"}],"segments":{"98":{"from_node_id":"1576946","to_node_id":"1576945","b1":null,"b2":null},"99":{"from_node_id":"1576945","to_node_id":"1576944","b1":null,"b2":null},"100":{"from_node_id":"1576623","to_node_id":"1576946","b1":{"y":1265,"x":1232.3991758303962},"b2":{"y":1265,"x":1270.6197527491188}},"101":{"from_node_id":"1576524","to_node_id":"1576946","b1":{"y":1265,"x":1171},"b2":{"y":1265,"x":1252.2}},"102":{"from_node_id":"1576944","to_node_id":"1576624","b1":{"y":1265,"x":1346.800568173666},"b2":{"y":1265,"x":1393.0018939122203}},"103":{"from_node_id":"1576944","to_node_id":"1576625","b1":{"y":1265,"x":1343.3802472508812},"b2":{"y":1265,"x":1381.6008241696038}},"104":{"from_node_id":"1576944","to_node_id":"1576626","b1":{"y":1265,"x":1354},"b2":{"y":1265,"x":1417}}}},"1576751":{"name":"transketolase","bigg_id":"TKT1","reversibility":true,"label_x":2185,"label_y":1685,"gene_reaction_rule":"( b2935  or  b2465 )","genes":[{"bigg_id":"b2935","name":"b2935"},{"bigg_id":"b2465","name":"b2465"}],"metabolites":[{"coefficient":-1,"bigg_id":"xu5p__D_c"},{"coefficient":-1,"bigg_id":"r5p_c"},{"coefficient":1,"bigg_id":"g3p_c"},{"coefficient":1,"bigg_id":"s7p_c"}],"segments":{"138":{"from_node_id":"1576964","to_node_id":"1576965","b1":null,"b2":null},"139":{"from_node_id":"1576965","to_node_id":"1576966","b1":null,"b2":null},"140":{"from_node_id":"1576605","to_node_id":"1576964","b1":{"x":2171.826416015625,"y":1557.80791851959},"b2":{"y":1605.9896167668144,"x":2175}},"141":{"from_node_id":"1576558","to_node_id":"1576964","b1":{"x":2171.82666015625,"y":1558.0047151164654},"b2":{"y":1607.9527328943145,"x":2175}},"142":{"from_node_id":"1576966","to_node_id":"1576546","b1":{"x":2173.413330078125,"y":1823.819109636181},"b2":{"x":2070.2734375,"y":1816.322080948729}},"143":{"from_node_id":"1576966","to_node_id":"1576545","b1":{"x":2175,"y":1822.232439714306},"b2":{"x":2297.1806640625,"y":1821.0824569252916}}}},"1576755":{"name":"D-Glucose exchange","bigg_id":"EX_glc_e","reversibility":false,"label_x":1082.5206298828125,"label_y":598.4705200195312,"gene_reaction_rule":"","genes":[],"metabolites":[{"coefficient":-1,"bigg_id":"glc__D_e"}],"segments":{"157":{"from_node_id":"1576647","to_node_id":"1576974","b1":{"x":1055.066162109375,"y":625.4632568359375},"b2":{"x":1056.6529541015625,"y":623.4132690429688}}}},"1576757":{"name":"phosphoglycerate mutase","bigg_id":"PGM","reversibility":true,"label_x":1065,"label_y":2985,"gene_reaction_rule":"(b3612 or b4395 or b0755)","genes":[{"bigg_id":"b3612","name":"b3612"},{"bigg_id":"b4395","name":"b4395"},{"bigg_id":"b0755","name":"b0755"}],"metabolites":[{"coefficient":1,"bigg_id":"3pg_c"},{"coefficient":-1,"bigg_id":"2pg_c"}],"segments":{"166":{"from_node_id":"1576978","to_node_id":"1576486","b1":{"y":2977,"x":1055},"b2":{"y":2935,"x":1055}}}},"1576765":{"name":"D-glucose transport via PEP:Pyr PTS","bigg_id":"GLCpts","reversibility":false,"label_x":1074.520263671875,"label_y":929.0499877929688,"gene_reaction_rule":"((b2417 and b1101 and b2415 and b2416) or (b1817 and b1818 and b1819 and b2415 and b2416) or (b2417 and b1621 and b2415 and b2416))","genes":[{"bigg_id":"b2417","name":"b2417"},{"bigg_id":"b1101","name":"b1101"},{"bigg_id":"b2415","name":"b2415"},{"bigg_id":"b2416","name":"b2416"},{"bigg_id":"b1817","name":"b1817"},{"bigg_id":"b1818","name":"b1818"},{"bigg_id":"b1819","name":"b1819"},{"bigg_id":"b2415","name":"b2415"},{"bigg_id":"b2416","name":"b2416"},{"bigg_id":"b2417","name":"b2417"},{"bigg_id":"b1621","name":"b1621"},{"bigg_id":"b2415","name":"b2415"},{"bigg_id":"b2416","name":"b2416"}],"metabolites":[{"coefficient":1,"bigg_id":"g6p_c"},{"coefficient":1,"bigg_id":"pyr_c"},{"coefficient":-1,"bigg_id":"pep_c"},{"coefficient":-1,"bigg_id":"glc__D_e"}],"segments":{"199":{"from_node_id":"1576998","to_node_id":"1576997","b1":null,"b2":null},"200":{"from_node_id":"1576997","to_node_id":"1576999","b1":null,"b2":null},"201":{"from_node_id":"1576662","to_node_id":"1576998","b1":{"x":962.100078544998,"y":817.6128620109578},"b2":{"x":1056.2982974892807,"y":830.8607140720374}},"202":{"from_node_id":"1576647","to_node_id":"1576998","b1":{"x":1054.4691636917553,"y":841.218336226978},"b2":{"x":1054.6540059434642,"y":852.0646158583277}},"203":{"from_node_id":"1576999","to_node_id":"1576663","b1":{"x":1056.5867919921875,"y":1155.6497636747395},"b2":{"x":1162.89990234375,"y":1091.99109457335}},"204":{"from_node_id":"1576999","to_node_id":"1576524","b1":{"x":1056.5867919921875,"y":1156.4998046875},"b2":{"x":1055,"y":1159.3526000976562}}}},"1576768":{"name":"6-phosphogluconolactonase","bigg_id":"PGL","reversibility":false,"label_x":1599.3970947265625,"label_y":1312.1234130859375,"gene_reaction_rule":"b0767","genes":[{"bigg_id":"b0767","name":"b0767"}],"metabolites":[{"coefficient":-1,"bigg_id":"h2o_c"},{"coefficient":-1,"bigg_id":"6pgl_c"},{"coefficient":1,"bigg_id":"h_c"},{"coefficient":1,"bigg_id":"6pgc_c"}],"segments":{"211":{"from_node_id":"1577005","to_node_id":"1577003","b1":null,"b2":null},"212":{"from_node_id":"1577003","to_node_id":"1577004","b1":null,"b2":null},"213":{"from_node_id":"1576626","to_node_id":"1577005","b1":{"y":1265,"x":1562},"b2":{"y":1265,"x":1600.5}},"214":{"from_node_id":"1576667","to_node_id":"1577005","b1":{"y":1265,"x":1562.3991758303962},"b2":{"y":1265,"x":1600.6197527491188}},"215":{"from_node_id":"1577004","to_node_id":"1576668","b1":{"y":1265,"x":1673.3802472508812},"b2":{"y":1265,"x":1711.6008241696038}},"216":{"from_node_id":"1577004","to_node_id":"1576490","b1":{"y":1265,"x":1682.5},"b2":{"y":1265,"x":1742}}}},"1576769":{"name":"glyceraldehyde-3-phosphate dehydrogenase","bigg_id":"GAPD","reversibility":true,"label_x":1065,"label_y":2385,"gene_reaction_rule":"b1779","genes":[{"bigg_id":"b1779","name":"gapA"}],"metabolites":[{"coefficient":1,"bigg_id":"nadh_c"},{"coefficient":1,"bigg_id":"13dpg_c"},{"coefficient":-1,"bigg_id":"pi_c"},{"coefficient":1,"bigg_id":"h_c"},{"coefficient":-1,"bigg_id":"nad_c"},{"coefficient":-1,"bigg_id":"g3p_c"}],"segments":{"217":{"from_node_id":"1577006","to_node_id":"1577008","b1":null,"b2":null},"218":{"from_node_id":"1577008","to_node_id":"1577007","b1":null,"b2":null},"219":{"from_node_id":"1576575","to_node_id":"1577006","b1":{"y":2270,"x":1055},"b2":{"y":2322.5,"x":1055}},"220":{"from_node_id":"1576669","to_node_id":"1577006","b1":{"y":2284.7920271060384,"x":1055},"b2":{"y":2326.9376081318114,"x":1055}},"221":{"from_node_id":"1576670","to_node_id":"1577006","b1":{"y":2297.5658350974745,"x":1055},"b2":{"y":2330.769750529242,"x":1055}},"222":{"from_node_id":"1577007","to_node_id":"1576487","b1":{"y":2454.5,"x":1055},"b2":{"y":2500,"x":1055}},"223":{"from_node_id":"1577007","to_node_id":"1576671","b1":{"y":2453.0623918681886,"x":1055},"b2":{"y":2495.2079728939616,"x":1055}},"224":{"from_node_id":"1577007","to_node_id":"1576672","b1":{"y":2449.230249470758,"x":1055},"b2":{"y":2482.4341649025255,"x":1055}}}}},"nodes":{"1576485":{"node_type":"metabolite","x":1145,"y":2805,"bigg_id":"atp_c","name":"ATP","label_x":1165,"label_y":2805,"node_is_primary":false},"1576486":{"node_type":"metabolite","x":1055,"y":2875,"bigg_id":"3pg_c","name":"3-Phospho-D-glycerate","label_x":1085,"label_y":2875,"node_is_primary":true},"1576487":{"node_type":"metabolite","x":1055,"y":2565,"bigg_id":"13dpg_c","name":"3-Phospho-D-glyceroyl-phosphate","label_x":1085,"label_y":2565,"node_is_primary":true},"1576488":{"node_type":"metabolite","x":1145,"y":2635,"bigg_id":"adp_c","name":"ADP","label_x":1165,"label_y":2635,"node_is_primary":false},"1576489":{"node_type":"metabolite","x":1907,"y":1165,"bigg_id":"nadp_c","name":"Nicotinamide-adenine-dinucleotide-phosphate","label_x":1907,"label_y":1145,"node_is_primary":false},"1576490":{"node_type":"metabolite","x":1827,"y":1265,"bigg_id":"6pgc_c","name":"6-Phospho-D-gluconate","label_x":1800.0250244140625,"label_y":1235,"node_is_primary":true},"1576491":{"node_type":"metabolite","x":2007,"y":1165,"bigg_id":"co2_c","name":"CO2","label_x":2007,"label_y":1145,"node_is_primary":false},"1576492":{"node_type":"metabolite","x":2057,"y":1165,"bigg_id":"nadph_c","name":"Nicotinamide-adenine-dinucleotide-phosphate-reduced","label_x":2080,"label_y":1140,"node_is_primary":false},"1576493":{"node_type":"metabolite","x":2155,"y":1265,"bigg_id":"ru5p__D_c","name":"D-Ribulose-5-phosphate","label_x":2155,"label_y":1235,"node_is_primary":true},"1576524":{"node_type":"metabolite","x":1055,"y":1265,"bigg_id":"g6p_c","name":"D-Glucose-6-phosphate","label_x":1075,"label_y":1245,"node_is_primary":true},"1576525":{"node_type":"metabolite","x":1055,"y":1545,"bigg_id":"f6p_c","name":"D-Fructose-6-phosphate","label_x":1075,"label_y":1525,"node_is_primary":true},"1576528":{"node_type":"metabolite","x":765,"y":1855,"bigg_id":"h2o_c","name":"H2O","label_x":672.9427490234375,"label_y":1861.3470458984375,"node_is_primary":false},"1576529":{"node_type":"metabolite","x":1055,"y":1925,"bigg_id":"fdp_c","name":"D-Fructose-1-6-bisphosphate","label_x":1096.404296875,"label_y":1928.173583984375,"node_is_primary":true},"1576530":{"node_type":"metabolite","x":755,"y":1565,"bigg_id":"pi_c","name":"Phosphate","label_x":686.744140625,"label_y":1563.4132080078125,"node_is_primary":false},"1576545":{"node_type":"metabolite","x":2358.984130859375,"y":1865,"bigg_id":"g3p_c","name":"Glyceraldehyde-3-phosphate","label_x":2375.091552734375,"label_y":1898.4132080078125,"node_is_primary":true},"1576546":{"node_type":"metabolite","x":1983.082275390625,"y":1865,"bigg_id":"s7p_c","name":"Sedoheptulose-7-phosphate","label_x":1955.8675537109375,"label_y":1814.314697265625,"node_is_primary":true},"1576547":{"node_type":"metabolite","x":1945,"y":2190,"bigg_id":"e4p_c","name":"D-Erythrose-4-phosphate","label_x":1922.7852783203125,"label_y":2242.214599609375,"node_is_primary":true},"1576548":{"node_type":"metabolite","x":2362.636962890625,"y":2186.826416015625,"bigg_id":"f6p_c","name":"D-Fructose-6-phosphate","label_x":2367.636962890625,"label_y":2216.826416015625,"node_is_primary":true},"1576558":{"node_type":"metabolite","x":1945,"y":1555,"bigg_id":"xu5p__D_c","name":"D-Xylulose-5-phosphate","label_x":1944.76025390625,"label_y":1599.5205078125,"node_is_primary":true},"1576572":{"node_type":"metabolite","x":1145,"y":1645,"bigg_id":"atp_c","name":"ATP","label_x":1165,"label_y":1645,"node_is_primary":false},"1576573":{"node_type":"metabolite","x":1145,"y":1805,"bigg_id":"adp_c","name":"ADP","label_x":1165,"label_y":1805,"node_is_primary":false},"1576574":{"node_type":"metabolite","x":1145,"y":1855,"bigg_id":"h_c","name":"H","label_x":1165,"label_y":1855,"node_is_primary":false},"1576575":{"node_type":"metabolite","x":1055,"y":2195,"bigg_id":"g3p_c","name":"Glyceraldehyde-3-phosphate","label_x":1085,"label_y":2195,"node_is_primary":true},"1576601":{"node_type":"metabolite","x":855,"y":2195,"bigg_id":"dhap_c","name":"Dihydroxyacetone-phosphate","label_x":739.3148193359375,"label_y":2179.132568359375,"node_is_primary":true},"1576605":{"node_type":"metabolite","x":2419,"y":1555,"bigg_id":"r5p_c","name":"alpha-D-Ribose-5-phosphate","label_x":2418.413330078125,"label_y":1601.1072998046875,"node_is_primary":true},"1576623":{"node_type":"metabolite","x":1257,"y":1160,"bigg_id":"nadp_c","name":"Nicotinamide-adenine-dinucleotide-phosphate","label_x":1257,"label_y":1140,"node_is_primary":false},"1576624":{"node_type":"metabolite","x":1407,"y":1160,"bigg_id":"nadph_c","name":"Nicotinamide-adenine-dinucleotide-phosphate-reduced","label_x":1430,"label_y":1140,"node_is_primary":false},"1576625":{"node_type":"metabolite","x":1357,"y":1160,"bigg_id":"h_c","name":"H","label_x":1357,"label_y":1140,"node_is_primary":false},"1576626":{"node_type":"metabolite","x":1507,"y":1265,"bigg_id":"6pgl_c","name":"6-phospho-D-glucono-1-5-lactone","label_x":1507,"label_y":1235,"node_is_primary":true},"1576647":{"node_type":"metabolite","x":1055.066162109375,"y":705,"bigg_id":"glc__D_e","name":"D-Glucose","label_x":1085.066162109375,"label_y":705,"node_is_primary":true},"1576662":{"node_type":"metabolite","x":957.694091796875,"y":974.4060668945312,"bigg_id":"pep_c","name":"Phosphoenolpyruvate","label_x":877.8765258789062,"label_y":976.9517211914062,"node_is_primary":false},"1576663":{"node_type":"metabolite","x":1161.3470458984375,"y":972.8192138671875,"bigg_id":"pyr_c","name":"Pyruvate","label_x":1193.082275390625,"label_y":986.47216796875,"node_is_primary":false},"1576667":{"node_type":"metabolite","x":1587,"y":1160,"bigg_id":"h2o_c","name":"H2O","label_x":1587,"label_y":1140,"node_is_primary":false},"1576668":{"node_type":"metabolite","x":1687,"y":1160,"bigg_id":"h_c","name":"H","label_x":1687,"label_y":1140,"node_is_primary":false},"1576669":{"node_type":"metabolite","x":1145,"y":2265,"bigg_id":"nad_c","name":"Nicotinamide-adenine-dinucleotide","label_x":1165,"label_y":2265,"node_is_primary":false},"1576670":{"node_type":"metabolite","x":1145,"y":2315,"bigg_id":"pi_c","name":"Phosphate","label_x":1165,"label_y":2315,"node_is_primary":false},"1576671":{"node_type":"metabolite","x":1145,"y":2515,"bigg_id":"nadh_c","name":"Nicotinamide-adenine-dinucleotide-reduced","label_x":1165,"label_y":2515,"node_is_primary":false},"1576672":{"node_type":"metabolite","x":1145,"y":2465,"bigg_id":"h_c","name":"H","label_x":1169,"label_y":2465,"node_is_primary":false},"1576834":{"node_type":"multimarker","x":1055,"y":2665},"1576835":{"node_type":"multimarker","x":1055,"y":2775},"1576836":{"node_type":"midmarker","x":1055,"y":2725},"1576837":{"node_type":"midmarker","x":1957,"y":1265},"1576838":{"node_type":"multimarker","x":1937,"y":1265},"1576839":{"node_type":"multimarker","x":1977,"y":1265},"1576857":{"node_type":"midmarker","x":1055,"y":1395},"1576859":{"node_type":"midmarker","x":835,"y":1715},"1576860":{"node_type":"multimarker","x":835,"y":1665},"1576861":{"node_type":"multimarker","x":835,"y":1765},"1576872":{"node_type":"midmarker","x":2178,"y":1995},"1576873":{"node_type":"multimarker","x":2175,"y":1955},"1576874":{"node_type":"multimarker","x":2178,"y":2035},"1576885":{"node_type":"midmarker","x":2045,"y":1415},"1576891":{"node_type":"midmarker","x":1055,"y":1735},"1576892":{"node_type":"multimarker","x":1055,"y":1775},"1576893":{"node_type":"multimarker","x":1055,"y":1690},"1576896":{"node_type":"midmarker","x":1525,"y":1735},"1576897":{"node_type":"multimarker","x":1695,"y":1735},"1576898":{"node_type":"multimarker","x":1405,"y":1735},"1576925":{"node_type":"multimarker","x":1055,"y":2045},"1576926":{"node_type":"midmarker","x":1055,"y":1995},"1576927":{"node_type":"midmarker","x":955,"y":2195},"1576931":{"node_type":"midmarker","x":2305,"y":1425},"1576944":{"node_type":"multimarker","x":1327,"y":1265},"1576945":{"node_type":"midmarker","x":1307,"y":1265},"1576946":{"node_type":"multimarker","x":1287,"y":1265},"1576964":{"node_type":"multimarker","x":2175,"y":1645},"1576965":{"node_type":"midmarker","x":2175,"y":1695},"1576966":{"node_type":"multimarker","x":2175,"y":1735},"1576974":{"node_type":"midmarker","x":1056.6529541015625,"y":543.4132690429688},"1576978":{"node_type":"midmarker","x":1055,"y":2995},"1576997":{"node_type":"midmarker","x":1056.5865478515625,"y":1008.8675537109375},"1576998":{"node_type":"multimarker","x":1057,"y":976.1735229492188},"1576999":{"node_type":"multimarker","x":1056.5867919921875,"y":1041.710205078125},"1577003":{"node_type":"midmarker","x":1637,"y":1265},"1577004":{"node_type":"multimarker","x":1657,"y":1265},"1577005":{"node_type":"multimarker","x":1617,"y":1265},"1577006":{"node_type":"multimarker","x":1055,"y":2345},"1577007":{"node_type":"multimarker","x":1055,"y":2435},"1577008":{"node_type":"midmarker","x":1055,"y":2395}},"text_labels":{"1":{"text":"TEST","x":1431.12646484375,"y":2509.4140625,"text_label_id":"1"}},"canvas":{"x":522.1247779846192,"y":314.36893920898433,"width":2269.555348968506,"height":2815.9292053222653}}];
}









