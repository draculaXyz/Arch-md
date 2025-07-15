const _0x42d568 = _0x306e;
(function (_0x2152b3, _0x3a3805) {
    const _0x2ffdef = _0x306e;
    const _0x2cb6a2 = _0x2152b3();
    while (!![]) {
        try {
            const _0x2be190 = parseInt(_0x2ffdef(0xd3)) / 0x1 + -parseInt(_0x2ffdef(0xdb)) / 0x2 * (parseInt(_0x2ffdef(0xd6)) / 0x3) + -parseInt(_0x2ffdef(0xd2)) / 0x4 * (-parseInt(_0x2ffdef(0xc7)) / 0x5) + -parseInt(_0x2ffdef(0xd4)) / 0x6 * (-parseInt(_0x2ffdef(0xdd)) / 0x7) + parseInt(_0x2ffdef(0xde)) / 0x8 * (-parseInt(_0x2ffdef(0xe0)) / 0x9) + -parseInt(_0x2ffdef(0xcf)) / 0xa * (parseInt(_0x2ffdef(0xcb)) / 0xb) + parseInt(_0x2ffdef(0xd9)) / 0xc;
            if (_0x2be190 === _0x3a3805) {
                break;
            } else {
                _0x2cb6a2['push'](_0x2cb6a2['shift']());
            }
        } catch (_0x4b26f4) {
            _0x2cb6a2['push'](_0x2cb6a2['shift']());
        }
    }
}(_0x474e, 0x47cb8));
const fs = require('\x66\x73');
const path = require(_0x42d568(0xcd));
function loadPluginsFromDisk(_0x1f49a3) {
    const _0x27dc40 = _0x42d568;
    const _0x215778 = [];
    try {
        const _0x3c800f = fs[_0x27dc40(0xdf)](_0x1f49a3)[_0x27dc40(0xe1)](_0x560e1e => _0x560e1e[_0x27dc40(0xc8)](_0x27dc40(0xca)));
        for (const _0x21df00 of _0x3c800f) {
            try {
                const _0x2cf6f5 = require(path[_0x27dc40(0xd8)](_0x1f49a3, _0x21df00));
                if (Array[_0x27dc40(0xd7)](_0x2cf6f5))
                    _0x215778[_0x27dc40(0xd1)](..._0x2cf6f5);
                else
                    _0x215778[_0x27dc40(0xd1)](_0x2cf6f5);
            } catch (_0x3f972e) {
                log('\x45\x52\x52\x4f\x52', _0x27dc40(0xdc) + _0x21df00 + _0x27dc40(0xd0) + _0x3f972e[_0x27dc40(0xc9)]);
            }
        }
    } catch (_0x400674) {
        log(_0x27dc40(0xce), _0x27dc40(0xe2) + _0x400674[_0x27dc40(0xc9)]);
    }
    return _0x215778;
}
function loadPluginsFromDb(_0xd89e4c) {
    const _0x2c8ba8 = _0x42d568;
    const _0x4b6e2e = [];
    if (_0xd89e4c?.[_0x2c8ba8(0xd5)] && typeof _0xd89e4c[_0x2c8ba8(0xd5)] === '\x6f\x62\x6a\x65\x63\x74') {
        for (const [_0x35e021, _0x50dab0] of Object['\x65\x6e\x74\x72\x69\x65\x73'](_0xd89e4c['\x70\x6c\x75\x67\x69\x6e\x73'])) {
            try {
                const _0x44819d = eval(_0x50dab0);
                if (Array[_0x2c8ba8(0xd7)](_0x44819d))
                    _0x4b6e2e[_0x2c8ba8(0xd1)](..._0x44819d);
                else
                    _0x4b6e2e[_0x2c8ba8(0xd1)](_0x44819d);
            } catch (_0x5cd1e1) {
                log(_0x2c8ba8(0xce), _0x2c8ba8(0xcc) + _0x35e021 + '\x20\u2014\x20' + _0x5cd1e1[_0x2c8ba8(0xc9)]);
            }
        }
    }
    return _0x4b6e2e;
}
function pluginLoader(_0x5da22f, _0x5a3f9c) {
    const _0x7846a = loadPluginsFromDisk(_0x5da22f);
    const _0x146f42 = loadPluginsFromDb(_0x5a3f9c);
    return [
        ..._0x7846a,
        ..._0x146f42
    ];
}
function _0x474e() {
    const _0x1c90dc = [
        '\x6e\x33\x6a\x36\x45\x4d\x35\x53\x74\x61',
        '\x6f\x74\x47\x58\x6f\x74\x75\x59\x74\x67\x4c\x53\x43\x4c\x6e\x71',
        '\x43\x4d\x76\x48\x7a\x67\x72\x50\x43\x4c\x6e\x35\x42\x4d\x6d',
        '\x6d\x5a\x7a\x79\x76\x78\x6e\x66\x72\x31\x43',
        '\x7a\x4d\x4c\x53\x44\x67\x76\x59',
        '\x77\x33\x48\x44\x69\x65\x7a\x48\x41\x77\x58\x4c\x7a\x63\x62\x30\x42\x59\x62\x5a\x79\x32\x66\x55\x69\x68\x62\x53\x44\x77\x44\x50\x42\x49\x62\x4b\x41\x78\x6a\x4c\x79\x33\x72\x56\x43\x4e\x4b\x36\x69\x61',
        '\x6d\x74\x69\x57\x6d\x74\x62\x6c\x7a\x31\x44\x57\x43\x78\x69',
        '\x7a\x77\x35\x4b\x43\x31\x44\x50\x44\x67\x47',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71',
        '\x6c\x4d\x50\x5a',
        '\x6e\x4a\x75\x32\x6f\x74\x6a\x66\x7a\x67\x72\x6d\x7a\x4b\x4f',
        '\x77\x33\x48\x44\x69\x65\x7a\x48\x41\x77\x58\x4c\x7a\x63\x62\x30\x42\x59\x62\x53\x42\x32\x66\x4b\x69\x65\x72\x63\x69\x68\x62\x53\x44\x77\x44\x50\x42\x4a\x4f\x47',
        '\x43\x67\x66\x30\x41\x61',
        '\x72\x76\x6a\x73\x74\x31\x69',
        '\x6e\x64\x62\x74\x77\x68\x6e\x52\x7a\x77\x65',
        '\x69\x6f\x6b\x61\x4c\x63\x61',
        '\x43\x68\x76\x5a\x41\x61',
        '\x6e\x4a\x61\x57\x7a\x33\x6e\x4c\x7a\x33\x72\x53',
        '\x6d\x4a\x69\x31\x6e\x64\x61\x5a\x43\x67\x44\x63\x77\x4c\x76\x70',
        '\x6d\x74\x79\x59\x6d\x4a\x69\x33\x6e\x67\x44\x55\x41\x75\x58\x73\x72\x47',
        '\x43\x67\x58\x31\x7a\x32\x4c\x55\x43\x57',
        '\x6d\x74\x75\x30\x6d\x4a\x43\x5a\x6f\x66\x50\x73\x42\x4e\x48\x4f\x74\x61',
        '\x41\x78\x6e\x62\x43\x4e\x6a\x48\x45\x71',
        '\x41\x4d\x39\x50\x42\x47',
        '\x6e\x74\x79\x57\x6e\x74\x69\x57\x6d\x67\x50\x76\x7a\x77\x50\x67\x74\x71',
        '\x7a\x78\x48\x57\x42\x33\x6a\x30\x43\x57',
        '\x6d\x4d\x7a\x50\x73\x4c\x4c\x53\x73\x57',
        '\x77\x33\x48\x44\x69\x65\x7a\x48\x41\x77\x58\x4c\x7a\x63\x62\x30\x42\x59\x62\x53\x42\x32\x66\x4b\x69\x68\x62\x53\x44\x77\x44\x50\x42\x4a\x4f\x47'
    ];
    _0x474e = function () {
        return _0x1c90dc;
    };
    return _0x474e();
}
function _0x306e(_0x19aff7, _0xb27010) {
    const _0x474ebb = _0x474e();
    _0x306e = function (_0x306ed6, _0x52f3d3) {
        _0x306ed6 = _0x306ed6 - 0xc7;
        let _0x3a53dc = _0x474ebb[_0x306ed6];
        if (_0x306e['\x74\x48\x75\x42\x57\x48'] === undefined) {
            var _0x45e26f = function (_0x1f49a3) {
                const _0x215778 = '\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
                let _0x3c800f = '';
                let _0x560e1e = '';
                for (let _0x21df00 = 0x0, _0x2cf6f5, _0x3f972e, _0x400674 = 0x0; _0x3f972e = _0x1f49a3['\x63\x68\x61\x72\x41\x74'](_0x400674++); ~_0x3f972e && (_0x2cf6f5 = _0x21df00 % 0x4 ? _0x2cf6f5 * 0x40 + _0x3f972e : _0x3f972e, _0x21df00++ % 0x4) ? _0x3c800f += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x2cf6f5 >> (-0x2 * _0x21df00 & 0x6)) : 0x0) {
                    _0x3f972e = _0x215778['\x69\x6e\x64\x65\x78\x4f\x66'](_0x3f972e);
                }
                for (let _0xd89e4c = 0x0, _0x4b6e2e = _0x3c800f['\x6c\x65\x6e\x67\x74\x68']; _0xd89e4c < _0x4b6e2e; _0xd89e4c++) {
                    _0x560e1e += '\x25' + ('\x30\x30' + _0x3c800f['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0xd89e4c)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
                }
                return decodeURIComponent(_0x560e1e);
            };
            _0x306e['\x6a\x6b\x67\x67\x53\x4b'] = _0x45e26f;
            _0x19aff7 = arguments;
            _0x306e['\x74\x48\x75\x42\x57\x48'] = !![];
        }
        const _0x12d4a6 = _0x474ebb[0x0];
        const _0x5c2a52 = _0x306ed6 + _0x12d4a6;
        const _0x513068 = _0x19aff7[_0x5c2a52];
        if (!_0x513068) {
            _0x3a53dc = _0x306e['\x6a\x6b\x67\x67\x53\x4b'](_0x3a53dc);
            _0x19aff7[_0x5c2a52] = _0x3a53dc;
        } else {
            _0x3a53dc = _0x513068;
        }
        return _0x3a53dc;
    };
    return _0x306e(_0x19aff7, _0xb27010);
}
module[_0x42d568(0xda)] = pluginLoader;
