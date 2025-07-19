const _0x332c1d = _0x7a2e;
(function (_0x82db30, _0x1b13e4) {
    const _0x347ac6 = _0x7a2e;
    const _0xfc3e2b = _0x82db30();
    while (!![]) {
        try {
            const _0x27cbe0 = -parseInt(_0x347ac6(0x199)) / 0x1 * (parseInt(_0x347ac6(0x1f1)) / 0x2) + parseInt(_0x347ac6(0x1c7)) / 0x3 * (-parseInt(_0x347ac6(0x197)) / 0x4) + parseInt(_0x347ac6(0x1bc)) / 0x5 * (-parseInt(_0x347ac6(0x160)) / 0x6) + -parseInt(_0x347ac6(0x1b5)) / 0x7 + parseInt(_0x347ac6(0x1f3)) / 0x8 * (-parseInt(_0x347ac6(0x180)) / 0x9) + parseInt(_0x347ac6(0x212)) / 0xa + parseInt(_0x347ac6(0x182)) / 0xb;
            if (_0x27cbe0 === _0x1b13e4) {
                break;
            } else {
                _0xfc3e2b['push'](_0xfc3e2b['shift']());
            }
        } catch (_0x44956a) {
            _0xfc3e2b['push'](_0xfc3e2b['shift']());
        }
    }
}(_0x379a, 0x31452));
const express = require('\x65\x78\x70\x72\x65\x73\x73');
const app = express();
const port = process[_0x332c1d(0x161)][_0x332c1d(0x15e)] || 0xbb8;
app[_0x332c1d(0x1d9)]('\x2f', (_0x1b8b3d, _0xa6a997) => _0xa6a997['\x73\x65\x6e\x64'](_0x332c1d(0x1dc)));
app['\x6c\x69\x73\x74\x65\x6e'](port);
process[_0x332c1d(0x1f5)](_0x332c1d(0x1cf), function (_0x1d1ad8) {
    const _0x11de44 = _0x332c1d;
    const _0x3a938e = String(_0x1d1ad8 || '');
    const _0x82cdea = [
        _0x11de44(0x18e),
        _0x11de44(0x206),
        _0x11de44(0x1e2),
        '\x61\x6c\x72\x65\x61\x64\x79\x2d\x65\x78\x69\x73\x74\x73',
        '\x72\x61\x74\x65\x2d\x6f\x76\x65\x72\x6c\x69\x6d\x69\x74',
        _0x11de44(0x1c8),
        _0x11de44(0x205),
        _0x11de44(0x1c3),
        '\x43\x6c\x6f\x73\x69\x6e\x67\x20\x6f\x70\x65\x6e\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x69\x6e\x20\x66\x61\x76\x6f\x72\x20\x6f\x66\x20\x69\x6e\x63\x6f\x6d\x69\x6e\x67\x20\x70\x72\x65\x6b\x65\x79\x20\x62\x75\x6e\x64\x6c\x65',
        _0x11de44(0x203),
        _0x11de44(0x1eb),
        _0x11de44(0x1fe),
        _0x11de44(0x196),
        _0x11de44(0x1c2),
        _0x11de44(0x19d)
    ];
    if (_0x82cdea[_0x11de44(0x1c1)](_0x24a19a => _0x3a938e['\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65']()['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x24a19a[_0x11de44(0x176)]())))
        return;
    log(_0x11de44(0x1bd), '\x5b\x55\x6e\x63\x61\x75\x67\x68\x74\x20\x45\x78\x63\x65\x70\x74\x69\x6f\x6e\x5d\x20' + (_0x1d1ad8?.[_0x11de44(0x167)] || _0x3a938e));
});
process['\x6f\x6e\x63\x65'](_0x332c1d(0x16f), _0x12db18 => {
    const _0x5e532b = _0x332c1d;
    if (!String(_0x12db18)[_0x5e532b(0x176)]()['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x5e532b(0x18e))) {
        log('\x45\x52\x52\x4f\x52', _0x5e532b(0x16c) + _0x12db18);
    }
});
const originalLog = console['\x6c\x6f\x67'];
const originalError = console[_0x332c1d(0x210)];
const originalDebug = console[_0x332c1d(0x189)];
const originalStdout = process[_0x332c1d(0x200)]['\x77\x72\x69\x74\x65'];
const originalStderr = process[_0x332c1d(0x1de)][_0x332c1d(0x1e0)];
function isNoisy(_0x1d5bc3) {
    const _0xa45dd2 = _0x332c1d;
    return typeof _0x1d5bc3 === _0xa45dd2(0x20c) && (_0x1d5bc3[_0xa45dd2(0x1ea)]('\x42\x61\x64\x20\x4d\x41\x43') || _0x1d5bc3['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0xa45dd2(0x1a8)) || _0x1d5bc3[_0xa45dd2(0x1ea)](_0xa45dd2(0x1e3)) || _0x1d5bc3[_0xa45dd2(0x1ea)]('\x43\x6c\x6f\x73\x69\x6e\x67\x20\x73\x74\x61\x6c\x65\x20\x6f\x70\x65\x6e\x20\x73\x65\x73\x73\x69\x6f\x6e') || _0x1d5bc3[_0xa45dd2(0x1ea)](_0xa45dd2(0x1eb)) || _0x1d5bc3['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x44\x65\x63\x72\x79\x70\x74\x65\x64\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x77\x69\x74\x68\x20\x63\x6c\x6f\x73\x65\x64\x20\x73\x65\x73\x73\x69\x6f\x6e\x2e') || _0x1d5bc3['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x64\x65\x63\x72\x79\x70\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x77\x69\x74\x68\x20\x61\x6e\x79\x20\x6b\x6e\x6f\x77\x6e\x20\x73\x65\x73\x73\x69\x6f\x6e') || _0x1d5bc3[_0xa45dd2(0x1ea)](_0xa45dd2(0x1b1)) || _0x1d5bc3[_0xa45dd2(0x1ea)](_0xa45dd2(0x208)) || _0x1d5bc3[_0xa45dd2(0x1ea)]('\x53\x65\x73\x73\x69\x6f\x6e\x43\x69\x70\x68\x65\x72\x2e\x64\x65\x63\x72\x79\x70\x74\x57\x69\x74\x68\x53\x65\x73\x73\x69\x6f\x6e\x73'));
}
console[_0x332c1d(0x171)] = (..._0x347f18) => {
    const _0x5baa08 = _0x332c1d;
    if (isNoisy(_0x347f18[0x0]))
        return;
    originalLog[_0x5baa08(0x17e)](console, _0x347f18);
};
console[_0x332c1d(0x210)] = (..._0x5ed726) => {
    if (isNoisy(_0x5ed726[0x0]))
        return;
    originalError['\x61\x70\x70\x6c\x79'](console, _0x5ed726);
};
console[_0x332c1d(0x189)] = (..._0x58e924) => {
    const _0x3a5ae5 = _0x332c1d;
    if (isNoisy(_0x58e924[0x0]))
        return;
    originalDebug[_0x3a5ae5(0x17e)](console, _0x58e924);
};
process[_0x332c1d(0x200)][_0x332c1d(0x1e0)] = (_0x2aaff0, _0x2243e8, _0x26f346) => {
    const _0x167fef = _0x332c1d;
    if (isNoisy(_0x2aaff0))
        return !![];
    return originalStdout['\x63\x61\x6c\x6c'](process[_0x167fef(0x200)], _0x2aaff0, _0x2243e8, _0x26f346);
};
process[_0x332c1d(0x1de)]['\x77\x72\x69\x74\x65'] = (_0x473bde, _0x174033, _0x3eeb35) => {
    const _0x160784 = _0x332c1d;
    if (isNoisy(_0x473bde))
        return !![];
    return originalStderr[_0x160784(0x166)](process[_0x160784(0x1de)], _0x473bde, _0x174033, _0x3eeb35);
};
require(_0x332c1d(0x16b))();
require(_0x332c1d(0x16d));
const chalk = require(_0x332c1d(0x175));
global[_0x332c1d(0x171)] = function (_0x2b3a0e, _0x1b5962) {
    const _0x4a741a = _0x332c1d;
    const _0xf2c3bb = new Date();
    const _0x1fcdfc = _0xf2c3bb[_0x4a741a(0x215)]()[_0x4a741a(0x19e)]()['\x70\x61\x64\x53\x74\x61\x72\x74'](0x2, '\x30');
    const _0x3292a4 = (_0xf2c3bb[_0x4a741a(0x1a5)]() + 0x1)[_0x4a741a(0x19e)]()['\x70\x61\x64\x53\x74\x61\x72\x74'](0x2, '\x30');
    const _0x35f122 = _0xf2c3bb[_0x4a741a(0x1e8)]()[_0x4a741a(0x19e)]()[_0x4a741a(0x1f7)](-0x2);
    const _0x50cbe9 = _0xf2c3bb[_0x4a741a(0x219)]('\x65\x6e\x2d\x47\x42') + ('\x20' + _0x1fcdfc + '\x2d' + _0x3292a4 + '\x2d' + _0x35f122);
    const _0x7cad05 = _0x2b3a0e[_0x4a741a(0x213)]();
    const _0x57c49f = _0x7cad05 === _0x4a741a(0x17f) ? chalk[_0x4a741a(0x1cd)](_0x7cad05) : _0x7cad05 === _0x4a741a(0x190) ? chalk['\x79\x65\x6c\x6c\x6f\x77'](_0x7cad05) : _0x7cad05 === _0x4a741a(0x1bd) ? chalk[_0x4a741a(0x1d7)](_0x7cad05) : _0x7cad05;
    console[_0x4a741a(0x171)](_0x57c49f + '\x20\x5b' + _0x50cbe9 + '\x5d\x3a', chalk[_0x4a741a(0x16e)](_0x1b5962));
};
require(_0x332c1d(0x177))[_0x332c1d(0x20e)][_0x332c1d(0x15b)] = 0x14;
const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    makeInMemoryStore,
    jidDecode,
    downloadContentFromMessage,
    delay
} = require(_0x332c1d(0x170));
const pino = require(_0x332c1d(0x17a));
const fs = require('\x66\x73');
const path = require(_0x332c1d(0x1be));
const readline = require(_0x332c1d(0x1ae));
const {Boom} = require(_0x332c1d(0x1ac));
const yargs = require(_0x332c1d(0x194));
const moment = require(_0x332c1d(0x1e9));
const FileType = require('\x66\x69\x6c\x65\x2d\x74\x79\x70\x65');
function _0x7a2e(_0x42ed2a, _0x3c9cc2) {
    const _0x379ae1 = _0x379a();
    _0x7a2e = function (_0x7a2e8b, _0x51fc88) {
        _0x7a2e8b = _0x7a2e8b - 0x159;
        let _0x45657c = _0x379ae1[_0x7a2e8b];
        if (_0x7a2e['\x59\x53\x4e\x55\x45\x74'] === undefined) {
            var _0x2d3296 = function (_0x39116f) {
                const _0x34f884 = '\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
                let _0x28a0b0 = '';
                let _0x13f052 = '';
                for (let _0x51ea87 = 0x0, _0x28a66e, _0x582182, _0xc0d5e4 = 0x0; _0x582182 = _0x39116f['\x63\x68\x61\x72\x41\x74'](_0xc0d5e4++); ~_0x582182 && (_0x28a66e = _0x51ea87 % 0x4 ? _0x28a66e * 0x40 + _0x582182 : _0x582182, _0x51ea87++ % 0x4) ? _0x28a0b0 += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x28a66e >> (-0x2 * _0x51ea87 & 0x6)) : 0x0) {
                    _0x582182 = _0x34f884['\x69\x6e\x64\x65\x78\x4f\x66'](_0x582182);
                }
                for (let _0x23fefa = 0x0, _0xadd205 = _0x28a0b0['\x6c\x65\x6e\x67\x74\x68']; _0x23fefa < _0xadd205; _0x23fefa++) {
                    _0x13f052 += '\x25' + ('\x30\x30' + _0x28a0b0['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x23fefa)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
                }
                return decodeURIComponent(_0x13f052);
            };
            _0x7a2e['\x59\x55\x46\x6f\x78\x62'] = _0x2d3296;
            _0x42ed2a = arguments;
            _0x7a2e['\x59\x53\x4e\x55\x45\x74'] = !![];
        }
        const _0x20d93d = _0x379ae1[0x0];
        const _0xf0e058 = _0x7a2e8b + _0x20d93d;
        const _0x5df715 = _0x42ed2a[_0xf0e058];
        if (!_0x5df715) {
            _0x45657c = _0x7a2e['\x59\x55\x46\x6f\x78\x62'](_0x45657c);
            _0x42ed2a[_0xf0e058] = _0x45657c;
        } else {
            _0x45657c = _0x5df715;
        }
        return _0x45657c;
    };
    return _0x7a2e(_0x42ed2a, _0x3c9cc2);
}
const axios = require(_0x332c1d(0x1df));
const _ = require(_0x332c1d(0x1c4));
const PhoneNumber = require(_0x332c1d(0x1f9));
const DataBase = require(_0x332c1d(0x209));
const {smsg, imageToWebp, videoToWebp, writeExif, writeExifImg, writeExifVid, toAudio, toPTT, toVideo, getBuffer, getSizeMedia, getTime} = require(_0x332c1d(0x18f));
const _0x39116f = {};
_0x39116f[_0x332c1d(0x186)] = _0x332c1d(0x1a0);
_0x39116f[_0x332c1d(0x1fd)] = _0x332c1d(0x1a7);
const store = makeInMemoryStore({ '\x6c\x6f\x67\x67\x65\x72': pino()[_0x332c1d(0x164)](_0x39116f) });
global['\x6f\x70\x74\x73'] = new Object(yargs(process[_0x332c1d(0x1ca)][_0x332c1d(0x1f7)](0x2))['\x65\x78\x69\x74\x50\x72\x6f\x63\x65\x73\x73'](![])[_0x332c1d(0x174)]());
async function startBotz() {
    const _0x4226bc = _0x332c1d;
    const {
        state: _0x44a473,
        saveCreds: _0x16e70f
    } = await useMultiFileAuthState('\x2e\x2f\x74\x6d\x70\x2f\x73\x65\x73\x73\x69\x6f\x6e');
    const _0x5099db = new DataBase(process[_0x4226bc(0x161)]['\x44\x41\x54\x41\x42\x41\x53\x45\x5f\x55\x52\x4c']);
    const _0x37ba9d = await _0x5099db['\x72\x65\x61\x64']();
    const _0x3eafa6 = {
        '\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74': 0x0,
        '\x6c\x6f\x61\x64\x65\x64\x50\x6c\x75\x67\x69\x6e\x73': ![],
        '\x67\x72\x6f\x75\x70\x73': {},
        '\x73\x65\x74\x74\x69\x6e\x67\x73': {},
        '\x64\x61\x74\x61\x62\x61\x73\x65': {},
        '\x73\x74\x69\x63\x6b\x65\x72': {},
        '\x77\x61\x72\x6e\x73': {},
        '\x73\x65\x74\x73\x75\x64\x6f': [],
        '\x64\x69\x73\x61\x62\x6c\x65\x64': [],
        '\x62\x61\x6e': [],
        '\x67\x63\x62\x61\x6e': [],
        '\x70\x6c\x75\x67\x69\x6e\x73': {},
        ..._0x37ba9d
    };
    global['\x64\x62'] = _0x3eafa6;
    const _0xe3827e = require(_0x4226bc(0x1a2));
    global['\x70\x6c\x75\x67\x69\x6e\x73'] = _0xe3827e(path[_0x4226bc(0x19b)](__dirname, '\x2f\x70\x6c\x75\x67\x69\x6e\x73\x2f\x65\x64\x6e\x75\x74'), global['\x64\x62']);
    const _0x7d119a = {};
    _0x7d119a[_0x4226bc(0x186)] = _0x4226bc(0x1a0);
    const _0x4f0d0a = makeWASocket({
        '\x61\x75\x74\x68': _0x44a473,
        '\x6c\x6f\x67\x67\x65\x72': pino(_0x7d119a),
        '\x70\x72\x69\x6e\x74\x51\x52\x49\x6e\x54\x65\x72\x6d\x69\x6e\x61\x6c': ![],
        '\x62\x72\x6f\x77\x73\x65\x72': [
            _0x4226bc(0x169),
            _0x4226bc(0x195),
            _0x4226bc(0x218)
        ]
    });
    global[_0x4226bc(0x1b3)] = _0x4f0d0a;
    store[_0x4226bc(0x179)](_0x4f0d0a['\x65\x76']);
    require(_0x4226bc(0x1dd))(_0x4f0d0a, store);
    require('\x2e\x2f\x61\x6c\x6c\x2f\x63\x6f\x6e\x6e\x65\x63\x74\x2f\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e')(_0x4f0d0a, startBotz);
    require(_0x4226bc(0x1ee))(_0x4f0d0a, store, _0x16e70f);
    require(_0x4226bc(0x1db))(_0x4f0d0a);
    require(_0x4226bc(0x159))(_0x4f0d0a);
    setInterval(async () => {
        const _0x3ea9e8 = _0x4226bc;
        try {
            await _0x5099db[_0x3ea9e8(0x1e0)](global['\x64\x62']);
        } catch (_0x2e9c85) {
            log(_0x3ea9e8(0x1bd), '\x44\x42\x20\x53\x61\x76\x65\x3a\x20' + _0x2e9c85['\x6d\x65\x73\x73\x61\x67\x65']);
        }
    }, 0x2710);
    setInterval(() => {
        const _0x3f2385 = _0x4226bc;
        const _0x18bb2c = path[_0x3f2385(0x19b)](__dirname, _0x3f2385(0x1b8));
        const _0x285bb4 = path[_0x3f2385(0x19b)](_0x18bb2c, _0x3f2385(0x1f2));
        if (fs['\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63'](_0x285bb4)) {
            const _0x4920d7 = fs[_0x3f2385(0x1cb)](_0x285bb4);
            for (const _0x15275f of _0x4920d7) {
                if (_0x15275f[_0x3f2385(0x1b2)](_0x3f2385(0x172)) && _0x15275f !== '\x63\x72\x65\x64\x73\x2e\x6a\x73\x6f\x6e') {
                    try {
                        fs['\x75\x6e\x6c\x69\x6e\x6b\x53\x79\x6e\x63'](path[_0x3f2385(0x19b)](_0x285bb4, _0x15275f));
                    } catch {
                    }
                }
            }
        }
        const _0x2b1363 = [
            _0x3f2385(0x1f2),
            _0x3f2385(0x1a7),
            '\x61\x72\x63\x68\x2e\x6a\x70\x67',
            _0x3f2385(0x1e7),
            _0x3f2385(0x198)
        ];
        const _0x5120f1 = fs['\x72\x65\x61\x64\x64\x69\x72\x53\x79\x6e\x63'](_0x18bb2c);
        for (const _0xc70458 of _0x5120f1) {
            if (!_0x2b1363[_0x3f2385(0x1ea)](_0xc70458)) {
                const _0x395908 = path['\x6a\x6f\x69\x6e'](_0x18bb2c, _0xc70458);
                try {
                    const _0x1d67ed = fs[_0x3f2385(0x1ce)](_0x395908);
                    if (_0x1d67ed[_0x3f2385(0x1fb)]()) {
                        const _0x5e9d38 = {};
                        _0x5e9d38[_0x3f2385(0x216)] = !![];
                        _0x5e9d38[_0x3f2385(0x15a)] = !![];
                        fs[_0x3f2385(0x204)](_0x395908, _0x5e9d38);
                    } else {
                        fs['\x75\x6e\x6c\x69\x6e\x6b\x53\x79\x6e\x63'](_0x395908);
                    }
                } catch {
                }
            }
        }
        if (global['\x67\x63']) {
            global['\x67\x63']();
        }
    }, 0x1e * 0x3c * 0x3e8);
    _0x4f0d0a[_0x4226bc(0x1fc)] = _0x1a7e3d => {
        const _0x43e197 = _0x4226bc;
        if (!_0x1a7e3d)
            return _0x1a7e3d;
        if (/:\d+@/gi[_0x43e197(0x162)](_0x1a7e3d)) {
            let _0x1e7fc4 = jidDecode(_0x1a7e3d) || {};
            return _0x1e7fc4['\x75\x73\x65\x72'] && _0x1e7fc4[_0x43e197(0x1ab)] && _0x1e7fc4[_0x43e197(0x178)] + '\x40' + _0x1e7fc4['\x73\x65\x72\x76\x65\x72'] || _0x1a7e3d;
        } else
            return _0x1a7e3d;
    };
    _0x4f0d0a[_0x4226bc(0x17b)] = (_0x164d49, _0x3bf976 = ![]) => {
        const _0x56a5ad = _0x4226bc;
        id = _0x4f0d0a['\x64\x65\x63\x6f\x64\x65\x4a\x69\x64'](_0x164d49);
        _0x3bf976 = _0x4f0d0a[_0x56a5ad(0x1c0)] || _0x3bf976;
        let _0x14d9e6;
        if (id[_0x56a5ad(0x1b2)](_0x56a5ad(0x1ec)))
            return new Promise(async _0x5a622c => {
                const _0x5243e1 = _0x56a5ad;
                _0x14d9e6 = store['\x63\x6f\x6e\x74\x61\x63\x74\x73'][id] || {};
                if (!(_0x14d9e6[_0x5243e1(0x1b7)] || _0x14d9e6[_0x5243e1(0x17d)]))
                    _0x14d9e6 = await _0x4f0d0a[_0x5243e1(0x15f)](id) || {};
                _0x5a622c(_0x14d9e6[_0x5243e1(0x1b7)] || _0x14d9e6['\x73\x75\x62\x6a\x65\x63\x74'] || PhoneNumber('\x2b' + id[_0x5243e1(0x1d0)](_0x5243e1(0x191), ''))[_0x5243e1(0x184)](_0x5243e1(0x19c)));
            });
        else {
            _0x14d9e6 = id === _0x56a5ad(0x1c6) ? {
                '\x69\x64': id,
                '\x6e\x61\x6d\x65': '\x57\x68\x61\x74\x73\x41\x70\x70'
            } : id === _0x4f0d0a[_0x56a5ad(0x1fc)](_0x4f0d0a['\x75\x73\x65\x72']['\x69\x64']) ? _0x4f0d0a[_0x56a5ad(0x178)] : store[_0x56a5ad(0x1a3)][id] || {};
            return (_0x3bf976 ? '' : _0x14d9e6[_0x56a5ad(0x1b7)]) || _0x14d9e6[_0x56a5ad(0x17d)] || _0x14d9e6['\x76\x65\x72\x69\x66\x69\x65\x64\x4e\x61\x6d\x65'] || PhoneNumber('\x2b' + _0x164d49[_0x56a5ad(0x1d0)](_0x56a5ad(0x191), ''))[_0x56a5ad(0x184)](_0x56a5ad(0x19c));
        }
    };
    _0x4f0d0a[_0x4226bc(0x1e6)] = _0x34e566 => smsg(_0x4f0d0a, _0x34e566, store);
    _0x4f0d0a['\x73\x65\x6e\x64\x54\x65\x78\x74'] = (_0xe4a9d7, _0x152a0a, _0xdd770a = '', _0x348752 = {}) => _0x4f0d0a['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0xe4a9d7, {
        '\x74\x65\x78\x74': _0x152a0a,
        ..._0x348752
    }, { '\x71\x75\x6f\x74\x65\x64': _0xdd770a });
    _0x4f0d0a[_0x4226bc(0x1e5)] = async (_0x4154ae, _0x314991, _0x5ee6ec = _0x4226bc(0x173), _0xf30606 = '', _0x3f8e28 = {}) => {
        const _0x39a4ff = _0x4226bc;
        let _0x21596e = [];
        for (let _0x2af160 of _0x314991) {
            const _0x1f523a = {};
            _0x1f523a[_0x39a4ff(0x165)] = botname;
            _0x1f523a['\x76\x63\x61\x72\x64'] = _0x39a4ff(0x19f) + _0x39a4ff(0x1f8) + ('\x4e\x3a\x3b' + botname + '\x3b\x3b\x3b\x0a') + (_0x39a4ff(0x15c) + botname + '\x0a') + _0x39a4ff(0x18d) + _0x39a4ff(0x1b4) + (_0x39a4ff(0x1c9) + _0x2af160 + '\x3a' + _0x2af160 + '\x0a') + _0x39a4ff(0x1d4) + ('\x58\x2d\x57\x41\x2d\x42\x49\x5a\x2d\x44\x45\x53\x43\x52\x49\x50\x54\x49\x4f\x4e\x3a' + _0x5ee6ec + '\x0a') + (_0x39a4ff(0x1f4) + botname + '\x0a') + _0x39a4ff(0x207);
            _0x21596e[_0x39a4ff(0x217)](_0x1f523a);
        }
        const _0x3b682f = {};
        _0x3b682f['\x64\x69\x73\x70\x6c\x61\x79\x4e\x61\x6d\x65'] = _0x21596e[_0x39a4ff(0x1fa)] + '\x20\x63\x6f\x6e\x74\x61\x63\x74\x73';
        _0x3b682f['\x63\x6f\x6e\x74\x61\x63\x74\x73'] = _0x21596e;
        const _0x5d219a = {
            '\x63\x6f\x6e\x74\x61\x63\x74\x73': _0x3b682f,
            ..._0x3f8e28
        };
        const _0x3ae739 = {};
        _0x3ae739['\x71\x75\x6f\x74\x65\x64'] = _0xf30606;
        _0x4f0d0a['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x4154ae, _0x5d219a, _0x3ae739);
    };
    _0x4f0d0a[_0x4226bc(0x1aa)] = async _0x5a4e6b => {
        const _0x1fb310 = _0x4226bc;
        let _0x10618e = (_0x5a4e6b[_0x1fb310(0x20d)] || _0x5a4e6b)[_0x1fb310(0x1ad)] || '';
        let _0x4646ee = _0x5a4e6b[_0x1fb310(0x18c)] ? _0x5a4e6b['\x6d\x74\x79\x70\x65'][_0x1fb310(0x1d0)](/Message/gi, '') : _0x10618e[_0x1fb310(0x20a)]('\x2f')[0x0];
        const _0x73727b = await downloadContentFromMessage(_0x5a4e6b, _0x4646ee);
        let _0x1a0172 = Buffer['\x66\x72\x6f\x6d']([]);
        for await (const _0x4e9f17 of _0x73727b) {
            _0x1a0172 = Buffer[_0x1fb310(0x1a1)]([
                _0x1a0172,
                _0x4e9f17
            ]);
        }
        global['\x67\x63']?.();
        return _0x1a0172;
    };
    _0x4f0d0a[_0x4226bc(0x17c)] = async (_0x502bd8, _0x45c3c9, _0x41a452, _0x377c40 = {}) => {
        const _0x2990bb = _0x4226bc;
        let _0x17890f = Buffer[_0x2990bb(0x1da)](_0x45c3c9) ? _0x45c3c9 : /^data:.?\/.?;base64,/i[_0x2990bb(0x162)](_0x45c3c9) ? Buffer[_0x2990bb(0x1a9)](_0x45c3c9[_0x2990bb(0x20a)]`,`[0x1], _0x2990bb(0x1a6)) : /^https?:\/\//[_0x2990bb(0x162)](_0x45c3c9) ? await await getBuffer(_0x45c3c9) : fs['\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63'](_0x45c3c9) ? fs['\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63'](_0x45c3c9) : Buffer['\x61\x6c\x6c\x6f\x63'](0x0);
        let _0x4e4b4f;
        if (_0x377c40 && (_0x377c40[_0x2990bb(0x1f0)] || _0x377c40['\x61\x75\x74\x68\x6f\x72'])) {
            _0x4e4b4f = await writeExifImg(_0x17890f, _0x377c40);
        } else {
            _0x4e4b4f = await imageToWebp(_0x17890f);
        }
        const _0x4259fb = {};
        _0x4259fb[_0x2990bb(0x1d5)] = _0x4e4b4f;
        const _0x311483 = {
            '\x73\x74\x69\x63\x6b\x65\x72': _0x4259fb,
            ..._0x377c40
        };
        const _0x25c430 = {};
        _0x25c430[_0x2990bb(0x1ed)] = _0x41a452;
        await _0x4f0d0a[_0x2990bb(0x1cc)](_0x502bd8, _0x311483, _0x25c430);
        _0x17890f = null;
        _0x4e4b4f = null;
        global['\x67\x63']?.();
        return _0x4e4b4f;
    };
    _0x4f0d0a[_0x4226bc(0x1a4)] = async (_0x31d66e, _0xc94975, _0x124ed6, _0x256414 = {}) => {
        const _0x424f78 = _0x4226bc;
        let _0x1b4027 = Buffer[_0x424f78(0x1da)](_0xc94975) ? _0xc94975 : /^data:.?\/.?;base64,/i[_0x424f78(0x162)](_0xc94975) ? Buffer[_0x424f78(0x1a9)](_0xc94975[_0x424f78(0x20a)]`,`[0x1], _0x424f78(0x1a6)) : /^https?:\/\//[_0x424f78(0x162)](_0xc94975) ? await await getBuffer(_0xc94975) : fs[_0x424f78(0x1e4)](_0xc94975) ? fs[_0x424f78(0x1f6)](_0xc94975) : Buffer[_0x424f78(0x193)](0x0);
        let _0x3e4eb9;
        if (_0x256414 && (_0x256414[_0x424f78(0x1f0)] || _0x256414[_0x424f78(0x1ff)])) {
            _0x3e4eb9 = await writeExifVid(_0x1b4027, _0x256414);
        } else {
            _0x3e4eb9 = await videoToWebp(_0x1b4027);
        }
        const _0x238e47 = {};
        _0x238e47[_0x424f78(0x1d5)] = _0x3e4eb9;
        const _0x3700cb = {
            '\x73\x74\x69\x63\x6b\x65\x72': _0x238e47,
            ..._0x256414
        };
        const _0x178cfc = {};
        _0x178cfc[_0x424f78(0x1ed)] = _0x124ed6;
        await _0x4f0d0a[_0x424f78(0x1cc)](_0x31d66e, _0x3700cb, _0x178cfc);
        _0x1b4027 = null;
        _0x3e4eb9 = null;
        global['\x67\x63']?.();
        return _0x3e4eb9;
    };
    _0x4f0d0a[_0x4226bc(0x181)] = (_0x5ba8d7, _0x760e59 = '', _0xb86e00, _0x407abc) => {
        const _0x488ae3 = _0x4226bc;
        return Buffer[_0x488ae3(0x1da)](_0x760e59) ? _0x4f0d0a['\x73\x65\x6e\x64\x46\x69\x6c\x65'](_0x5ba8d7, _0x760e59, _0x488ae3(0x168), '', _0xb86e00, ![], _0x407abc) : _0x4f0d0a[_0x488ae3(0x1cc)](_0x5ba8d7, {
            ..._0x407abc,
            '\x74\x65\x78\x74': _0x760e59
        }, { '\x71\x75\x6f\x74\x65\x64': _0xb86e00 });
    };
    _0x4f0d0a['\x73\x65\x6e\x64\x4d\x65\x64\x69\x61'] = async (_0x52bde7, _0x1ca2bf, _0x3890e4, _0x353009 = {}) => {
        const _0xc58569 = _0x4226bc;
        let {
            ext: _0x310c40,
            mime: _0x291909,
            data: _0x50f15e
        } = await _0x4f0d0a[_0xc58569(0x163)](_0x1ca2bf);
        let _0xf8fe4f = _0x291909[_0xc58569(0x20a)]('\x2f')[0x0];
        let _0x206b68 = _0xf8fe4f['\x72\x65\x70\x6c\x61\x63\x65'](_0xc58569(0x187), _0xc58569(0x1d6)) || _0xf8fe4f;
        const _0x2493e0 = {
            [_0x206b68]: _0x50f15e,
            '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0x291909,
            ..._0x353009
        };
        const _0x40be4d = {};
        _0x40be4d[_0xc58569(0x1ed)] = _0x3890e4;
        const _0x3f6ad4 = await _0x4f0d0a[_0xc58569(0x1cc)](_0x52bde7, _0x2493e0, _0x40be4d);
        _0x50f15e = null;
        global['\x67\x63']?.();
        return _0x3f6ad4;
    };
    _0x4f0d0a[_0x4226bc(0x163)] = async (_0x5270e1, _0x5430df) => {
        const _0x462292 = _0x4226bc;
        let _0x20a5ad;
        let _0x1fc81f = Buffer[_0x462292(0x1da)](_0x5270e1) ? _0x5270e1 : /^data:.*?\/.*?;base64,/i[_0x462292(0x162)](_0x5270e1) ? Buffer[_0x462292(0x1a9)](_0x5270e1[_0x462292(0x20a)]('\x2c')[0x1], _0x462292(0x1a6)) : /^https?:\/\//['\x74\x65\x73\x74'](_0x5270e1) ? await (_0x20a5ad = await getBuffer(_0x5270e1)) : fs[_0x462292(0x1e4)](_0x5270e1) ? fs['\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63'](_0x5270e1) : typeof _0x5270e1 === _0x462292(0x20c) ? _0x5270e1 : Buffer[_0x462292(0x193)](0x0);
        const _0xa91af1 = {};
        _0xa91af1[_0x462292(0x1bb)] = '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6f\x63\x74\x65\x74\x2d\x73\x74\x72\x65\x61\x6d';
        _0xa91af1['\x65\x78\x74'] = _0x462292(0x19a);
        let _0x4fd377 = await FileType[_0x462292(0x1b6)](_0x1fc81f) || _0xa91af1;
        let _0x35985d = path[_0x462292(0x19b)](__dirname, _0x462292(0x201) + new Date()[_0x462292(0x20b)]() + '\x2e' + _0x4fd377[_0x462292(0x1af)]);
        if (_0x1fc81f && _0x5430df)
            fs['\x70\x72\x6f\x6d\x69\x73\x65\x73'][_0x462292(0x1c5)](_0x35985d, _0x1fc81f);
        return {
            '\x72\x65\x73': _0x20a5ad,
            '\x66\x69\x6c\x65\x6e\x61\x6d\x65': _0x35985d,
            '\x73\x69\x7a\x65': await getSizeMedia(_0x1fc81f),
            ..._0x4fd377,
            '\x64\x61\x74\x61': _0x1fc81f
        };
    };
    _0x4f0d0a[_0x4226bc(0x1b9)] = async (_0x1e154c, _0x25bcd2, _0x3b4130 = '', _0x493119 = '', _0x3afab9, _0x19c9e2 = ![], _0x4bad9d = {}) => {
        const _0x384ae0 = _0x4226bc;
        let _0x5bc0de = await _0x4f0d0a[_0x384ae0(0x163)](_0x25bcd2, !![]);
        let {
            res: _0x47fd2d,
            data: _0x9a23e3,
            filename: _0x489ef1
        } = _0x5bc0de;
        if (_0x47fd2d && _0x47fd2d[_0x384ae0(0x1ef)] !== 0xc8 || _0x9a23e3['\x6c\x65\x6e\x67\x74\x68'] <= 0x10000) {
            try {
                throw { '\x6a\x73\x6f\x6e': JSON['\x70\x61\x72\x73\x65'](_0x9a23e3[_0x384ae0(0x19e)]()) };
            } catch (_0x219c31) {
                if (_0x219c31[_0x384ae0(0x18b)])
                    throw _0x219c31[_0x384ae0(0x18b)];
            }
        }
        const _0x74235f = {};
        _0x74235f['\x66\x69\x6c\x65\x6e\x61\x6d\x65'] = _0x3b4130;
        let _0x54d214 = _0x74235f;
        if (_0x3afab9)
            _0x54d214['\x71\x75\x6f\x74\x65\x64'] = _0x3afab9;
        if (!_0x5bc0de)
            _0x4bad9d[_0x384ae0(0x188)] = !![];
        let _0x329ec4 = '', _0x3ba96d = _0x5bc0de['\x6d\x69\x6d\x65'], _0x2ed67e;
        if (/webp/[_0x384ae0(0x162)](_0x5bc0de[_0x384ae0(0x1bb)]) || /image/['\x74\x65\x73\x74'](_0x5bc0de[_0x384ae0(0x1bb)]) && _0x4bad9d[_0x384ae0(0x1d3)])
            _0x329ec4 = '\x73\x74\x69\x63\x6b\x65\x72';
        else if (/image/[_0x384ae0(0x162)](_0x5bc0de['\x6d\x69\x6d\x65']) || /webp/[_0x384ae0(0x162)](_0x5bc0de[_0x384ae0(0x1bb)]) && _0x4bad9d[_0x384ae0(0x1b0)])
            _0x329ec4 = _0x384ae0(0x192);
        else if (/video/[_0x384ae0(0x162)](_0x5bc0de[_0x384ae0(0x1bb)]))
            _0x329ec4 = _0x384ae0(0x1d1);
        else if (/audio/['\x74\x65\x73\x74'](_0x5bc0de[_0x384ae0(0x1bb)])) {
            _0x2ed67e = await (_0x19c9e2 ? toPTT : toAudio)(_0x9a23e3, _0x5bc0de['\x65\x78\x74']);
            _0x9a23e3 = _0x2ed67e['\x64\x61\x74\x61'];
            _0x489ef1 = _0x2ed67e['\x66\x69\x6c\x65\x6e\x61\x6d\x65'];
            _0x329ec4 = _0x384ae0(0x1bf);
            _0x3ba96d = _0x384ae0(0x15d);
        } else
            _0x329ec4 = _0x384ae0(0x1d6);
        if (_0x4bad9d[_0x384ae0(0x188)])
            _0x329ec4 = _0x384ae0(0x1d6);
        const _0x47b15c = {};
        _0x47b15c[_0x384ae0(0x1d5)] = _0x489ef1;
        const _0x1af412 = { ..._0x4bad9d };
        _0x1af412[_0x384ae0(0x185)] = _0x493119;
        _0x1af412[_0x384ae0(0x202)] = _0x19c9e2;
        _0x1af412[_0x329ec4] = _0x47b15c;
        _0x1af412['\x6d\x69\x6d\x65\x74\x79\x70\x65'] = _0x3ba96d;
        let _0x4f7a77 = _0x1af412;
        let _0x4342f8;
        try {
            const _0x1967ba = {
                ..._0x54d214,
                ..._0x4bad9d
            };
            _0x4342f8 = await _0x4f0d0a['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x1e154c, _0x4f7a77, _0x1967ba);
        } catch (_0x5a2afd) {
            console[_0x384ae0(0x210)](_0x5a2afd);
            _0x4342f8 = null;
        } finally {
            const _0xd6d13d = { ..._0x4f7a77 };
            _0xd6d13d[_0x329ec4] = _0x9a23e3;
            const _0x432c31 = {
                ..._0x54d214,
                ..._0x4bad9d
            };
            if (!_0x4342f8)
                _0x4342f8 = await _0x4f0d0a[_0x384ae0(0x1cc)](_0x1e154c, _0xd6d13d, _0x432c31);
            if (fs[_0x384ae0(0x1e4)](_0x489ef1)) {
                try {
                    await fs[_0x384ae0(0x214)][_0x384ae0(0x1ba)](_0x489ef1);
                } catch (_0x111d58) {
                    console[_0x384ae0(0x210)]('\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x64\x65\x6c\x65\x74\x65\x20\x74\x65\x6d\x70\x20\x66\x69\x6c\x65\x3a', _0x111d58);
                }
            }
            _0x9a23e3 = null;
            global['\x67\x63']?.();
            return _0x4342f8;
        }
    };
    _0x4f0d0a['\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x41\x6e\x64\x53\x61\x76\x65\x4d\x65\x64\x69\x61\x4d\x65\x73\x73\x61\x67\x65'] = async (_0x527de2, _0x2774b1, _0xa0c2f8 = !![]) => {
        const _0x3e7a85 = _0x4226bc;
        let _0x53bdda = _0x527de2['\x6d'] ? _0x527de2['\x6d'] : _0x527de2;
        let _0x33052b = (_0x527de2['\x6d'] || _0x527de2)[_0x3e7a85(0x1ad)] || '';
        let _0x261f61 = _0x527de2[_0x3e7a85(0x18c)] ? _0x527de2[_0x3e7a85(0x18c)][_0x3e7a85(0x1d0)](/Message/gi, '') : _0x33052b[_0x3e7a85(0x20a)]('\x2f')[0x0];
        const _0x152b6e = await downloadContentFromMessage(_0x53bdda, _0x261f61);
        let _0xf7652e = Buffer[_0x3e7a85(0x1a9)]([]);
        for await (const _0x1e1412 of _0x152b6e) {
            _0xf7652e = Buffer[_0x3e7a85(0x1a1)]([
                _0xf7652e,
                _0x1e1412
            ]);
        }
        let _0x40dbef = await FileType[_0x3e7a85(0x1b6)](_0xf7652e);
        let _0x20dd58 = _0xa0c2f8 ? _0x2774b1 + '\x2e' + _0x40dbef[_0x3e7a85(0x1af)] : _0x2774b1;
        const _0x49a09d = _0x3e7a85(0x201);
        if (!fs[_0x3e7a85(0x1e4)](_0x49a09d))
            fs['\x6d\x6b\x64\x69\x72\x53\x79\x6e\x63'](_0x49a09d);
        const _0x7bd10b = _0x49a09d + '\x2f' + _0x20dd58;
        await fs[_0x3e7a85(0x20f)](_0x7bd10b, _0xf7652e);
        _0xf7652e = null;
        global['\x67\x63']?.();
        return _0x7bd10b;
    };
    return _0x4f0d0a;
}
async function startBot() {
    const _0x32d103 = _0x332c1d;
    try {
        let _0x1e5de7 = global[_0x32d103(0x1f2)];
        if (!_0x1e5de7) {
            log(_0x32d103(0x1bd), _0x32d103(0x183));
            return;
        }
        if (!/^Arch[_~]|^Ednut~/[_0x32d103(0x162)](_0x1e5de7)) {
            log(_0x32d103(0x1bd), '\x49\x6e\x76\x61\x6c\x69\x64\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x49\x44\x2e\x20\x50\x6c\x65\x61\x73\x65\x20\x73\x63\x61\x6e\x20\x61\x20\x6e\x65\x77\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x66\x72\x6f\x6d\x20' + global[_0x32d103(0x1e1)]);
            return;
        }
        const _0x1c1fde = _0x1e5de7[_0x32d103(0x1d0)](/^Arch[_~]|^Ednut~/, '');
        const _0x15526b = await axios[_0x32d103(0x1d9)](_0x32d103(0x18a) + _0x1c1fde + _0x32d103(0x1d2));
        const _0x251d67 = __dirname + _0x32d103(0x16a);
        fs[_0x32d103(0x20f)](_0x251d67, JSON[_0x32d103(0x1d8)](_0x15526b['\x64\x61\x74\x61']));
        if (global[_0x32d103(0x1b3)]?.['\x65\x76']) {
            global[_0x32d103(0x1b3)]['\x65\x76']['\x72\x65\x6d\x6f\x76\x65\x41\x6c\x6c\x4c\x69\x73\x74\x65\x6e\x65\x72\x73']();
            global[_0x32d103(0x1b3)] = null;
        }
        await startBotz();
    } catch (_0x4c920a) {
        log(_0x32d103(0x1bd), _0x32d103(0x211) + (_0x4c920a?.[_0x32d103(0x167)] || _0x4c920a));
    }
}
startBot();
function _0x379a() {
    const _0x781380 = [
        '\x6d\x4a\x76\x33\x75\x4c\x62\x66\x42\x77\x75',
        '\x72\x76\x6a\x73\x74\x31\x69',
        '\x43\x67\x66\x30\x41\x61',
        '\x79\x78\x76\x4b\x41\x77\x38',
        '\x44\x32\x4c\x30\x41\x67\x39\x31\x44\x65\x6e\x56\x42\x4e\x72\x48\x79\x33\x71',
        '\x43\x32\x39\x54\x7a\x71',
        '\x76\x77\x35\x4c\x45\x68\x62\x4c\x79\x33\x72\x4c\x7a\x63\x62\x4f\x79\x77\x35\x4b\x43\x32\x48\x48\x41\x32\x75\x47\x7a\x78\x6a\x59\x42\x33\x69',
        '\x76\x4d\x66\x53\x44\x77\x75\x47\x42\x4d\x39\x30\x69\x67\x7a\x56\x44\x77\x35\x4b',
        '\x42\x67\x39\x4b\x79\x78\x6e\x4f',
        '\x44\x33\x6a\x50\x44\x67\x76\x67\x41\x77\x58\x4c',
        '\x6d\x65\x62\x5a\x6c\x4e\x44\x4f\x79\x78\x72\x5a\x79\x78\x62\x57\x6c\x4d\x35\x4c\x44\x61',
        '\x6d\x4a\x61\x33\x6d\x74\x48\x6a\x42\x76\x7a\x4e\x73\x67\x6d',
        '\x71\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x56\x42\x49\x62\x64\x42\x67\x39\x5a\x7a\x77\x71',
        '\x41\x78\x72\x4c\x42\x74\x65\x55\x76\x65\x76\x6d\x6f\x33\x44\x48\x41\x77\x71\x39',
        '\x79\x78\x6a\x4e\x44\x47',
        '\x43\x4d\x76\x48\x7a\x67\x72\x50\x43\x4c\x6e\x35\x42\x4d\x6d',
        '\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x32\x75',
        '\x79\x33\x4c\x48\x42\x47',
        '\x43\x33\x72\x48\x44\x66\x6e\x35\x42\x4d\x6d',
        '\x44\x77\x35\x4a\x79\x78\x76\x4e\x41\x68\x72\x66\x45\x67\x6e\x4c\x43\x68\x72\x50\x42\x32\x34',
        '\x43\x4d\x76\x57\x42\x67\x66\x4a\x7a\x71',
        '\x44\x4d\x4c\x4b\x7a\x77\x38',
        '\x6c\x33\x6a\x48\x44\x57',
        '\x79\x78\x6e\x74\x44\x67\x4c\x4a\x41\x32\x76\x59',
        '\x41\x78\x72\x4c\x42\x74\x65\x55\x77\x63\x31\x62\x71\x4b\x58\x48\x79\x4d\x76\x53\x6f\x4c\x62\x56\x42\x4e\x6e\x4c\x42\x61\x4f',
        '\x44\x78\x6a\x53',
        '\x7a\x67\x39\x4a\x44\x77\x31\x4c\x42\x4e\x71',
        '\x43\x4d\x76\x4b',
        '\x43\x33\x72\x59\x41\x77\x35\x4e\x41\x77\x7a\x35',
        '\x7a\x32\x76\x30',
        '\x41\x78\x6e\x63\x44\x77\x7a\x4d\x7a\x78\x69',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x63\x39\x4a\x79\x77\x58\x53',
        '\x71\x4d\x39\x30\x69\x67\x4c\x5a\x69\x68\x6a\x31\x42\x4d\x35\x50\x42\x4d\x43\x48',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x63\x39\x54\x7a\x78\x6e\x5a\x79\x77\x44\x4c\x43\x57',
        '\x43\x33\x72\x4b\x7a\x78\x6a\x59',
        '\x79\x78\x48\x50\x42\x33\x6d',
        '\x44\x33\x6a\x50\x44\x67\x75',
        '\x43\x32\x6e\x48\x42\x47',
        '\x42\x4d\x39\x30\x6c\x77\x66\x31\x44\x67\x48\x56\x43\x4d\x4c\x36\x7a\x77\x71',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34',
        '\x7a\x78\x48\x50\x43\x33\x72\x5a\x75\x33\x4c\x55\x79\x57',
        '\x43\x32\x76\x55\x7a\x65\x6e\x56\x42\x4e\x72\x48\x79\x33\x71',
        '\x43\x32\x76\x59\x41\x77\x66\x53\x41\x78\x50\x4c\x74\x71',
        '\x7a\x67\x66\x30\x79\x73\x35\x51\x43\x57',
        '\x7a\x32\x76\x30\x72\x4e\x76\x53\x42\x66\x4c\x4c\x79\x78\x69',
        '\x42\x77\x39\x54\x7a\x77\x35\x30\x6c\x78\x72\x50\x42\x77\x76\x36\x42\x32\x35\x4c',
        '\x41\x77\x35\x4a\x42\x68\x76\x4b\x7a\x78\x6d',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55',
        '\x71\x67\x43\x55\x44\x78\x6d',
        '\x43\x78\x76\x56\x44\x67\x76\x4b',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x63\x39\x4a\x43\x4d\x76\x4b\x43\x57',
        '\x43\x33\x72\x48\x44\x68\x76\x5a',
        '\x43\x67\x66\x4a\x41\x32\x35\x48\x42\x77\x75',
        '\x6e\x4a\x79\x30\x6e\x4b\x48\x48\x7a\x67\x76\x66\x42\x71',
        '\x43\x32\x76\x5a\x43\x32\x4c\x56\x42\x47',
        '\x6e\x64\x62\x65\x44\x4b\x31\x78\x75\x4c\x71',
        '\x77\x63\x31\x78\x71\x73\x31\x63\x73\x76\x4f\x54\x74\x4b\x66\x6e\x72\x74\x4f',
        '\x42\x32\x35\x4a\x7a\x71',
        '\x43\x4d\x76\x48\x7a\x65\x7a\x50\x42\x67\x76\x74\x45\x77\x35\x4a',
        '\x43\x32\x58\x50\x79\x32\x75',
        '\x76\x4b\x76\x73\x75\x30\x4c\x70\x74\x4a\x4f\x5a\x6c\x4a\x61\x6b',
        '\x79\x78\x44\x4c\x43\x32\x39\x54\x7a\x73\x31\x57\x41\x67\x39\x55\x7a\x77\x35\x31\x42\x77\x6a\x4c\x43\x47',
        '\x42\x67\x76\x55\x7a\x33\x72\x4f',
        '\x41\x78\x6e\x65\x41\x78\x6a\x4c\x79\x33\x72\x56\x43\x4e\x4b',
        '\x7a\x67\x76\x4a\x42\x32\x72\x4c\x73\x4d\x4c\x4b',
        '\x43\x33\x72\x59\x7a\x77\x66\x54',
        '\x79\x4d\x66\x4b\x69\x67\x31\x48\x79\x57',
        '\x79\x78\x76\x30\x41\x67\x39\x59',
        '\x43\x33\x72\x4b\x42\x33\x76\x30',
        '\x6c\x49\x39\x30\x42\x78\x61\x56',
        '\x43\x68\x72\x30',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x5a\x44\x67\x66\x53\x7a\x73\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34\x47\x7a\x4d\x39\x59\x69\x67\x35\x4c\x44\x59\x62\x56\x44\x78\x72\x4e\x42\x32\x4c\x55\x7a\x59\x62\x57\x43\x4d\x76\x52\x7a\x78\x4b\x47\x79\x4e\x76\x55\x7a\x67\x58\x4c',
        '\x43\x4d\x31\x74\x45\x77\x35\x4a',
        '\x76\x67\x4c\x54\x7a\x77\x71\x47\x74\x33\x76\x30',
        '\x75\x32\x39\x4a\x41\x32\x76\x30\x69\x67\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x50\x42\x32\x34\x47\x44\x67\x4c\x54\x7a\x77\x39\x31\x44\x61',
        '\x72\x75\x35\x65\x6f\x4c\x7a\x64\x71\x76\x6a\x65',
        '\x75\x32\x76\x5a\x43\x32\x4c\x56\x42\x4b\x6e\x50\x43\x67\x48\x4c\x43\x49\x35\x4b\x42\x30\x72\x4c\x79\x33\x6a\x35\x43\x68\x72\x78\x41\x67\x4c\x5a\x43\x67\x76\x59\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71',
        '\x6c\x49\x39\x53\x41\x77\x69\x56\x7a\x67\x66\x30\x79\x77\x6a\x48\x43\x32\x75',
        '\x43\x33\x62\x53\x41\x78\x71',
        '\x7a\x32\x76\x30\x76\x67\x4c\x54\x7a\x71',
        '\x43\x33\x72\x59\x41\x77\x35\x4e',
        '\x42\x78\x6e\x4e',
        '\x72\x78\x7a\x4c\x42\x4e\x72\x66\x42\x77\x4c\x30\x44\x67\x76\x59',
        '\x44\x33\x6a\x50\x44\x67\x76\x67\x41\x77\x58\x4c\x75\x33\x4c\x55\x79\x57',
        '\x7a\x78\x6a\x59\x42\x33\x69',
        '\x72\x77\x35\x4a\x42\x33\x76\x55\x44\x67\x76\x59\x7a\x77\x71\x47\x72\x78\x6a\x59\x42\x33\x69\x36\x69\x61',
        '\x6d\x4a\x65\x33\x6e\x4a\x6d\x59\x6d\x66\x7a\x67\x72\x75\x6e\x4a\x77\x61',
        '\x44\x67\x39\x76\x43\x68\x62\x4c\x43\x4b\x6e\x48\x43\x32\x75',
        '\x43\x68\x6a\x56\x42\x77\x4c\x5a\x7a\x78\x6d',
        '\x7a\x32\x76\x30\x72\x67\x66\x30\x7a\x71',
        '\x43\x4d\x76\x4a\x44\x78\x6a\x5a\x41\x78\x7a\x4c',
        '\x43\x68\x76\x5a\x41\x61',
        '\x6d\x4a\x61\x55\x6d\x63\x34\x57\x6e\x61',
        '\x44\x67\x39\x6d\x42\x32\x6e\x48\x42\x67\x76\x75\x41\x77\x31\x4c\x75\x33\x72\x59\x41\x77\x35\x4e',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x63\x39\x4e\x43\x4d\x39\x31\x43\x61',
        '\x7a\x4d\x39\x59\x79\x32\x75',
        '\x7a\x67\x76\x4d\x79\x78\x76\x53\x44\x65\x31\x48\x45\x65\x58\x50\x43\x33\x72\x4c\x42\x4d\x76\x59\x43\x57',
        '\x72\x4b\x34\x36',
        '\x79\x78\x76\x4b\x41\x77\x38\x56\x42\x32\x44\x4e\x6f\x59\x62\x4a\x42\x32\x72\x4c\x79\x33\x6d\x39\x42\x33\x62\x31\x43\x57',
        '\x75\x65\x39\x73\x76\x61',
        '\x7a\x33\x6a\x56\x44\x78\x62\x6e\x7a\x78\x72\x48\x7a\x67\x66\x30\x79\x71',
        '\x6d\x4a\x71\x31\x6e\x5a\x79\x32\x41\x4c\x48\x62\x71\x30\x72\x68',
        '\x7a\x77\x35\x32',
        '\x44\x67\x76\x5a\x44\x61',
        '\x7a\x32\x76\x30\x72\x4d\x4c\x53\x7a\x71',
        '\x79\x32\x48\x50\x42\x67\x71',
        '\x7a\x67\x4c\x5a\x43\x67\x58\x48\x45\x75\x35\x48\x42\x77\x75',
        '\x79\x32\x66\x53\x42\x61',
        '\x43\x33\x72\x48\x79\x32\x53',
        '\x7a\x4d\x4c\x53\x7a\x71',
        '\x76\x77\x6a\x31\x42\x4e\x72\x31',
        '\x6c\x33\x72\x54\x43\x63\x39\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55\x6c\x32\x6e\x59\x7a\x77\x72\x5a\x6c\x4d\x50\x5a\x42\x32\x34',
        '\x6c\x49\x39\x53\x41\x77\x69\x56\x44\x78\x62\x4b\x79\x78\x72\x4c',
        '\x77\x31\x76\x55\x41\x67\x66\x55\x7a\x67\x58\x4c\x7a\x63\x62\x73\x7a\x77\x50\x4c\x79\x33\x72\x50\x42\x32\x35\x44\x69\x61',
        '\x6c\x49\x39\x4a\x42\x32\x35\x4d\x41\x77\x43\x55\x41\x4e\x6d',
        '\x79\x4d\x58\x31\x7a\x71',
        '\x44\x77\x35\x4f\x79\x77\x35\x4b\x42\x67\x76\x4b\x75\x4d\x76\x51\x7a\x77\x6e\x30\x41\x77\x39\x55',
        '\x71\x68\x44\x4f\x41\x78\x6e\x52\x7a\x78\x4c\x5a\x42\x32\x6e\x52\x7a\x78\x72\x5a\x6c\x32\x6a\x48\x41\x77\x58\x4c\x45\x78\x6d',
        '\x42\x67\x39\x4e',
        '\x6c\x4d\x50\x5a\x42\x32\x34',
        '\x72\x67\x76\x32\x7a\x77\x58\x56\x43\x67\x76\x59\x69\x65\x6a\x56\x44\x61',
        '\x43\x67\x66\x59\x43\x32\x75',
        '\x79\x32\x48\x48\x42\x67\x53',
        '\x44\x67\x39\x6d\x42\x33\x44\x4c\x43\x4b\x6e\x48\x43\x32\x75',
        '\x7a\x78\x7a\x4c\x42\x4e\x72\x5a',
        '\x44\x78\x6e\x4c\x43\x47',
        '\x79\x4d\x4c\x55\x7a\x61',
        '\x43\x67\x4c\x55\x42\x57',
        '\x7a\x32\x76\x30\x74\x4d\x66\x54\x7a\x71',
        '\x43\x32\x76\x55\x7a\x65\x4c\x54\x79\x77\x44\x4c\x71\x78\x6e\x74\x44\x67\x4c\x4a\x41\x32\x76\x59',
        '\x43\x33\x76\x49\x41\x4d\x76\x4a\x44\x61',
        '\x79\x78\x62\x57\x42\x68\x4b',
        '\x73\x75\x35\x67\x74\x57',
        '\x6d\x74\x47\x30\x6d\x74\x47\x31\x77\x75\x76\x78\x75\x4d\x72\x79',
        '\x43\x4d\x76\x57\x42\x68\x4b',
        '\x6d\x74\x69\x5a\x6d\x64\x65\x57\x6d\x64\x6e\x31\x75\x30\x48\x32\x42\x67\x4b',
        '\x75\x32\x76\x5a\x43\x32\x4c\x56\x42\x49\x62\x6a\x72\x63\x62\x55\x42\x33\x71\x47\x7a\x4d\x39\x31\x42\x4d\x71\x55\x69\x66\x62\x53\x7a\x77\x66\x5a\x7a\x73\x62\x48\x7a\x67\x71\x47\x42\x32\x35\x4c\x69\x67\x4c\x55\x69\x67\x6e\x56\x42\x4d\x7a\x50\x7a\x59\x35\x51\x43\x57',
        '\x7a\x32\x76\x30\x74\x4e\x76\x54\x79\x4d\x76\x59',
        '\x79\x32\x66\x57\x44\x67\x4c\x56\x42\x47',
        '\x42\x67\x76\x32\x7a\x77\x57',
        '\x79\x78\x62\x57\x42\x67\x4c\x4a\x79\x78\x72\x50\x42\x32\x34',
        '\x79\x78\x6e\x65\x42\x32\x6e\x31\x42\x77\x76\x55\x44\x61',
        '\x7a\x67\x76\x49\x44\x77\x43',
        '\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x4e\x41\x78\x6e\x30\x6c\x4d\x44\x50\x44\x67\x48\x31\x79\x4e\x76\x5a\x7a\x78\x6a\x4a\x42\x32\x35\x30\x7a\x77\x35\x30\x6c\x4d\x6e\x56\x42\x73\x39\x4c\x7a\x67\x35\x31\x44\x64\x61\x57\x6d\x73\x38',
        '\x41\x4e\x6e\x56\x42\x47',
        '\x42\x78\x72\x35\x43\x67\x75',
        '\x74\x31\x6a\x68\x6f\x4d\x35\x31\x42\x67\x57\x6b',
        '\x79\x32\x39\x55\x7a\x4d\x58\x50\x79\x33\x71',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x42\x78\x4c\x4d\x44\x77\x35\x4a',
        '\x76\x30\x66\x73\x74\x47',
        '\x71\x68\x6d\x55\x44\x32\x48\x48\x44\x68\x6e\x48\x43\x68\x61\x55\x42\x4d\x76\x30',
        '\x41\x77\x31\x48\x7a\x32\x75',
        '\x79\x77\x58\x53\x42\x32\x6d',
        '\x45\x77\x66\x59\x7a\x33\x6d\x56\x45\x77\x66\x59\x7a\x33\x6d',
        '\x71\x32\x48\x59\x42\x32\x31\x4c',
        '\x79\x4d\x66\x4b\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34',
        '\x6d\x4a\x65\x32\x43\x78\x6a\x6b\x77\x4b\x7a\x71',
        '\x41\x67\x76\x53\x43\x67\x76\x59\x6c\x4d\x50\x5a',
        '\x6e\x4a\x66\x6e\x75\x65\x39\x35\x42\x32\x71',
        '\x6c\x4d\x6a\x50\x42\x47',
        '\x41\x4d\x39\x50\x42\x47',
        '\x41\x77\x35\x30\x7a\x78\x6a\x55\x79\x78\x72\x50\x42\x32\x35\x48\x42\x61',
        '\x72\x78\x6a\x59\x42\x33\x69\x36\x69\x68\x6a\x4c\x79\x77\x71\x47\x72\x75\x6e\x70\x74\x4b\x35\x73\x72\x76\x6e\x66\x76\x61',
        '\x44\x67\x39\x74\x44\x68\x6a\x50\x42\x4d\x43',
        '\x71\x4b\x76\x68\x73\x75\x34\x36\x76\x4b\x6e\x62\x75\x4b\x71\x6b',
        '\x43\x32\x4c\x53\x7a\x77\x35\x30',
        '\x79\x32\x39\x55\x79\x32\x66\x30',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x43\x67\x58\x31\x7a\x32\x4c\x55\x74\x67\x39\x48\x7a\x67\x76\x59',
        '\x79\x32\x39\x55\x44\x67\x66\x4a\x44\x68\x6d',
        '\x43\x32\x76\x55\x7a\x66\x7a\x50\x7a\x67\x76\x56\x71\x78\x6e\x74\x44\x67\x4c\x4a\x41\x32\x76\x59',
        '\x7a\x32\x76\x30\x74\x77\x39\x55\x44\x67\x47',
        '\x79\x4d\x66\x5a\x7a\x74\x79\x30',
        '\x43\x33\x72\x56\x43\x4d\x75',
        '\x75\x4d\x76\x54\x42\x33\x7a\x50\x42\x4d\x43\x47\x42\x32\x58\x4b\x69\x67\x6e\x53\x42\x33\x6e\x4c\x7a\x63\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55',
        '\x7a\x4e\x6a\x56\x42\x71',
        '\x7a\x67\x39\x33\x42\x4d\x58\x56\x79\x77\x72\x6e\x7a\x77\x72\x50\x79\x75\x31\x4c\x43\x33\x6e\x48\x7a\x32\x75',
        '\x43\x32\x76\x59\x44\x4d\x76\x59',
        '\x71\x67\x48\x48\x43\x67\x4b\x56\x79\x4d\x39\x56\x42\x71',
        '\x42\x77\x4c\x54\x7a\x78\x72\x35\x43\x67\x75',
        '\x43\x4d\x76\x48\x7a\x67\x58\x50\x42\x4d\x75',
        '\x7a\x78\x48\x30',
        '\x79\x78\x6e\x6a\x42\x77\x66\x4e\x7a\x71',
        '\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x75\x6e\x56\x44\x77\x35\x30\x7a\x78\x6a\x66\x43\x4e\x6a\x56\x43\x4a\x4f\x47\x73\x32\x76\x35\x69\x68\x76\x5a\x7a\x77\x71\x47\x79\x77\x58\x59\x7a\x77\x66\x4b\x45\x73\x62\x56\x43\x49\x62\x55\x7a\x78\x7a\x4c\x43\x49\x62\x4d\x41\x77\x58\x53\x7a\x77\x71',
        '\x7a\x77\x35\x4b\x43\x31\x44\x50\x44\x67\x47',
        '\x7a\x77\x72\x55\x44\x78\x71',
        '\x76\x65\x4c\x75\x74\x65\x75\x36\x63\x47',
        '\x6d\x74\x43\x31\x6f\x74\x6d\x32\x6e\x4c\x50\x69\x72\x4b\x6e\x69\x41\x47',
        '\x7a\x4e\x6a\x56\x42\x75\x6a\x31\x7a\x4d\x7a\x4c\x43\x47',
        '\x42\x4d\x66\x54\x7a\x71',
        '\x6c\x49\x39\x30\x42\x78\x61',
        '\x43\x32\x76\x55\x7a\x65\x7a\x50\x42\x67\x75',
        '\x44\x77\x35\x53\x41\x77\x35\x52',
        '\x42\x77\x4c\x54\x7a\x71'
    ];
    _0x379a = function () {
        return _0x781380;
    };
    return _0x379a();
}