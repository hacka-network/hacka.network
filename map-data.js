/*
 * map-data.js - generated data for the node map on index.html. Not hand-edited.
 *
 * HACKA_LAND  76x30 equirectangular land mask (Natural Earth 110m, public
 *             domain, Antarctica cropped). One string per row, 1 = land.
 *             Land cells with no neighbour in any of the 8 directions are
 *             cleared: at this resolution a lone island is one stray dot in
 *             open ocean and reads as a rendering fault. Redo that after
 *             regenerating, or Hawaii, Fiji, New Caledonia and Kerguelen
 *             come back.
 * HACKA_TZ    Every IANA time zone -> "lat*10,lon*10,region", derived from
 *             the system zone.tab. Node positions come from the time zone the
 *             API already returns, so a new node appears on the map with no
 *             change to this repo.
 *
 * Region letters: A Asia, E Europe, M Americas, F Africa, O Oceania, N Antarctica.
 * Regenerate when the IANA database ships new zones (rare).
 */
// 76x30 equirectangular land mask (Natural Earth 110m, Antarctica cropped).
const HACKA_LAND = [
  '0000000000011111111111011111111111000000010000000111000011111100000110000000',
  '1001111100111111111111110011111111000000001110000110111111111111111111110011',
  '1111111111111111111110111011111101100000111111111111111111111111111111111111',
  '0001111111111111111111111001110001100001111111111111111111111111111111111111',
  '0001111011111111111101111000000000001101111111111111111111111111111111111000',
  '0001000000111111111111111110000000001111111111111111111111111111111110011000',
  '0000000000011111111111111110000000000111111111111111111111111111111110000000',
  '0000000000011111111111111100000000001111111111111111111111111111111110000000',
  '0000000000011111111111100000000000001111111111111111111111111111110100000000',
  '0000000000001111111111000000000000001111110111111111111111111111111100000000',
  '0000000000000111111110000000000000001111111111111111111111111111010000000000',
  '0000000000000011110011000000000000011111111111111111111111111111000000000000',
  '0000000000000011110111100000000000111111111111111110111111111111000000000000',
  '0000000000000000111100110000000000111111111111111110011101111101000000000000',
  '0000000000000000001110110000000000111111111111111000011000111001100000000000',
  '0000000000000000000011111100000000011111111111111000001100111011100000000000',
  '0000000000000000000001111111000000001101111111111000000000110110000000000000',
  '0000000000000000000001111111100000000000111111110000000000010111001000000000',
  '0000000000000000000011111111111000000000111111100000000000011111011111000000',
  '0000000000000000000001111111111000000000111111100000000000001100100111011000',
  '0000000000000000000001111111110000000000111111101000000000000000111010000000',
  '0000000000000000000000111111110000000000111111111000000000000001111110000000',
  '0000000000000000000000011111110000000000011111011000000000000011111111000000',
  '0000000000000000000000011111000000000000011110000000000000000011111111100000',
  '0000000000000000000000011111000000000000011110000000000000000011111111100000',
  '0000000000000000000000111110000000000000001000000000000000000011000111000010',
  '0000000000000000000000111100000000000000000000000000000000000000000011000011',
  '0000000000000000000000111000000000000000000000000000000000000000000010000110',
  '0000000000000000000000110000000000000000000000000000000000000000000000000000',
  '0000000000000000000000110000000000000000000000000000000000000000000000000000'
];
// IANA zone -> "lat*10,lon*10,region". Region letter: A Asia, E Europe,
// M Americas, F Africa, O Oceania, N Antarctica.
const HACKA_TZ = (
  'Africa/Abidjan:53,-40,F;Africa/Accra:56,-2,F;Africa/Addis_Ababa:90,387,F;Africa/Algiers:368,30,F'
  + ';Africa/Asmara:153,389,F;Africa/Bamako:126,-80,F;Africa/Bangui:44,186,F;Africa/Banjul:135,-166,F'
  + ';Africa/Bissau:118,-156,F;Africa/Blantyre:-158,350,F;Africa/Brazzaville:-43,153,F;Africa/Bujumbu'
  + 'ra:-34,294,F;Africa/Cairo:300,312,F;Africa/Casablanca:336,-76,F;Africa/Ceuta:359,-53,F;Africa/Co'
  + 'nakry:95,-137,F;Africa/Dakar:147,-174,F;Africa/Dar_es_Salaam:-68,393,F;Africa/Djibouti:116,432,F'
  + ';Africa/Douala:40,97,F;Africa/El_Aaiun:272,-132,F;Africa/Freetown:85,-132,F;Africa/Gaborone:-246'
  + ',259,F;Africa/Harare:-178,310,F;Africa/Johannesburg:-262,280,F;Africa/Juba:48,316,F;Africa/Kampa'
  + 'la:3,324,F;Africa/Khartoum:156,325,F;Africa/Kigali:-20,301,F;Africa/Kinshasa:-43,153,F;Africa/La'
  + 'gos:64,34,F;Africa/Libreville:4,94,F;Africa/Lome:61,12,F;Africa/Luanda:-88,132,F;Africa/Lubumbas'
  + 'hi:-117,275,F;Africa/Lusaka:-154,283,F;Africa/Malabo:38,88,F;Africa/Maputo:-260,326,F;Africa/Mas'
  + 'eru:-295,275,F;Africa/Mbabane:-263,311,F;Africa/Mogadishu:21,454,F;Africa/Monrovia:63,-108,F;Afr'
  + 'ica/Nairobi:-13,368,F;Africa/Ndjamena:121,150,F;Africa/Niamey:135,21,F;Africa/Nouakchott:181,-16'
  + '0,F;Africa/Ouagadougou:124,-15,F;Africa/Porto-Novo:65,26,F;Africa/Sao_Tome:3,67,F;Africa/Tripoli'
  + ':329,132,F;Africa/Tunis:368,102,F;Africa/Windhoek:-226,171,F;America/Adak:519,-1767,M;America/An'
  + 'chorage:612,-1499,M;America/Anguilla:182,-631,M;America/Antigua:170,-618,M;America/Araguaina:-72'
  + ',-482,M;America/Argentina/Buenos_Aires:-346,-584,M;America/Argentina/Catamarca:-285,-658,M;Ameri'
  + 'ca/Argentina/Cordoba:-314,-642,M;America/Argentina/Jujuy:-242,-653,M;America/Argentina/La_Rioja:'
  + '-294,-668,M;America/Argentina/Mendoza:-329,-688,M;America/Argentina/Rio_Gallegos:-516,-692,M;Ame'
  + 'rica/Argentina/Salta:-248,-654,M;America/Argentina/San_Juan:-315,-685,M;America/Argentina/San_Lu'
  + 'is:-333,-664,M;America/Argentina/Tucuman:-268,-652,M;America/Argentina/Ushuaia:-548,-683,M;Ameri'
  + 'ca/Aruba:125,-700,M;America/Asuncion:-253,-577,M;America/Atikokan:488,-916,M;America/Bahia:-130,'
  + '-385,M;America/Bahia_Banderas:208,-1052,M;America/Barbados:131,-596,M;America/Belem:-14,-485,M;A'
  + 'merica/Belize:175,-882,M;America/Blanc-Sablon:514,-571,M;America/Boa_Vista:28,-607,M;America/Bog'
  + 'ota:46,-741,M;America/Boise:436,-1162,M;America/Cambridge_Bay:691,-1051,M;America/Campo_Grande:-'
  + '204,-546,M;America/Cancun:211,-868,M;America/Caracas:105,-669,M;America/Cayenne:49,-523,M;Americ'
  + 'a/Cayman:193,-814,M;America/Chicago:418,-876,M;America/Chihuahua:286,-1061,M;America/Ciudad_Juar'
  + 'ez:317,-1065,M;America/Costa_Rica:99,-841,M;America/Coyhaique:-456,-721,M;America/Creston:491,-1'
  + '165,M;America/Cuiaba:-156,-561,M;America/Curacao:122,-690,M;America/Danmarkshavn:768,-187,M;Amer'
  + 'ica/Dawson:641,-1394,M;America/Dawson_Creek:558,-1202,M;America/Denver:397,-1050,M;America/Detro'
  + 'it:423,-830,M;America/Dominica:153,-614,M;America/Edmonton:536,-1135,M;America/Eirunepe:-67,-699'
  + ',M;America/El_Salvador:137,-892,M;America/Fort_Nelson:588,-1227,M;America/Fortaleza:-37,-385,M;A'
  + 'merica/Glace_Bay:462,-600,M;America/Goose_Bay:533,-604,M;America/Grand_Turk:215,-711,M;America/G'
  + 'renada:120,-618,M;America/Guadeloupe:162,-615,M;America/Guatemala:146,-905,M;America/Guayaquil:-'
  + '22,-798,M;America/Guyana:68,-582,M;America/Halifax:446,-636,M;America/Havana:231,-824,M;America/'
  + 'Hermosillo:291,-1110,M;America/Indiana/Indianapolis:398,-862,M;America/Indiana/Knox:413,-866,M;A'
  + 'merica/Indiana/Marengo:384,-863,M;America/Indiana/Petersburg:385,-873,M;America/Indiana/Tell_Cit'
  + 'y:380,-868,M;America/Indiana/Vevay:387,-851,M;America/Indiana/Vincennes:387,-875,M;America/India'
  + 'na/Winamac:411,-866,M;America/Inuvik:683,-1337,M;America/Iqaluit:637,-685,M;America/Jamaica:180,'
  + '-768,M;America/Juneau:583,-1344,M;America/Kentucky/Louisville:383,-858,M;America/Kentucky/Montic'
  + 'ello:368,-848,M;America/Kralendijk:122,-683,M;America/La_Paz:-165,-682,M;America/Lima:-120,-770,'
  + 'M;America/Los_Angeles:341,-1182,M;America/Lower_Princes:181,-630,M;America/Maceio:-97,-357,M;Ame'
  + 'rica/Managua:122,-863,M;America/Manaus:-31,-600,M;America/Marigot:181,-631,M;America/Martinique:'
  + '146,-611,M;America/Matamoros:258,-975,M;America/Mazatlan:232,-1064,M;America/Menominee:451,-876,'
  + 'M;America/Merida:210,-896,M;America/Metlakatla:551,-1316,M;America/Mexico_City:194,-992,M;Americ'
  + 'a/Miquelon:470,-563,M;America/Moncton:461,-648,M;America/Monterrey:257,-1003,M;America/Montevide'
  + 'o:-349,-562,M;America/Montserrat:167,-622,M;America/Nassau:251,-774,M;America/New_York:407,-740,'
  + 'M;America/Nome:645,-1654,M;America/Noronha:-38,-324,M;America/North_Dakota/Beulah:473,-1018,M;Am'
  + 'erica/North_Dakota/Center:471,-1013,M;America/North_Dakota/New_Salem:468,-1014,M;America/Nuuk:64'
  + '2,-517,M;America/Ojinaga:296,-1044,M;America/Panama:90,-795,M;America/Paramaribo:58,-552,M;Ameri'
  + 'ca/Phoenix:334,-1121,M;America/Port-au-Prince:185,-723,M;America/Port_of_Spain:106,-615,M;Americ'
  + 'a/Porto_Velho:-88,-639,M;America/Puerto_Rico:185,-661,M;America/Punta_Arenas:-532,-709,M;America'
  + '/Rankin_Inlet:628,-921,M;America/Recife:-80,-349,M;America/Regina:504,-1046,M;America/Resolute:7'
  + '47,-948,M;America/Rio_Branco:-100,-678,M;America/Santarem:-24,-549,M;America/Santiago:-334,-707,'
  + 'M;America/Santo_Domingo:185,-699,M;America/Sao_Paulo:-235,-466,M;America/Scoresbysund:705,-220,M'
  + ';America/Sitka:572,-1353,M;America/St_Barthelemy:179,-628,M;America/St_Johns:476,-527,M;America/'
  + 'St_Kitts:173,-627,M;America/St_Lucia:140,-610,M;America/St_Thomas:184,-649,M;America/St_Vincent:'
  + '132,-612,M;America/Swift_Current:503,-1078,M;America/Tegucigalpa:141,-872,M;America/Thule:766,-6'
  + '88,M;America/Tijuana:325,-1170,M;America/Toronto:436,-794,M;America/Tortola:184,-646,M;America/V'
  + 'ancouver:493,-1231,M;America/Whitehorse:607,-1350,M;America/Winnipeg:499,-972,M;America/Yakutat:'
  + '595,-1397,M;Antarctica/Casey:-663,1105,N;Antarctica/Davis:-686,780,N;Antarctica/DumontDUrville:-'
  + '667,1400,N;Antarctica/Macquarie:-545,1590,N;Antarctica/Mawson:-676,629,N;Antarctica/McMurdo:-778'
  + ',1666,N;Antarctica/Palmer:-648,-641,N;Antarctica/Rothera:-676,-681,N;Antarctica/Syowa:-690,396,N'
  + ';Antarctica/Troll:-720,25,N;Antarctica/Vostok:-784,1069,N;Arctic/Longyearbyen:780,160,E;Asia/Ade'
  + 'n:128,452,A;Asia/Almaty:432,770,A;Asia/Amman:320,359,A;Asia/Anadyr:648,1775,A;Asia/Aqtau:445,503'
  + ',A;Asia/Aqtobe:503,572,A;Asia/Ashgabat:380,584,A;Asia/Atyrau:471,519,A;Asia/Baghdad:334,444,A;As'
  + 'ia/Bahrain:264,506,A;Asia/Baku:404,498,A;Asia/Bangkok:138,1005,A;Asia/Barnaul:534,838,A;Asia/Bei'
  + 'rut:339,355,A;Asia/Bishkek:429,746,A;Asia/Brunei:49,1149,A;Asia/Chita:520,1135,A;Asia/Colombo:69'
  + ',798,A;Asia/Damascus:335,363,A;Asia/Dhaka:237,904,A;Asia/Dili:-86,1256,A;Asia/Dubai:253,553,A;As'
  + 'ia/Dushanbe:386,688,A;Asia/Famagusta:351,340,A;Asia/Gaza:315,345,A;Asia/Hebron:315,351,A;Asia/Ho'
  + '_Chi_Minh:108,1067,A;Asia/Hong_Kong:223,1142,A;Asia/Hovd:480,916,A;Asia/Irkutsk:523,1043,A;Asia/'
  + 'Jakarta:-62,1068,A;Asia/Jayapura:-25,1407,A;Asia/Jerusalem:318,352,A;Asia/Kabul:345,692,A;Asia/K'
  + 'amchatka:530,1586,A;Asia/Karachi:249,670,A;Asia/Kathmandu:277,853,A;Asia/Khandyga:627,1356,A;Asi'
  + 'a/Kolkata:225,884,A;Asia/Krasnoyarsk:560,928,A;Asia/Kuala_Lumpur:32,1017,A;Asia/Kuching:16,1103,'
  + 'A;Asia/Kuwait:293,480,A;Asia/Macau:222,1135,A;Asia/Magadan:596,1508,A;Asia/Makassar:-51,1194,A;A'
  + 'sia/Manila:146,1210,A;Asia/Muscat:236,586,A;Asia/Nicosia:352,334,A;Asia/Novokuznetsk:538,871,A;A'
  + 'sia/Novosibirsk:550,829,A;Asia/Omsk:550,734,A;Asia/Oral:512,514,A;Asia/Phnom_Penh:116,1049,A;Asi'
  + 'a/Pontianak:0,1093,A;Asia/Pyongyang:390,1258,A;Asia/Qatar:253,515,A;Asia/Qostanay:532,636,A;Asia'
  + '/Qyzylorda:448,655,A;Asia/Riyadh:246,467,A;Asia/Sakhalin:470,1427,A;Asia/Samarkand:397,668,A;Asi'
  + 'a/Seoul:376,1270,A;Asia/Shanghai:312,1215,A;Asia/Singapore:13,1038,A;Asia/Srednekolymsk:675,1537'
  + ',A;Asia/Taipei:250,1215,A;Asia/Tashkent:413,693,A;Asia/Tbilisi:417,448,A;Asia/Tehran:357,514,A;A'
  + 'sia/Thimphu:275,896,A;Asia/Tokyo:357,1397,A;Asia/Tomsk:565,850,A;Asia/Ulaanbaatar:479,1069,A;Asi'
  + 'a/Urumqi:438,876,A;Asia/Ust-Nera:646,1432,A;Asia/Vientiane:180,1026,A;Asia/Vladivostok:432,1319,'
  + 'A;Asia/Yakutsk:620,1297,A;Asia/Yangon:168,962,A;Asia/Yekaterinburg:568,606,A;Asia/Yerevan:402,44'
  + '5,A;Atlantic/Azores:377,-257,E;Atlantic/Bermuda:323,-648,M;Atlantic/Canary:281,-154,E;Atlantic/C'
  + 'ape_Verde:149,-235,F;Atlantic/Faroe:620,-68,E;Atlantic/Madeira:326,-169,E;Atlantic/Reykjavik:642'
  + ',-218,E;Atlantic/South_Georgia:-543,-365,M;Atlantic/St_Helena:-159,-57,F;Atlantic/Stanley:-517,-'
  + '578,M;Australia/Adelaide:-349,1386,O;Australia/Brisbane:-275,1530,O;Australia/Broken_Hill:-320,1'
  + '414,O;Australia/Darwin:-125,1308,O;Australia/Eucla:-317,1289,O;Australia/Hobart:-429,1473,O;Aust'
  + 'ralia/Lindeman:-203,1490,O;Australia/Lord_Howe:-316,1591,O;Australia/Melbourne:-378,1450,O;Austr'
  + 'alia/Perth:-320,1158,O;Australia/Sydney:-339,1512,O;Europe/Amsterdam:524,49,E;Europe/Andorra:425'
  + ',15,E;Europe/Astrakhan:464,480,E;Europe/Athens:380,237,E;Europe/Belgrade:448,205,E;Europe/Berlin'
  + ':525,134,E;Europe/Bratislava:482,171,E;Europe/Brussels:508,43,E;Europe/Bucharest:444,261,E;Europ'
  + 'e/Budapest:475,191,E;Europe/Busingen:477,87,E;Europe/Chisinau:470,288,E;Europe/Copenhagen:557,12'
  + '6,E;Europe/Dublin:533,-62,E;Europe/Gibraltar:361,-54,E;Europe/Guernsey:495,-25,E;Europe/Helsinki'
  + ':602,250,E;Europe/Isle_of_Man:542,-45,E;Europe/Istanbul:410,290,E;Europe/Jersey:492,-21,E;Europe'
  + '/Kaliningrad:547,205,E;Europe/Kirov:586,496,E;Europe/Kyiv:504,305,E;Europe/Lisbon:387,-91,E;Euro'
  + 'pe/Ljubljana:460,145,E;Europe/London:515,-1,E;Europe/Luxembourg:496,62,E;Europe/Madrid:404,-37,E'
  + ';Europe/Malta:359,145,E;Europe/Mariehamn:601,200,E;Europe/Minsk:539,276,E;Europe/Monaco:437,74,E'
  + ';Europe/Moscow:558,376,E;Europe/Oslo:599,108,E;Europe/Paris:489,23,E;Europe/Podgorica:424,193,E;'
  + 'Europe/Prague:501,144,E;Europe/Riga:570,241,E;Europe/Rome:419,125,E;Europe/Samara:532,502,E;Euro'
  + 'pe/San_Marino:439,125,E;Europe/Sarajevo:439,184,E;Europe/Saratov:516,460,E;Europe/Simferopol:450'
  + ',341,E;Europe/Skopje:420,214,E;Europe/Sofia:427,233,E;Europe/Stockholm:593,180,E;Europe/Tallinn:'
  + '594,248,E;Europe/Tirane:413,198,E;Europe/Ulyanovsk:543,484,E;Europe/Vaduz:472,95,E;Europe/Vatica'
  + 'n:419,125,E;Europe/Vienna:482,163,E;Europe/Vilnius:547,253,E;Europe/Volgograd:487,444,E;Europe/W'
  + 'arsaw:522,210,E;Europe/Zagreb:458,160,E;Europe/Zurich:474,85,E;Indian/Antananarivo:-189,475,F;In'
  + 'dian/Chagos:-73,724,A;Indian/Christmas:-104,1057,O;Indian/Cocos:-122,969,O;Indian/Comoro:-117,43'
  + '3,F;Indian/Kerguelen:-494,702,N;Indian/Mahe:-47,555,F;Indian/Maldives:42,735,A;Indian/Mauritius:'
  + '-202,575,F;Indian/Mayotte:-128,452,F;Indian/Reunion:-209,555,F;Pacific/Apia:-138,-1717,O;Pacific'
  + '/Auckland:-369,1748,O;Pacific/Bougainville:-62,1556,O;Pacific/Chatham:-440,-1766,O;Pacific/Chuuk'
  + ':74,1518,O;Pacific/Easter:-272,-1094,M;Pacific/Efate:-177,1684,O;Pacific/Fakaofo:-94,-1712,O;Pac'
  + 'ific/Fiji:-181,1784,O;Pacific/Funafuti:-85,1792,O;Pacific/Galapagos:-9,-896,M;Pacific/Gambier:-2'
  + '31,-1350,O;Pacific/Guadalcanal:-95,1602,O;Pacific/Guam:135,1448,O;Pacific/Honolulu:213,-1579,M;P'
  + 'acific/Kanton:-28,-1717,O;Pacific/Kiritimati:19,-1573,O;Pacific/Kosrae:53,1630,O;Pacific/Kwajale'
  + 'in:91,1673,O;Pacific/Majuro:72,1712,O;Pacific/Marquesas:-90,-1395,O;Pacific/Midway:282,-1774,O;P'
  + 'acific/Nauru:-5,1669,O;Pacific/Niue:-190,-1699,O;Pacific/Norfolk:-290,1680,O;Pacific/Noumea:-223'
  + ',1664,O;Pacific/Pago_Pago:-143,-1707,O;Pacific/Palau:73,1345,O;Pacific/Pitcairn:-251,-1301,O;Pac'
  + 'ific/Pohnpei:70,1582,O;Pacific/Port_Moresby:-95,1472,O;Pacific/Rarotonga:-212,-1598,O;Pacific/Sa'
  + 'ipan:152,1458,O;Pacific/Tahiti:-175,-1496,O;Pacific/Tarawa:14,1730,O;Pacific/Tongatapu:-211,-175'
  + '2,O;Pacific/Wake:193,1666,O;Pacific/Wallis:-133,-1762,O'
);
