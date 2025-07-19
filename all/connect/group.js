const _0x3164f5 = _0x33cc;
(function (_0x1d8362, _0x35bcdb) {
    const _0x6fd7e5 = _0x33cc;
    const _0x28e1fe = _0x1d8362();
    while (!![]) {
        try {
            const _0x1b4f7f = parseInt(_0x6fd7e5(0xd9)) / 0x1 + parseInt(_0x6fd7e5(0xfc)) / 0x2 + parseInt(_0x6fd7e5(0xe5)) / 0x3 + parseInt(_0x6fd7e5(0x100)) / 0x4 * (-parseInt(_0x6fd7e5(0x104)) / 0x5) + parseInt(_0x6fd7e5(0xf9)) / 0x6 + parseInt(_0x6fd7e5(0x102)) / 0x7 * (parseInt(_0x6fd7e5(0x103)) / 0x8) + -parseInt(_0x6fd7e5(0xd7)) / 0x9;
            if (_0x1b4f7f === _0x35bcdb) {
                break;
            } else {
                _0x28e1fe['push'](_0x28e1fe['shift']());
            }
        } catch (_0x11f435) {
            _0x28e1fe['push'](_0x28e1fe['shift']());
        }
    }
}(_0x4568, 0x9e893));
const moment = require(_0x3164f5(0xe6));
function _0x33cc(_0x1ccea3, _0x3b6294) {
    const _0x4568dd = _0x4568();
    _0x33cc = function (_0x33cc12, _0x2fef61) {
        _0x33cc12 = _0x33cc12 - 0xd0;
        let _0x55649e = _0x4568dd[_0x33cc12];
        if (_0x33cc['\x57\x6a\x62\x66\x78\x67'] === undefined) {
            var _0x25a1a2 = function (_0x539e27) {
                const _0x54b27c = '\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
                let _0x616014 = '';
                let _0x264317 = '';
                for (let _0x4db9af = 0x0, _0x581162, _0x3867bf, _0x5df32e = 0x0; _0x3867bf = _0x539e27['\x63\x68\x61\x72\x41\x74'](_0x5df32e++); ~_0x3867bf && (_0x581162 = _0x4db9af % 0x4 ? _0x581162 * 0x40 + _0x3867bf : _0x3867bf, _0x4db9af++ % 0x4) ? _0x616014 += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x581162 >> (-0x2 * _0x4db9af & 0x6)) : 0x0) {
                    _0x3867bf = _0x54b27c['\x69\x6e\x64\x65\x78\x4f\x66'](_0x3867bf);
                }
                for (let _0x5700cc = 0x0, _0x498acf = _0x616014['\x6c\x65\x6e\x67\x74\x68']; _0x5700cc < _0x498acf; _0x5700cc++) {
                    _0x264317 += '\x25' + ('\x30\x30' + _0x616014['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x5700cc)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
                }
                return decodeURIComponent(_0x264317);
            };
            _0x33cc['\x50\x72\x4a\x46\x4b\x65'] = _0x25a1a2;
            _0x1ccea3 = arguments;
            _0x33cc['\x57\x6a\x62\x66\x78\x67'] = !![];
        }
        const _0x3a346a = _0x4568dd[0x0];
        const _0x55a1c8 = _0x33cc12 + _0x3a346a;
        const _0x23d925 = _0x1ccea3[_0x55a1c8];
        if (!_0x23d925) {
            _0x55649e = _0x33cc['\x50\x72\x4a\x46\x4b\x65'](_0x55649e);
            _0x1ccea3[_0x55a1c8] = _0x55649e;
        } else {
            _0x55649e = _0x23d925;
        }
        return _0x55649e;
    };
    return _0x33cc(_0x1ccea3, _0x3b6294);
}
const handledGroupEvents = new Set();
module[_0x3164f5(0xda)] = function groupParticipantsUpdate(_0x5700cc) {
    const _0x12376c = _0x3164f5;
    _0x5700cc['\x65\x76'][_0x12376c(0xd6)](_0x12376c(0xdb));
    _0x5700cc['\x65\x76']['\x6f\x6e'](_0x12376c(0xdb), async _0x498acf => {
        const _0x11b6dd = _0x12376c;
        try {
            const _0x4131af = _0x498acf['\x69\x64'];
            const _0x37300c = _0x4131af + '\x2d' + _0x498acf[_0x11b6dd(0xe1)] + '\x2d' + _0x498acf[_0x11b6dd(0xf8)]?.['\x6a\x6f\x69\x6e']('\x2c');
            if (handledGroupEvents[_0x11b6dd(0xf7)](_0x37300c))
                return;
            handledGroupEvents[_0x11b6dd(0xd0)](_0x37300c);
            setTimeout(() => handledGroupEvents[_0x11b6dd(0xe4)](_0x37300c), 0x2710);
            await new Promise(_0x1d0afb => setTimeout(_0x1d0afb, 0xc8));
            const _0x105c67 = await _0x5700cc[_0x11b6dd(0xde)](_0x4131af);
            const _0x22f578 = _0x105c67[_0x11b6dd(0xf5)];
            const _0x1db869 = _0x105c67[_0x11b6dd(0xfa)] || _0x11b6dd(0xef);
            const _0x6c8649 = moment()['\x74\x7a'](_0x11b6dd(0xff))[_0x11b6dd(0xe8)](_0x11b6dd(0xed));
            const _0x506052 = moment()['\x74\x7a']('\x41\x66\x72\x69\x63\x61\x2f\x4c\x61\x67\x6f\x73')['\x66\x6f\x72\x6d\x61\x74'](_0x11b6dd(0xeb));
            const _0x1f26ed = _0x105c67[_0x11b6dd(0xf8)]['\x6c\x65\x6e\x67\x74\x68'];
            const _0x15071c = global['\x64\x62']['\x67\x72\x6f\x75\x70\x73']?.[_0x4131af]?.[_0x11b6dd(0xdf)] || process[_0x11b6dd(0xe3)]['\x57\x45\x4c\x43\x4f\x4d\x45'] === _0x11b6dd(0xdd);
            const _0x262270 = global['\x64\x62'][_0x11b6dd(0x10a)]?.[_0x4131af]?.[_0x11b6dd(0xdc)] || process['\x65\x6e\x76'][_0x11b6dd(0xf0)] === _0x11b6dd(0xdd);
            for (const _0x275c17 of _0x498acf['\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73']) {
                const _0x3eb14e = _0x275c17['\x73\x70\x6c\x69\x74']('\x40')[0x0];
                let _0x4f2cff = _0x11b6dd(0xd4);
                try {
                    _0x4f2cff = await _0x5700cc[_0x11b6dd(0x105)](_0x275c17, _0x11b6dd(0xe2));
                } catch {
                }
                const _0x1ed139 = _0x41095d => _0x41095d[_0x11b6dd(0xfe)](/@user/gi, '\x40' + _0x3eb14e)['\x72\x65\x70\x6c\x61\x63\x65'](/@group/gi, _0x22f578)['\x72\x65\x70\x6c\x61\x63\x65'](/@desc/gi, _0x1db869)[_0x11b6dd(0xfe)](/@date/gi, _0x6c8649)[_0x11b6dd(0xfe)](/@time/gi, _0x506052)[_0x11b6dd(0xfe)](/@count/gi, _0x1f26ed[_0x11b6dd(0xd5)]());
                if (_0x498acf['\x61\x63\x74\x69\x6f\x6e'] === _0x11b6dd(0xd0) && _0x15071c) {
                    const _0x8eb053 = global['\x64\x62'][_0x11b6dd(0x10a)]?.[_0x4131af]?.[_0x11b6dd(0xe9)] || process['\x65\x6e\x76'][_0x11b6dd(0xd8)] || '\ud83d\udc4b\x20\x48\x65\x6c\x6c\x6f\x20\x40\x75\x73\x65\x72\x2c\x20\x77\x65\x6c\x63\x6f\x6d\x65\x20\x74\x6f\x20\x2a\x40\x67\x72\x6f\x75\x70\x2a\x0a\x40\x64\x65\x73\x63';
                    const _0x53ef6b = _0x1ed139(_0x8eb053);
                    const _0x4e426f = _0x8eb053[_0x11b6dd(0x101)](_0x11b6dd(0xd3));
                    const _0xb76a79 = {};
                    _0xb76a79[_0x11b6dd(0xe7)] = _0x4f2cff;
                    const _0x3b9025 = {};
                    _0x3b9025[_0x11b6dd(0xe2)] = _0xb76a79;
                    _0x3b9025[_0x11b6dd(0xf3)] = _0x53ef6b;
                    _0x3b9025['\x6d\x65\x6e\x74\x69\x6f\x6e\x73'] = [_0x275c17];
                    const _0x3f350e = {};
                    _0x3f350e[_0x11b6dd(0x109)] = _0x53ef6b;
                    _0x3f350e[_0x11b6dd(0x108)] = [_0x275c17];
                    await _0x5700cc['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x4131af, _0x4e426f ? _0x3b9025 : _0x3f350e);
                }
                if (_0x498acf[_0x11b6dd(0xe1)] === _0x11b6dd(0xfd) && _0x262270) {
                    const _0x556967 = global['\x64\x62'][_0x11b6dd(0x10a)]?.[_0x4131af]?.['\x73\x65\x74\x67\x6f\x6f\x64\x62\x79\x65'] || process[_0x11b6dd(0xe3)]['\x47\x4f\x4f\x44\x42\x59\x45\x5f\x4d\x53\x47'] || _0x11b6dd(0xea);
                    const _0x2f20b7 = _0x1ed139(_0x556967);
                    const _0x2b0ac6 = _0x556967['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x40\x70\x70');
                    const _0x404677 = {};
                    _0x404677[_0x11b6dd(0xe7)] = _0x4f2cff;
                    const _0x1fc4ef = {};
                    _0x1fc4ef[_0x11b6dd(0xe2)] = _0x404677;
                    _0x1fc4ef[_0x11b6dd(0xf3)] = _0x2f20b7;
                    _0x1fc4ef[_0x11b6dd(0x108)] = [_0x275c17];
                    const _0x5341c5 = {};
                    _0x5341c5[_0x11b6dd(0x109)] = _0x2f20b7;
                    _0x5341c5[_0x11b6dd(0x108)] = [_0x275c17];
                    await _0x5700cc['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x4131af, _0x2b0ac6 ? _0x1fc4ef : _0x5341c5);
                }
                if (global['\x64\x62']['\x67\x72\x6f\x75\x70\x73']?.[_0x4131af]?.[_0x11b6dd(0xf2)]) {
                    const _0x4ad629 = _0x498acf[_0x11b6dd(0xee)]?.[_0x11b6dd(0xd2)]('\x40')[0x0] || _0x11b6dd(0xf1);
                    if (_0x498acf[_0x11b6dd(0xe1)] === '\x70\x72\x6f\x6d\x6f\x74\x65') {
                        const _0x4318bf = {};
                        _0x4318bf[_0x11b6dd(0x109)] = '\x40' + _0x3eb14e + '\x20\x77\x61\x73\x20\x70\x72\x6f\x6d\x6f\x74\x65\x64\x20\x62\x79\x20\x40' + _0x4ad629;
                        _0x4318bf['\x6d\x65\x6e\x74\x69\x6f\x6e\x73'] = [
                            _0x275c17,
                            _0x498acf['\x61\x75\x74\x68\x6f\x72']
                        ];
                        await _0x5700cc[_0x11b6dd(0x107)](_0x4131af, _0x4318bf);
                    } else if (_0x498acf[_0x11b6dd(0xe1)] === _0x11b6dd(0xf4)) {
                        const _0x2266d8 = {};
                        _0x2266d8[_0x11b6dd(0x109)] = '\x40' + _0x3eb14e + _0x11b6dd(0xe0) + _0x4ad629;
                        _0x2266d8[_0x11b6dd(0x108)] = [
                            _0x275c17,
                            _0x498acf[_0x11b6dd(0xee)]
                        ];
                        await _0x5700cc['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x4131af, _0x2266d8);
                    }
                }
            }
        } catch (_0x44c740) {
            const _0x2008c5 = String(_0x44c740?.[_0x11b6dd(0xec)] || _0x44c740);
            if (!_0x2008c5[_0x11b6dd(0xd1)]()['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x11b6dd(0xfb))) {
                log('\x45\x52\x52\x4f\x52', _0x11b6dd(0xf6) + (_0x44c740[_0x11b6dd(0x106)] || _0x2008c5));
            }
        }
    });
};
function _0x4568() {
    const _0x6a275e = [
        '\x7a\x33\x6a\x56\x44\x78\x61\x54\x43\x67\x66\x59\x44\x67\x4c\x4a\x41\x78\x62\x48\x42\x4e\x72\x5a\x6c\x4e\x76\x57\x7a\x67\x66\x30\x7a\x71',
        '\x7a\x32\x39\x56\x7a\x67\x6a\x35\x7a\x71',
        '\x44\x68\x6a\x31\x7a\x71',
        '\x7a\x33\x6a\x56\x44\x78\x62\x6e\x7a\x78\x72\x48\x7a\x67\x66\x30\x79\x71',
        '\x44\x32\x76\x53\x79\x32\x39\x54\x7a\x71',
        '\x69\x68\x44\x48\x43\x59\x62\x4b\x7a\x77\x31\x56\x44\x67\x76\x4b\x69\x67\x6a\x35\x69\x65\x61',
        '\x79\x77\x6e\x30\x41\x77\x39\x55',
        '\x41\x77\x31\x48\x7a\x32\x75',
        '\x7a\x77\x35\x32',
        '\x7a\x67\x76\x53\x7a\x78\x72\x4c',
        '\x6d\x5a\x47\x35\x6e\x74\x47\x57\x42\x4d\x76\x71\x43\x78\x76\x55',
        '\x42\x77\x39\x54\x7a\x77\x35\x30\x6c\x78\x72\x50\x42\x77\x76\x36\x42\x32\x35\x4c',
        '\x44\x78\x6a\x53',
        '\x7a\x4d\x39\x59\x42\x77\x66\x30',
        '\x43\x32\x76\x30\x44\x32\x76\x53\x79\x32\x39\x54\x7a\x71',
        '\x38\x6a\x2b\x72\x49\x59\x62\x61\x44\x78\x6e\x4c\x43\x49\x62\x53\x7a\x77\x7a\x30\x69\x63\x50\x61\x7a\x33\x6a\x56\x44\x78\x61\x51',
        '\x73\x65\x47\x36\x42\x77\x30\x36\x43\x33\x6d',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71',
        '\x72\x65\x71\x56\x74\x75\x30\x56\x77\x76\x4c\x7a\x77\x71',
        '\x79\x78\x76\x30\x41\x67\x39\x59',
        '\x74\x4d\x38\x47\x7a\x67\x76\x5a\x79\x33\x6a\x50\x43\x68\x72\x50\x42\x32\x34\x55',
        '\x72\x30\x39\x70\x72\x65\x6a\x7a\x72\x71',
        '\x44\x77\x35\x52\x42\x4d\x39\x33\x42\x47',
        '\x7a\x78\x7a\x4c\x42\x4e\x72\x5a',
        '\x79\x32\x66\x57\x44\x67\x4c\x56\x42\x47',
        '\x7a\x67\x76\x54\x42\x33\x72\x4c',
        '\x43\x33\x76\x49\x41\x4d\x76\x4a\x44\x61',
        '\x72\x33\x6a\x56\x44\x78\x61\x47\x73\x67\x66\x55\x7a\x67\x58\x4c\x43\x4a\x4f\x47',
        '\x41\x67\x66\x5a',
        '\x43\x67\x66\x59\x44\x67\x4c\x4a\x41\x78\x62\x48\x42\x4e\x72\x5a',
        '\x6d\x74\x79\x33\x6f\x74\x71\x30\x6f\x67\x76\x36\x41\x4e\x44\x35\x43\x57',
        '\x7a\x67\x76\x5a\x79\x57',
        '\x43\x4d\x66\x30\x7a\x73\x31\x56\x44\x4d\x76\x59\x42\x67\x4c\x54\x41\x78\x71',
        '\x6d\x4a\x75\x31\x6e\x5a\x71\x32\x6e\x4c\x44\x68\x73\x77\x44\x79\x76\x47',
        '\x43\x4d\x76\x54\x42\x33\x7a\x4c',
        '\x43\x4d\x76\x57\x42\x67\x66\x4a\x7a\x71',
        '\x71\x77\x7a\x59\x41\x77\x6e\x48\x6c\x30\x58\x48\x7a\x32\x39\x5a',
        '\x6e\x65\x48\x5a\x73\x67\x4c\x56\x75\x71',
        '\x41\x77\x35\x4a\x42\x68\x76\x4b\x7a\x78\x6d',
        '\x6e\x74\x6d\x59\x42\x4d\x66\x31\x7a\x78\x76\x59',
        '\x6e\x64\x61\x59\x6e\x74\x7a\x33\x73\x32\x6a\x53\x76\x65\x38',
        '\x6d\x4a\x69\x31\x6f\x64\x47\x5a\x6e\x76\x72\x63\x42\x4d\x31\x30\x45\x71',
        '\x43\x68\x6a\x56\x7a\x4d\x4c\x53\x7a\x76\x62\x50\x79\x33\x72\x31\x43\x4d\x76\x76\x43\x4d\x57',
        '\x43\x33\x72\x48\x79\x32\x53',
        '\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x32\x75',
        '\x42\x77\x76\x55\x44\x67\x4c\x56\x42\x4e\x6d',
        '\x44\x67\x76\x34\x44\x61',
        '\x7a\x33\x6a\x56\x44\x78\x62\x5a',
        '\x79\x77\x72\x4b',
        '\x44\x67\x39\x6d\x42\x33\x44\x4c\x43\x4b\x6e\x48\x43\x32\x75',
        '\x43\x33\x62\x53\x41\x78\x71',
        '\x71\x68\x62\x57',
        '\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x4a\x7a\x67\x34\x55\x43\x67\x4c\x34\x79\x77\x6a\x48\x45\x73\x35\x4a\x42\x32\x30\x56\x43\x67\x48\x56\x44\x67\x38\x56\x6d\x4a\x61\x58\x6e\x73\x38\x58\x6d\x63\x38\x57\x6e\x73\x38\x59\x6d\x49\x38\x5a\x6e\x59\x39\x49\x42\x67\x66\x55\x41\x59\x31\x57\x43\x4d\x39\x4d\x41\x77\x58\x4c\x6c\x78\x62\x50\x79\x33\x72\x31\x43\x4d\x75\x54\x6f\x74\x43\x5a\x6e\x64\x79\x57\x78\x5a\x4b\x32\x6d\x66\x38\x33\x6d\x4a\x61\x55\x43\x67\x35\x4e',
        '\x44\x67\x39\x74\x44\x68\x6a\x50\x42\x4d\x43',
        '\x43\x4d\x76\x54\x42\x33\x7a\x4c\x71\x77\x58\x53\x74\x67\x4c\x5a\x44\x67\x76\x55\x7a\x78\x6a\x5a',
        '\x6d\x74\x6d\x33\x6d\x4a\x6d\x34\x6f\x64\x72\x51\x42\x67\x58\x7a\x45\x4e\x79',
        '\x76\x30\x76\x6d\x71\x30\x39\x6e\x72\x76\x39\x6e\x75\x30\x43',
        '\x6e\x74\x75\x31\x6d\x64\x43\x5a\x42\x4b\x44\x55\x74\x68\x4c\x4e',
        '\x7a\x78\x48\x57\x42\x33\x6a\x30\x43\x57'
    ];
    _0x4568 = function () {
        return _0x6a275e;
    };
    return _0x4568();
    }
