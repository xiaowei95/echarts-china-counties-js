(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('水磨沟区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"650105","properties":{"name":"水磨沟区","cp":[87.642481,43.832459],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@AA@@@@@@AA@@@@AA@@AA@@AA@@@@AA@@@@AA@@A@@@@@A@@AA@@@A@@@A@@AA@@@@@A@@BA@@@A@A@A@@B@@@@@B@@@@A@@B@@@@@B@@@@@@@B@@A@@@ABABABAB@D@@@@BB@@D@@@B@@@@@@BAB@B@@@B@@@@A@A@A@@@ABBB@@@B@B@BAB@B@B@B@@@B@@BB@BB@@B@BA@@@@B@@@@A@@B@@@B@@@BA@@B@@@BA@@@@@@B@@@@A@@@@B@@@@A@@B@@@B@@@@A@@@AB@@@@AB@@AB@@A@@BA@AAA@@@A@@@A@@@A@@BA@AB@B@@@BA@BB@B@B@@ABAB@@AB@B@BABABABABAB@@@@A@A@@@@@E@A@@AA@ABC@A@@@A@@@@@AA@@AA@@AAGAAA@@A@@C@@@@C@A@@@AA@@@@A@@@@@CC@@A@@@AAA@A@A@A@@@A@A@A@AAA@@@@@C@@@AA@@@@@@@@@@A@@@@@@@G@@@AAA@@@@@@@CAA@@@@@A@@@@@@AA@@@C@@@A@@@@@CC@@A@A@A@@@@@@@@@@@@@A@@@@@A@@A@@@@A@A@@@@@A@@@@@@@CA@@@@@@@@@@@@A@@@@@A@@@@@@@AB@@AB@@ABA@@B@@A@@B@@@BA@@B@B@@AB@B@B@@@B@B@@BH@@@H@B@@@B@@@B@B@B@B@B@@@B@BBB@D@B@B@D@B@B@B@@@B@@@@@@@D@DBB@B@@@B@@@@@B@BA@@@@@@B@BA@@B@B@@@@@B@@@B@@A@@D@B@DBD@@@B@B@B@@@@@B@@@@@@@B@@@@@B@@@@@B@B@@@BBBJ@@@@@D@L@F@@@@@@B@@@@@B@@@@@@@BA@@@@@@@@B@@@@@@BB@@B@@@BB@@@@BB@@@@BAL@BBB@@B@@BBB@B@B@@@@@@@@B@@@@@@@@@B@@BBBBBBBBB@@BB@@B@BBB@@@BB@@B@@@@@@@BB@@@@@@B@@@@@@@B@@@@ABB@@B@@@@@@@@@B@B@@B@@@@@B@@@B@@@B@@@@@@@@@@C@@A@B@@@B@B@@AB@@@@@@@B@@@@@@@BB@@@@B@B@@@B@@@@@@@@@@A@@@@@@@@@@@@BA@@@@@@@@@@@B@@@@@@B@@@B@@@@@@@B@@@@@@@@@@@@@@@B@@@B@B@@@@@B@@@@@@@@A@@@@BA@@@@@@@@@B@@@@@BB@@@@@@@A@BB@@@@B@@@@@BB@@@B@@@@@@@@B@@@B@@@B@@@@@@BB@B@@@@@@B@@@@BB@@@@@B@@A@@@B@@B@@@@@@A@@B@@@A@@A@@@@@@B@@@B@@@@@@@B@@@@@@B@@@@@@B@@@@B@@@@@@@@@BA@@@@BB@@@@B@@@@@BB@@@@B@@@B@@@B@@@@@@@B@@@@A@@@@@@B@@B@@@@B@@@@@B@@@B@@B@@@@B@@@B@@@@B@@BB@@@@@@B@@@@@B@@@@@@BB@@@@@BB@@BB@@@@@@@@@A@@AA@@@@@@@@@A@@B@@@@A@@B@@A@@B@@@@@@@B@@A@@@A@@B@@@B@@@@@B@@@@A@@@A@@@@@A@@@@@@Z@A@@A@A@ABC@A@@BAKE@AB@@@B@@@@A@@B@@@BC@@@AB@@A@@@@@A@@@@B@@A@@@@@@@AB@@@@@@@@@B@@@@@@@@AB@@A@@@@B@@@@@@@@@@@BB@@B@@@B@@@@@B@@A@@@@@@A@@@@@AAA@AA@@AAA@AAAAA@@AC@@A@@A@AAB@@A@A@@BA@AAC@@@A@A@A@AB@D@@@B@B@B@B@@AFBJMLFJGlDREnY@f@PQFTD@BBJHBJC\\JFBHAB@D@NALMYDCB@HADA@CECBAbabaDETSXIdMVLPGZANGRKxmCAA@A@@@A@@A@@AA@AAA@AAC@A@AAA@AA@@AA@AAA@@AA@@@A@@@A@@@@@A@@@AB@@ABCBCDABC@CBABCBCB@@C@G@GAC@AAA@AACACACACAE@A@CBC@A@A@G@IBIBE@A@A@@B@@A@@@ABCBCFAB@B@B@@BBBB@@@@@@AB@@AB@@@@@BA@@@@@A@A@A@AAA@AA@@C@@@A@@@A@A@@@@@AA@@CAC@CB@@C@ED@@@@@@@B@@AB@@@@@B@@@B@@AB@@@@@@@@@@@@A@@@@B@@A@@@@@@@@B@@@@AB@B@@@@A@@@@@@@A@@@@@@AA@@@@@@@A@@@@@@@A@A@@@AB@@A@@@A@@@A@ABA@@@A@@@@@A@A@@@@@AB@@@@A@@@@B@@@@A@@@@A@@@@@@@@@@@@@@A@@@@B@@A@@B@@@@A@A@@@A@A@A@A@A@@@A@@A@@A@@@A@@@@@A@AAA@A@@@@@A@A@@@A@@@@@AB@@@@A@@@@AA@@BA@@@ABA@@@A@@ACA@@AA@@A@@@@@AAA@A@AA@@A@C@E@@@A@E@@@@@A@@B@@A@@B@@@@AB@@AB@@A@@@A@@@@@A@AAA@ECA@AAA@@AA@@@A@@@A@@@AB@@A@@@A@A@@@A@EA@AA@A@EACA@@EAAAAAAAAC@CAA@@@C@A@@@AAAA@A@@@A@AAC@A@A@A@ABCAA@C@A@A@@@C@ABA@@@A@A@@@@A@AB@@AA@@@A@A@@@AB@@@@@@BB@@@B@@@@@BB@@@AB@@@@@BA@@BA@@@A@@BA@@@@BA@A@@@A@A@A@@@A@A@@AA@A@@AA@@AA@@@A@@BA@@@EBCBA@E@@@A@@@A@@@@@A@@AA@@@@@AA@@A@@@A@@@A@@@@AA@@@@@@@A@A@@@A@@@@@@@A@@@@A@@A@@B@@A@@@A@@@@@@B@@B@@@@B@@@@A@@B@@@@A@@@@@AB@@C@@@A@@@E@@@@@"],"encodeOffsets":[[89830,44824]]}}],"UTF8Encoding":true});}));