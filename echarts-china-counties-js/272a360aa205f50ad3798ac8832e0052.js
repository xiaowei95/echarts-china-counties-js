(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('方城县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411322","properties":{"name":"方城县","cp":[113.012494,33.254391],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@CAAAE@E@A@AACAA@AA@@@CA@AA@ACAA@AA@@AA@@A@@B@BABA@@@@AA@@AA@@@@@A@A@@BA@@@A@@@@@@C@A@@@A@AB@@CAG@@@@@A@I@A@@@AHB@B@FB@BE@@BD@@@B@J@@@@F@@@@EBE@A@CBCBAB@H@@@@C@@DCBA@CB@BBB@@A@@@@@ACA@@@C@@@@@@AC@GB@@@B@@G@@@@@AD@BC@A@CAE@C@AA@@@A@@AA@@@@@AAE@A@@EBA@@@@A@@CC@@@AABA@@AA@A@AAA@@A@@@@@A@A@@@@A@CAC@A@AA@@@A@@A@A@C@@@ACA@@@E@A@@@@D@BCBA@A@BDC@@BCBC@A@AACBA@@@A@C@GD@B@@A@A@@@@AA@@B@@A@AA@@A@CAE@A@@@I@A@ABABA@A@AAA@A@@@A@A@BBA@EBC@@@@AAAM@@B@@AD@@A@@@A@@A@B@BB@@BAB@@@@AAA@A@@BA@A@C@@@AA@@@@ABA@@AA@@@A@A@A@@@@@AC@@@A@@@@@@@A@@@AAA@@DC@@@@CAGCECSIA@CBAB@@@B@@@@GDEBABA@CBA@CBABCB@@A@AA@@CBE@ABIBCCAA@@AA@A@@@BC@@BAB@BABCDC@BBAB@@AB@BAB@@@BBB@@AB@@FD@@@@@@CDA@DD@BBBBBBBBDA@CBCBABA@@@AA@AA@@@@@A@A@@@@@AACE@@A@CDGBAB@BA@ABCBABCDC@@@C@@@CDA@@@A@CA@A@@@AD@B@@@BA@@AA@A@@@AD@@@@A@@@ACAAA@@AA@CA@@@E@CB@@A@BB@BA@@@A@AAABEBA@@B@@AB@@A@@A@@@@A@C@@BA@@@AA@@@@AA@@GBGBA@@B@@EBA@@@@B@@@@@@@D@@A@@B@@@B@@BB@@BABDABBBDDDB@BBLE@@@@B@@@B@@@BCB@@@@AB@@AB@@AB@@A@@@ACAAA@@AAAAC@@AA@C@@A@E@ABCFCDABCDAB@B@B@@@BADADCD@B@B@@@D@@@BDDBDDFDDBBBBBBBB@@@@ADAD@B@B@FAF@D@B@BB@BDDDBDFDBBDBB@D@DBBBBBBDB@@BBBFFBD@@AJ@HAD@B@HBD@B@DADAH@DABAB@HA@ABADEDGF@@@B@B@BHDDFDDDBJA@B@DJ@E@BLDAFFJFDABBDHCD@HG@CEGACF@AKAAHA@JPBL@BBJACECCDDBDABH@JI@ADA@CEA@ABEBA@BB@B@@BB@BBBFHAB@BBDH@B@@@BB@BB@@BBD@BB@BC@AB@@BBBBBBBDBBB@B@BBBBFBBB@@@DABAD@B@@@DADABAB@@@B@DBB@CJBBDBH@@IDCAA@ADBBBDDBNHCDADEDBBA@@@ABA@@AC@@EA@C@CAAFABC@@FB@@BB@BBBAB@BBD@B@@AF@@FHBDAB@@@B@BFF@BDDBDBB@@DDBBD@@BFF@@@B@D@@BBB@BD@@D@@BB@@@B@BB@B@B@B@@@D@B@BB@@DBDAB@D@@@BBB@@BA@@@@B@B@B@B@@@B@@BBB@@HBB@B@BA@@BBB@@ABA@@B@B@B@B@D@@@DBDFBFBBD@F@BBFBB@FF@B@@AA@@A@@B@@@@@A@@C@@@A@@B@@@BDBB@@@B@@AB@@@B@@BBDBB@@CFA@BB@@BB@@@BA@AB@BABABBBDDBBB@BD@@BB@BF@B@BBDF@@@B@DD@B@BB@B@BFB@@B@FDGB@@@B@B@@@BBDB@ADA@@BBBB@@B@D@B@BB@BB@@B@B@@@@B@@AB@B@@@B@BBDBBDB@@@B@@@B@@@BBBB@@@BBB@B@B@BBDB@@@@D@B@@D@B@@BBBBDDDDFDDDDDD@BBBB@@BBBD@@AB@BCBA@E@ADA@ABC@AF@BAB@B@@HB@@CBBB@BBBBB@DBD@B@B@@DDBB@DBBB@DBD@B@BBFHBB@B@@@BDDAB@B@D@BAB@FB@AD@B@B@B@@FD@JDDEHA@A@@D@@D@@B@F@BB@@@BBADABBDBHBD@@AD@@@@@B@BBB@@EFABA@@B@B@BBB@@@BB@@B@BB@@BF@BB@@D@B@DBB@DBBB@@@B@B@@B@@@B@@@DA@AB@B@B@@@BAB@BAB@B@BBD@D@D@B@B@@@B@BBBBBBBBDF@AB@D@FAFCB@BCB@BA@AB@BA@@@@BBB@@@B@DA@@B@@@F@DAB@F@B@DBB@D@DBD@B@B@@@D@B@D@B@@@@@@AAA@A@@@A@@BCD@@AB@@@@A@A@AB@@@AA@AB@BC@@@A@A@ABABAB@@@B@F@@@@@B@@A@@BABADAFCBAB@BADBB@DDB@BBB@@@B@@ADC@@@ABC@@@@B@B@BAB@BAB@@@D@B@@@@A@ABC@A@A@@AA@@BAD@@@B@@AB@DA@@@@B@BB@@@@@B@@B@B@BAB@B@B@B@B@B@BB@@BA@@B@@@BCDA@AB@@B@BB@@A@AF@FAD@B@@ABAD@@@@CB@@@B@BA@@@C@@BA@A@ACE@@@A@AFCBA@@DBB@F@B@@@@@@AB@@@@A@A@A@@@A@@@C@@@@@C@@@AB@@@B@B@@@BAB@FAB@BA@@@@@A@A@A@AAA@@@CBABA@CAA@E@CAABA@CBA@ABC@@BA@AA@@AAA@C@@BA@A@@AA@A@@@AB@B@@A@@AA@@@A@@BC@A@A@@BA@@BABAB@BA@AAA@@@A@@@CAA@AA@@@@@ABA@AACA@AC@CCAA@@@AAE@E@AAA@A@@@AA@@A@@@@A@B@@A@@@ABA@@@E@A@C@CBABA@A@C@C@C@A@@BAB@@ADCB@BA@@@@B@BB@@FDDBBBFBBBD@J@DBBBH@BBD@B@B@B@FAB@D@D@@@F@B@@@BAD@BAD@D@BAB@DBB@D@B@B@DAFC@@B@@@AF@@BB@ADA@@BABADABAF@@@DA@@BA@@@A@C@E@EBADEB@@@B@D@B@BCB@DA@@BBBB@@B@B@BB@@BB@B@@@@D@B@B@@@DD@@B@B@@@@@@BBBBB@@B@B@B@DA@@B@B@@@B@BBJ@BBD@BBBBB@@@F@HAB@DAB@DA@@DAB@DA@AB@@A@@DCDCBA@A@A@ABA@AFEDAD@DCB@@A@CBA@C@@@A@@@CFCDA@@B@@@B@@A@CDAB@AAB@@@@AB@@A@A@@B@@DBA@BBA@@@@BAB@B@BA@@@BB@@@B@@AA@@@B@B@@BBA@@@EBA@@@AB@ACB@@C@@CBA@@@@@ACC@AA@@B@@A@@@A@@AG@@B@@AB@@@BDBA@CBA@@A@BAA@@@@@@AB@CCB@@@@@@@DA@ADA@CB@B@@@B@B@BDDA@@B@@BB@@@BA@@BH@@DA@AB@BAAAD@DAB@B@BBD@@@B@B@BAB@@@@AD@@ABA@@B@@AB@@A@@BA@@BB@@@@B@@AAA@AB@@@B@BB@@@@BA@@BABAD@@@BA@@B@@A@C@A@@BA@@@A@@B@BBB@B@@BBAH@D@ADB@J@D@D@FADABABABA@EB@@AD@@@F@F@BBB@DBBBB@B@BAB@NB@@@BAB@@B@DD@@FA@@@@@D@@@BH@BBDA@@DAFCBABA@A@@B@@@B@BB@@B@D@D@DAB@@@@A@AB@D@D@FAB@@A@AB@BB@BHAB@@AB@@@BBB@@@@C@@B@@@@@DDDBB@@ADA@@FEBAJEB@B@B@B@BBBBD@B@@@@@BA@@@A@A@A@C@@@AA@CA@@A@@BBD@@@BA@A@@@A@@@@A@A@CAA@@@CBA@@B@@@B@@@B@B@B@BCHF@@@A@@BA@A@@AEAA@@A@EAA@@@AA@@AE@A@AB@@@B@DA@@B@BCBA@@@A@@A@@A@@@A@A@AA@@@A@C@A@A@A@A@CAAAAA@@A@E@A@C@@@@AACAA@A@@BA@A@@@ADA@@@@AC@@BA@@BA@@@E@@BAB@@ABA@A@C@A@AA@@AB@@@BBB@@@BABCBA@E@@BA@@@@B@@@BF@@@@FC@AB@@A@CBA@AFC@A@A@CBA@C@@AACAA@C@A@@@@@@CBA@@@AA@@A@A@A@AB@@ABC@CBAB@@@B@@@@@@AD@@@C@@A@AA@@@A@@A@@@@@A@@A@@A@A@@BBB@@AB@@@C@@AD@AAC@B@B@@@AC@C@@A@@@C@@@A@@DAA@BC@A@@@@@A@@@@AABA@@@A@@A@@@@@AA@A@@@@@@A@A@@@@B@@@ACA@B@@@AB@@A@@AA@B@@AA@@@AA@@BA@C@@@A@@A@A@@@@A@@@@@A@@@AB@@@BB@@B@@@@@@AB@@@@@AA@@C@@AA@@@@@@AAA@A@@B@AA@@@@@@@A@@@@@A@A@@AABA@@@A@@@@@@@A@A@A@@@C@@B@@ABA@@@@@@@AA@@@A@@@@@@AA@@AAA@A@@AA@A@A@AA@@@@A@@@@@A@@@@A@@@@A@@A@@@@@ABAB@@A@@@CAA@@@@@@BA@@@@A@@@@@@@@A@BD@@A@@@C@@@CA@@@AB@@@B@@A@@@@@AB@@A@@BA@@D@B@@@B@@AA@@AB@@@B@@AB@@@BA@@DBB@B@@@B@@AB@BB@@DA@@@@AEB@ACA@@A@CB@@CB@@A@A@@@@B@BA@@@@@@A@A@@A@@BA@@@AA@@@@A@A@@@@@A@@@@@@A@@@@AA@@@@@@@@@@A@@AAA@B@@A@@@A@@B@@A@@@A@@@@BA@@@@@@BAB@@@BA@A@A@@@@@@AA@@AA@@@@@A@@AAA@@ADCBA@@ACAEAC@@B@@A@@@@DC@@B@BA@A@@AAAB@AA@@AB@@A@GCCC@CAAAA@A@@@@A@A@CCC@@AA@@@@@ABC@AA@AAA@AAAAC@@@@A@@@A@@AAAAECCAAACAAA@AA@A@A@A@AA@@@@AB@@A@CAA@A@@@EAA@CAA@@ACAAAC@E@@ACAEA@AC@AAA@ABABA@A@@AC@@@@@A@@AA@A@@@A@ABAD@@@@@A@@AAA@A@@AC@A@@@@@@D@@@@@BBBBB@@AB@@ABA@@@A@@@EA@@@@A@A@AAA@@BA@@@A@@D@@ABAB@@A@AABA@@AA@ACC@@A@AB@A@@@@AC@@@@AB@BA@E@@@@AA@B@@A@A@@A@@@AAC@E@AAC@@@A@A@@BA@@@A@E@@@@BAB@@@@C@@@CB@@ACA@A@C@CAA@@@@E@EA@@@ABA@A@C@IDC@AAEE@@AAAC@@AA@@ABC@A@@@AAA@CA@@@A@@AA@CAC@@@@C@A@@@@@A@A@@BABEBA@@@AB@@G@CDGD@@@B@BADABAF@@@BBBBB@@BB@DA@@B@BA@@@EBCBA@@@@F@@BF@BDF@@BB@@@@@BEBA@ABAB@@@F@B@@BL@F@@@BCF@FA@AD@@EBADAB@B@@BB@DDD@@@@AC@CAAB@BAB@BA@A@BB@BFB@@B@D@DAB@DABABCDABABA@@@@BABABABAB@@A@EB@@ABE@C@@@@@CB@@E@A@@@@A@@B@@@A@@@@@@@@A@@@@@@ABA@@@@@@@@AB@@A@@CB@@@@@@A@A@@@@@BA@@A@A@A@@@ACA@@@@B@@@BAB@@ABCBAB@@MCAACCI@A@CAA@A@A@IC@AAA@AIGEE@@@@ABAA@@@A@@@BA@@@@CA@@@@BA@GGACA@@@G@C@@B@@A@A@@@A@@BAB@@@@@A@@A@CBBB@BA@ABA@@A@@BC@CE@@AB@B@B@FABBBBBA@@@K@A@@@A@@DA@@@A@@CE@A@@A@@@@CC@@A@@A@@@@BA@@CG@@@@@@@G@@ABA@A@A@@@@A@@@E@CBA@CBABGF@@@BADBB@B@B@@@@ABEF@B@@AB@B@BCD@BA@AAA@BDA@A@@AC@@B@@CB@@AAC@@@ABC@@D@@FB@@@@@D@@GH@@B@BD@B@@@@CB@@BBABEFED@@AAAACCA@A@A@ACAAA@@@@AA@AA@@A@A@@CAA@AAACAGC@@@AA@@BCBKD@DI@@@@CA@@@@DA@@@@C@@A@@@@FA@@@@C@@A@A@@@@B@B@@@@A@@@A@@@AA@A@@@AAA@@@A@@@A@A@C@@BA@@@AAA@A@A@@AC@CAE@@C@GB@@A@BDA@BF@BC@CBA@A@A@C@A@E@BFBDAF@@@BEBC@A@A@@@A@ECICEAAA@@E@CA@@@@AA@A"],"encodeOffsets":[[115668,33924]]}}],"UTF8Encoding":true});}));