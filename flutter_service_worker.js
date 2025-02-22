'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f8bfe61d1538c983f3d48c0fe9d56e1b",
"index.html": "e9109e4c2fbd8de76ac7a6341e7677e0",
"/": "e9109e4c2fbd8de76ac7a6341e7677e0",
"main.dart.js": "ec0b41e75daf8bc30d45df23c6a6b084",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90d5a5850138bf3665ea0a24beba1529",
".git/config": "92f692cf869e9bf7c6cbfb9cc8f7282f",
".git/objects/61/9e395e1c92df0c2cbe0e1c2ba0114aade87f7f": "645935ba93424d43a5d59cab4266907c",
".git/objects/0d/ea7e74f55226d498848b3f397ab6bce9245aa8": "0990b4ede85076290cb3bd56195f5a70",
".git/objects/95/34f6c0e08ba86d28246269e17beb67f1a6a8f3": "306d04aa24f09a875a50e9b6b056b4dd",
".git/objects/59/7e8b7121b0a2479eb390d5767ca51a2357d7dc": "bb4b7cb85141e5b990c34159be9b6549",
".git/objects/92/2e9df960c72692343ae2c3f8bbde2cecee721e": "6626264853bc4be3a9a5ed184867db20",
".git/objects/0c/da65e8d20b8918b68f84420c4c65e10f8a0eb7": "ae4ddb292137071e1934108ef6f10b3b",
".git/objects/66/45d6f05c944e83b5a1435358e3c5dccb9c5113": "13db5ad9c9b3059d7aa31d6901dd3350",
".git/objects/3e/61c8a25d4a861a75bec44c1075469fc8abea06": "c10e4a0dfe825e05e64f542614cc2b4a",
".git/objects/50/0eb5e411a727cb9f4fc6015721346af53a3e91": "99ea0a25b8dbd7885fd5cf948a5994ba",
".git/objects/68/40d9a8a170a5a55803489df2bf8d60c2b3750b": "15720a809f4d19554b60c8b7fc6e3aa4",
".git/objects/57/ff79ac068bd47a7cdc106118a22a6aa2b74316": "115552789723de40f7b32a1c5240892f",
".git/objects/57/55fcfb947f1f855278d9b6c0543def612dcd55": "ff734a68beffe9c4ba81249982f37761",
".git/objects/3b/e293b5a7dcddb3738f5dd9a31f8d034f8849c2": "a4bac66a3eaf4340a64e788532e48162",
".git/objects/6f/c3c179c0bbe092a19fa391b3eafb60a70c0bec": "437fc99d1df3167f0a557a2cd92673f3",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/9e/434c95daae71d27b81a0fd9e690fcaaa7c4cfc": "685715e3451084e446e496efa43f4356",
".git/objects/6a/4594fdcaf1fddd481a19f8510e50b9684cdcd7": "996c381d6bfd85905eed4deb124726ca",
".git/objects/32/03c50c043ede3643a9cd0b664cbad8ef5d928d": "e0c828a0b2079b0741618427fcbe026f",
".git/objects/69/354c04b78426336421976eaea6f8b982599766": "3361bb56a6e0c0fdb516c5989282b118",
".git/objects/56/39d7e81f199b43c4fe2f2a12fc4b07fac2992e": "706e40d18135a7c35f0c5b7e67406757",
".git/objects/58/9019db0dbbde42d61f820696dd9284e9cc1ca9": "a7835a4ba43e4ce924854e7f604419e6",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/c0e570ae67f88063454693eb352c8a0adcd358": "bb9bb0630bfa942d9fe88f8b51ae8b42",
".git/objects/05/259d0459f9b8400199a6bf2b2e588fea2b2c6f": "6344061b1fe7d7497705cd6bf5e12b0c",
".git/objects/05/ed28543fdeda51f9351ed8bdef33f8b93ae716": "2d58ec9fafbcb711995f1f12af434efe",
".git/objects/9d/e3090432bb2c4e2c435555496020752a149167": "d5e7ad0079ce545533aa9527ef289d79",
".git/objects/b5/fa9fb360ae8a2af6cfeca0272d1004c602feab": "7729c98c09d311ca3092a76767a4a2ba",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d0/f3908775ba2da624c68f90cc26f1ab8a3e0936": "a426ba3021105f6c94e61eb8c0d503f8",
".git/objects/df/e0b54739484b43244ff8a51600c3e45b3770a2": "6366138bf5dc64c91879bcd5dc1e2d3d",
".git/objects/da/6089d567ad57b01f61b0b3c91c1ee79603da36": "98665a39cb13cdbd4daff2f804d517a3",
".git/objects/b4/22f1829759a1a28c970c573aa588c502529567": "2a9804bcf9db77b6b5f3ebaf876423f0",
".git/objects/a2/d0073b1e0b8b19f3c2b5d48f8c93413e657d35": "76645e10f74f199a2b4a8667074a4ddc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/61d82f0a5d1eab2afe2646f88cb66eb04963c7": "ba1155a0bbbbdc9d2ff56961187b6416",
".git/objects/ae/90899d469e4ba8cf1bc9610a60636721204c10": "325d8e6e5e582f72c19ef8f13ab87263",
".git/objects/d8/a5f74ed879aab64bf464c4614c18f8f55abcd4": "dc03d24160a5e3bd88513c1811b8c133",
".git/objects/ab/37c6dd955eb4390375451efefa736379c3f53b": "0a035c914b60616224c561f8f0fb91b4",
".git/objects/f4/15b17ea34e39d361d33679ec552be93b919e1a": "35ebe1bcbb53b68e48f18d264a35735f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/99aec3c7eeabd3af6b1a3b826e85d4c57894a8": "881bc1bcce46c86009436a44116620df",
".git/objects/c0/fb90b0e379a29a38c72e29a35914a4edd7df5c": "b941c4f44f9cb5fcce7512e87f1d86b4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/f84fbfd33a5647b3d986c1aea8a052be4e135d": "b42fb54229c0153dcb9a45792218f81a",
".git/objects/cf/521f9146fb5e14f3560c8dae7cc26d0c447696": "b02f30ffebfacd472b3b6f0483c1c9d7",
".git/objects/fe/9e7210a00a7276186dadcd7a2278ea8b830b41": "2827e535f3f5ed492277055334ef0b7b",
".git/objects/ed/c82abba87c2845820494e06b0782c6de00325c": "31329e3e54865b9dd8dc65757104e71e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/b6d0bb797f4ec8eb5a3228a4409dd9f427a41b": "0689397984a5917ae25e647f8221bf30",
".git/objects/4b/d2b85af7c87b93f05dd2d03506f8ce62717953": "f55c738366e3152454f56bb874b66631",
".git/objects/4b/63fb95da4003a5410ffb2a398ae96c1b3d0d09": "c1a3ffdbaa370feec762795a5f24cd3f",
".git/objects/7d/e276cf0496b0dc3425b8d1afab3b6f0b98be93": "a47d706bcaa213d9963856b1ad8799c1",
".git/objects/7c/27689a0c53b2356838e61f7011278cbbecb0bc": "3530a561b2b29d4cf4b871c88ec32fb3",
".git/objects/7c/2bbfe3a661baa77bdc00a29f36484d0f44b97b": "5c6b00c1964e531117fd6f1a713d0c1b",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/45/d376435303636b2d9d1002c74423f8a8703a9e": "7431082e4d1675a08dc1fc01534e9dcf",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/04ebdfd44d875c24be9219ed87e7fd66d8d38d": "bd8052c0d197905d4168e0381cfa86a2",
".git/objects/87/ff089a852555cc5a3b99f1c0175c8b7ad4dabd": "074cb45756f7b980c46862bc3973ff17",
".git/objects/1a/68d4a70f481abc28beae65ca30f142225d4262": "b9e6eb38ae39f6a7f608e472a3f7976c",
".git/objects/8a/52b915717193db71409f0acb3fc975f0f32a46": "db496494e7113c0abd5f0feca624d709",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/f462ad2ff14163d28a5dc25516288bcfb64fb0": "049338baa96db79017535ea9fb313d8d",
".git/objects/21/26a7992fccc1dbb79d41c8560fcf3083d3773a": "e6a8b2c809ba66f9c3057225a561773f",
".git/objects/75/546a14dae9cc121bd368eb778d45dd9fbc04ef": "e58efbdaa99ac8516cc07e452ca168f7",
".git/objects/86/c9180efe73efffb9ff59ab5377b5ee37015539": "72601394cb76ba5b68c9c1d18f9ab691",
".git/objects/43/0971dfe3477e86bd8d9910a524a5ec0782338f": "80731f82ed08c2d6b93185996fbb7429",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/ee0d6185d50406e221cbe642ad5fd06c56aa51": "6eab04d95dfbfbb1d3c67165c757cada",
".git/objects/07/7628ac58bd114085a5dc73821df4379c78b979": "cda17c00c2b7569ca736ed300ab87eed",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/38/2fbe2c53a426b0c83e4bbf49e5271e041ea92d": "69eabeb74934c8d4e2840f0cd1cb1368",
".git/objects/38/306d72a69ac3bb8e4e2c03dd9f53a10e2ffa7b": "16f174c6a4a9193a49743c2570fda7b2",
".git/objects/09/16bb4331cfd0d02f952a7fc93b310081e3530d": "65ffc211deb785106549d2c498e518e4",
".git/objects/31/27f964d105c1071a08e338b590a7f7d15291d8": "c9d0289fd09d482488e0a1988a98ece7",
".git/objects/31/3ad4ea2462976078a4ab28270957a72b83ce63": "9cfe328177c02bfc86632cc76c50589c",
".git/objects/91/918743fc1ce2267c5dbd9b0fa7b5e284c3e50b": "cd894c1d49183dddafc23cd684cc3796",
".git/objects/96/478eee7e50fce48e700812d4ba072aea251073": "71213246fc07b8aceb5ee6c633603a51",
".git/objects/53/aff5302267ae5ff9a15b20275ed67aa7dff35f": "842a342ded3943c0dcee28f25d8f4794",
".git/objects/3f/6953c1aeea50e748edfaa7e08be07b51c110c6": "5125cbe4ee3ec38cf4a042575b3fcb4f",
".git/objects/3f/e47864397e06bd30a9e21fc71846c2736e0c84": "0432073998194976feb4fab88e2c1649",
".git/objects/5b/05d353598de439996a111aebd310450b4005c4": "f1428642cddfaf39092712394d06354f",
".git/objects/6d/13b60f0ef4a94bd4a8e1584702a11e741b8ea4": "97cc1b1ca7f9d326d8d992fb444420d8",
".git/objects/06/84dd5dec47bb14ec12164a3207e1f048bafb09": "ccc6e35ac30a63ae5eced2314a1214a6",
".git/objects/6c/ae6c13d36bc7c4f7a0518e55142fb0630c0097": "777db3b9914af63a5e26233bbf672bb0",
".git/objects/99/8b4f496d8c89fbc051d28410f107ffd52b976c": "05071ac3076cd0424a719710fb69a623",
".git/objects/55/bacce79c5e10c2d60f58acf2424a4c9d884288": "f442ec07416e0acd2404bba254369b34",
".git/objects/0f/bd8ef29d955726fa50cfd2516c652d45c48a0e": "4a97281fbd1fb1579e872f1397f5addc",
".git/objects/0a/502c28fd374b5c84bebc1727445088e17f9b8a": "ce30fa5bcec51b5926e876059d2e987c",
".git/objects/d3/5b8645d55675c60ee816e1576c7999816a456b": "200e3dcbc9846b82eddf7670678d09fb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/589b4fdcaf8d49f73b531a1aef847cb11a1334": "0bf3c32f7e25f037b2b37a16839d675c",
".git/objects/b8/b94820a65816a07458bc1c14193ddfc6c9c8e3": "e14c3198f6a97141bdb923ff18e774e6",
".git/objects/dc/a3e899fa8b3e486c92282c1b8c87a2b759a61f": "4fa92dc9972efe3d41b40b1a6b05c990",
".git/objects/a9/9536aae5db30ec113bef7ffe85cda8ed26d150": "b30556ff40e8778a31d6137c417ebe2a",
".git/objects/aa/51c62cf79bdcfc49167aef12e83c2580e44210": "849dd1cae998d9844bb6d0f5ac52d391",
".git/objects/af/cfcaf24edce48ee80dda5976af88351e497d75": "6d518f06f858a46dd83db2852af65207",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e58f53c110eb3881afce6d402178b1e3ef157f": "50369cbaeb0a6de34febe9c35eb94d3a",
".git/objects/de/8d4e799a8c2e35581c765fa5430e0892e18419": "8d7b4ce01a2674567b637c71716c7428",
".git/objects/b0/9bde915f90b7624cf0f8dd4bfd26f916c6bf5e": "c3cb461141779ea79f5612fae8c5b067",
".git/objects/a6/4875282d3fb807d55bf34c1744fdb8a09eadeb": "05453d9299927f91c94c0279758cc647",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/30f209f3b5afa650daf3ee4c14887502a8a671": "bd7a34f69e0417596d2b1bb1f1b16387",
".git/objects/c4/79210df58e5bbb6aa4d5dcbb01f0a0207e815d": "dbb26be2a60514b0a55ed50360666886",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e6/26563bcff67200450b4a0982bfe20657e80be9": "0bf9bba250ae4a18bf991c6dc48d3b29",
".git/objects/f0/d4a6cc628156cdbd258667c745ca2be0cf2573": "ec304b6820f34ff8eefb53f98bed06f6",
".git/objects/f7/e673c00317b03681ebef1d6eff84f7c2c51cdf": "45dfb1dbedf33daf68207857780c011a",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/68f92afebffd643fc7bdec9b6e68f345d460df": "b91ead2932466b1b4c25aa721c3e2b50",
".git/objects/e8/441496a182b83c0c0b2c35c71aaa7c93a9d208": "1db5ec46c6fde8c3651cc997ceb41dda",
".git/objects/ff/0815cd8c64b0a245ec780eb8d21867509155b5": "ceece04122f357c0586f02c120ac8ba5",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e7/862938480947afa29f68d38c83dd98ca548531": "5bcdad509330fc176394c22b261280da",
".git/objects/f8/b8b11c961232b7aeee26582d3092ad68e0a86c": "468f5860a84e9e865da6e0afb7da3121",
".git/objects/e0/d8cd074e9a06dc9277a8a052c86feeb5c156d2": "7bda3ad10a3ae3c3ea8738983be4ec7a",
".git/objects/2c/45e4f7685336a53f3e0d6168fd45047ea56852": "46a30c244593c24488d8b92c20b98ad6",
".git/objects/41/d4e48fc3807ff1659d2f80ffe65f89ac8736a3": "ea7c203e2c1680d642eebea89709ed29",
".git/objects/41/5b9cc39dd2a31c08573065fb3a2ca9f9d119be": "57174ff70ec8bb8dcbd0983277721004",
".git/objects/1b/491e8a772c86ee78af70c8b3ed0e93e12ef4e8": "1f0c0402ffd41dfd32cb5cc9c8a78e3e",
".git/objects/1e/44cc7bd60d28aca89ede6e71c023ca0b495a21": "fb9adc1de8e291c06fd66f6e0d92d349",
".git/objects/4a/8a1d5b6d382db3fadbcb4b6ef56e4c337e3924": "d5cdcb631df128d0a3b06b04d1b673a5",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/8da72caa2a16638d8181f564977a14ed0ee7c7": "5e3ed5f53a9e5f6e3f3f27f81991d148",
".git/objects/15/84f76c399d1bf6abdda9fd89cbad4bf60aa4d3": "6a1e3c87aaf1101188a4562508906ff6",
".git/objects/85/45d9348c8c4ea85822ddeb819c858e3300b735": "4180b64efd25a06c4eea3b53c5fc852a",
".git/objects/85/b99a1096a7b2f875315ac4f7f92284324c0cb6": "60dfcd784910acf599d50d6debcf8bf7",
".git/objects/85/6dd1bdd8d375ca42c9100856ae53c21a73d524": "5a86e5737632fb892ef84a3259d0d841",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/0474e94710cee763ddce95749ff2487f282d05": "8faac42768c8f623582c854f2f8c12e2",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/78/07b6ebef71de86f851f95f00e4a48a9fd95c72": "b0516160bf3cd408455c0ab21d3c705b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2c21bacf613ff305497fd2e20cecd04f",
".git/logs/refs/heads/main": "2c21bacf613ff305497fd2e20cecd04f",
".git/logs/refs/remotes/origin/main": "80119fcb44f344fc7bceba4ce0a91b33",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "53492f785309b62e3419a9773f00e977",
".git/refs/remotes/origin/main": "53492f785309b62e3419a9773f00e977",
".git/index": "f0675093c811d693a1aa8a9f0fa43fc0",
".git/COMMIT_EDITMSG": "1733f8cb43b52804071977badcd48ce1",
"assets/AssetManifest.json": "97e777415241596e1cd037a3be00c697",
"assets/NOTICES": "90846f889fede7f646df2e3bd16ec093",
"assets/FontManifest.json": "d1e1570ac5fab51e81cc1d61ea15a410",
"assets/AssetManifest.bin.json": "79fa45c423fc18b18a23be59242f53d7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f1d1220820e251c08b09740b0a0bd2bd",
"assets/fonts/MaterialIcons-Regular.otf": "a74a534a0d84aaa6727acdc2772a13a6",
"assets/assets/images/document_0590_R.png": "f27ddd3ea14ea0d3aa631b62dc98dca5",
"assets/assets/images/qr-code.png": "f4fc3fa0a53f18804bda0522a00f3620",
"assets/assets/images/ooo_document.png": "965c0b550fd6834e525bffcbf410e9b8",
"assets/assets/images/document_0591_R.png": "d5a80391fe130e44d79184e8d07b9e64",
"assets/assets/images/small_divider.png": "be0b2522b7b0b100da208c4ed0687dd0",
"assets/assets/images/divider.png": "7c6ec7257e259be3fa287a7e3858f923",
"assets/assets/images/viktor_diplom.png": "9acbc02512de65cf5f9dea4ee2aa2d0e",
"assets/assets/images/evi_logo.png": "5d4e012f9b7d0afcb223f455c326661d",
"assets/assets/images/viktor_assertment.png": "c67811e4aefc058c36e7ccf13c250c21",
"assets/assets/images/document_1951_V.png": "9950b2c72a38f451666b60f7f46d9bb7",
"assets/assets/images/erik_diplom.png": "83d05d44b8368c111682744d786078da",
"assets/assets/images/erik_assertment.png": "43ba20175d80cbefe578c480e0e761b9",
"assets/assets/fonts/Arial-Regular.ttf": "5995c725ca5a13be62d3dc75c2fc59fc",
"assets/assets/fonts/futura-pt-book-oblique.ttf": "02738f97b87fd3e6979a5de80beb58bd",
"assets/assets/fonts/Arial-Bold.ttf": "ac8ce60bf9ef976a52176e90335cab62",
"assets/assets/fonts/Arial-Italic.ttf": "b94c4d211e303045e15c8938d869bf61",
"assets/assets/fonts/futura-pt-book.ttf": "0d987efe9bc0b858a7bc0367c2d5922c",
"assets/assets/gif/gifka.gif": "828ff15b6c42a273e3143b8c909bce70",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
