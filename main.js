const _0x333d56 = _0x3685;
(function (_0x457327, _0x55f76e) {
    const _0x613b39 = _0x3685;
    const _0x1393b5 = _0x457327();
    while (!![]) {
        try {
            const _0x54542f = -parseInt(_0x613b39(0x225)) / 0x1 * (-parseInt(_0x613b39(0x1ff)) / 0x2) + parseInt(_0x613b39(0x223)) / 0x3 * (-parseInt(_0x613b39(0x2be)) / 0x4) + -parseInt(_0x613b39(0x234)) / 0x5 + parseInt(_0x613b39(0x1da)) / 0x6 * (parseInt(_0x613b39(0x220)) / 0x7) + -parseInt(_0x613b39(0x1dc)) / 0x8 + parseInt(_0x613b39(0x21d)) / 0x9 * (parseInt(_0x613b39(0x1bc)) / 0xa) + parseInt(_0x613b39(0x294)) / 0xb * (parseInt(_0x613b39(0x284)) / 0xc);
            if (_0x54542f === _0x55f76e) {
                break;
            } else {
                _0x1393b5['push'](_0x1393b5['shift']());
            }
        } catch (_0x3de838) {
            _0x1393b5['push'](_0x1393b5['shift']());
        }
    }
}(_0x55d3, 0xdb707));
const originalLog = console[_0x333d56(0x24b)];
const originalError = console[_0x333d56(0x272)];
const originalDebug = console['\x64\x65\x62\x75\x67'];
const originalStdout = process[_0x333d56(0x270)]['\x77\x72\x69\x74\x65'];
const originalStderr = process['\x73\x74\x64\x65\x72\x72']['\x77\x72\x69\x74\x65'];
function isNoisy(_0x5ef6e6) {
    const _0x40a12c = _0x333d56;
    return typeof _0x5ef6e6 === '\x73\x74\x72\x69\x6e\x67' && (_0x5ef6e6['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x40a12c(0x296)) || _0x5ef6e6[_0x40a12c(0x277)]('\x52\x65\x6d\x6f\x76\x69\x6e\x67\x20\x6f\x6c\x64\x20\x63\x6c\x6f\x73\x65\x64\x20\x73\x65\x73\x73\x69\x6f\x6e') || _0x5ef6e6['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x40a12c(0x21e)) || _0x5ef6e6['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x40a12c(0x20f)) || _0x5ef6e6[_0x40a12c(0x277)](_0x40a12c(0x26b)) || _0x5ef6e6[_0x40a12c(0x277)](_0x40a12c(0x1d0)) || _0x5ef6e6[_0x40a12c(0x277)](_0x40a12c(0x298)) || _0x5ef6e6['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x40a12c(0x1b7)) || _0x5ef6e6['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x53\x65\x73\x73\x69\x6f\x6e\x43\x69\x70\x68\x65\x72\x2e\x64\x6f\x44\x65\x63\x72\x79\x70\x74\x57\x68\x69\x73\x70\x65\x72\x4d\x65\x73\x73\x61\x67\x65') || _0x5ef6e6['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x40a12c(0x2b3)));
}
console['\x6c\x6f\x67'] = (..._0x29d2be) => {
    const _0x2f1e3a = _0x333d56;
    if (isNoisy(_0x29d2be[0x0]))
        return;
    originalLog[_0x2f1e3a(0x2b1)](console, _0x29d2be);
};
console[_0x333d56(0x272)] = (..._0x7ad937) => {
    const _0x4fd67d = _0x333d56;
    if (isNoisy(_0x7ad937[0x0]))
        return;
    originalError[_0x4fd67d(0x2b1)](console, _0x7ad937);
};
console['\x64\x65\x62\x75\x67'] = (..._0x41f04f) => {
    const _0x2dcb32 = _0x333d56;
    if (isNoisy(_0x41f04f[0x0]))
        return;
    originalDebug[_0x2dcb32(0x2b1)](console, _0x41f04f);
};
process[_0x333d56(0x270)]['\x77\x72\x69\x74\x65'] = (_0x350108, _0x4b198d, _0x547311) => {
    const _0x255964 = _0x333d56;
    if (isNoisy(_0x350108))
        return !![];
    return originalStdout[_0x255964(0x224)](process['\x73\x74\x64\x6f\x75\x74'], _0x350108, _0x4b198d, _0x547311);
};
process[_0x333d56(0x20c)]['\x77\x72\x69\x74\x65'] = (_0x9a069a, _0x566667, _0x281944) => {
    const _0x187a3e = _0x333d56;
    if (isNoisy(_0x9a069a))
        return !![];
    return originalStderr[_0x187a3e(0x224)](process[_0x187a3e(0x20c)], _0x9a069a, _0x566667, _0x281944);
};
require(_0x333d56(0x29d))();
require('\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73');
const chalk = require(_0x333d56(0x258));
function _0x3685(_0x12685d, _0x513068) {
    const _0x55d3fa = _0x55d3();
    _0x3685 = function (_0x3685d8, _0x51b765) {
        _0x3685d8 = _0x3685d8 - 0x19f;
        let _0x37b6f9 = _0x55d3fa[_0x3685d8];
        if (_0x3685['\x78\x75\x59\x63\x61\x44'] === undefined) {
            var _0x29fa42 = function (_0x44e911) {
                const _0x315186 = '\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
                let _0x5f2f62 = '';
                let _0x60f10b = '';
                for (let _0x2a862f = 0x0, _0x5b52b4, _0x3515eb, _0x43ef55 = 0x0; _0x3515eb = _0x44e911['\x63\x68\x61\x72\x41\x74'](_0x43ef55++); ~_0x3515eb && (_0x5b52b4 = _0x2a862f % 0x4 ? _0x5b52b4 * 0x40 + _0x3515eb : _0x3515eb, _0x2a862f++ % 0x4) ? _0x5f2f62 += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x5b52b4 >> (-0x2 * _0x2a862f & 0x6)) : 0x0) {
                    _0x3515eb = _0x315186['\x69\x6e\x64\x65\x78\x4f\x66'](_0x3515eb);
                }
                for (let _0x25a20 = 0x0, _0x2413bb = _0x5f2f62['\x6c\x65\x6e\x67\x74\x68']; _0x25a20 < _0x2413bb; _0x25a20++) {
                    _0x60f10b += '\x25' + ('\x30\x30' + _0x5f2f62['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x25a20)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
                }
                return decodeURIComponent(_0x60f10b);
            };
            _0x3685['\x63\x71\x70\x72\x52\x51'] = _0x29fa42;
            _0x12685d = arguments;
            _0x3685['\x78\x75\x59\x63\x61\x44'] = !![];
        }
        const _0x5cf85a = _0x55d3fa[0x0];
        const _0x19bf21 = _0x3685d8 + _0x5cf85a;
        const _0x4d7523 = _0x12685d[_0x19bf21];
        if (!_0x4d7523) {
            _0x37b6f9 = _0x3685['\x63\x71\x70\x72\x52\x51'](_0x37b6f9);
            _0x12685d[_0x19bf21] = _0x37b6f9;
        } else {
            _0x37b6f9 = _0x4d7523;
        }
        return _0x37b6f9;
    };
    return _0x3685(_0x12685d, _0x513068);
}
const handleMessage = require('\x2e\x2f\x68\x61\x6e\x64\x6c\x65\x72\x2e\x6a\x73');
global[_0x333d56(0x24b)] = function (_0x54e371, _0x14cabd) {
    const _0x3e6d68 = _0x333d56;
    const _0x11b0ff = new Date();
    const _0x355f48 = _0x11b0ff['\x67\x65\x74\x44\x61\x74\x65']()['\x74\x6f\x53\x74\x72\x69\x6e\x67']()[_0x3e6d68(0x1bf)](0x2, '\x30');
    const _0x5110e7 = (_0x11b0ff['\x67\x65\x74\x4d\x6f\x6e\x74\x68']() + 0x1)[_0x3e6d68(0x226)]()[_0x3e6d68(0x1bf)](0x2, '\x30');
    const _0x907664 = _0x11b0ff['\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72']()[_0x3e6d68(0x226)]()['\x73\x6c\x69\x63\x65'](-0x2);
    const _0x3a73a4 = _0x11b0ff[_0x3e6d68(0x1b1)](_0x3e6d68(0x1a0)) + ('\x20' + _0x355f48 + '\x2d' + _0x5110e7 + '\x2d' + _0x907664);
    const _0x30e3f3 = _0x54e371[_0x3e6d68(0x1b0)]();
    const _0x207215 = _0x30e3f3 === _0x3e6d68(0x26a) ? chalk[_0x3e6d68(0x201)](_0x30e3f3) : _0x30e3f3 === '\x45\x52\x52\x4f\x52' ? chalk['\x72\x65\x64'](_0x30e3f3) : _0x30e3f3;
    console[_0x3e6d68(0x24b)](_0x207215 + '\x20\x5b' + _0x3a73a4 + '\x5d\x3a', chalk[_0x3e6d68(0x1d2)](_0x14cabd));
};
require(_0x333d56(0x2c0))[_0x333d56(0x287)]['\x64\x65\x66\x61\x75\x6c\x74\x4d\x61\x78\x4c\x69\x73\x74\x65\x6e\x65\x72\x73'] = 0x258;
const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    makeInMemoryStore,
    jidDecode,
    downloadContentFromMessage,
    delay
} = require(_0x333d56(0x1a4));
const pino = require(_0x333d56(0x23c));
const {delArrSave} = require(_0x333d56(0x28d));
const fs = require('\x66\x73');
const path = require(_0x333d56(0x1ee));
function _0x55d3() {
    const _0x715a03 = [
        '\x6d\x74\x44\x53\x7a\x4d\x35\x63\x7a\x77\x6d',
        '\x44\x67\x39\x74\x44\x68\x6a\x50\x42\x4d\x43',
        '\x79\x77\x35\x30\x41\x77\x6e\x48\x42\x67\x57',
        '\x72\x65\x69\x47\x75\x32\x66\x32\x7a\x74\x4f\x47',
        '\x7a\x78\x48\x50\x43\x33\x72\x5a\x75\x33\x4c\x55\x79\x57',
        '\x75\x32\x39\x4a\x41\x32\x76\x30\x69\x67\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x50\x42\x32\x34\x47\x44\x67\x4c\x54\x7a\x77\x39\x31\x44\x61',
        '\x43\x4d\x66\x55\x7a\x67\x39\x54',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x76\x72\x50\x42\x77\x76\x5a\x44\x67\x66\x54\x43\x61',
        '\x69\x67\x48\x48\x43\x59\x62\x49\x7a\x77\x76\x55\x69\x68\x62\x59\x42\x32\x31\x56\x44\x67\x76\x4b\x69\x67\x6a\x35\x69\x65\x61',
        '\x43\x32\x39\x54\x7a\x71',
        '\x69\x63\x4a\x49\x4e\x69\x75\x47\x76\x78\x61\x47\x44\x67\x38\x47\x7a\x67\x66\x30\x7a\x73\x4b',
        '\x77\x5a\x62\x44\x69\x65\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x50\x42\x4d\x43\x47\x44\x67\x38\x47\x76\x32\x48\x48\x44\x68\x6e\x62\x43\x68\x61\x55\x6c\x49\x34',
        '\x42\x77\x4c\x54\x7a\x78\x72\x35\x43\x67\x75',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71',
        '\x43\x4d\x76\x4a\x42\x33\x6a\x4b\x41\x77\x35\x4e',
        '\x6e\x74\x75\x59\x6d\x74\x43\x34\x6e\x77\x7a\x53\x77\x67\x39\x63\x74\x57',
        '\x77\x5a\x62\x44\x69\x65\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x4c\x7a\x63\x65',
        '\x43\x4d\x76\x51\x7a\x77\x6e\x30\x71\x32\x66\x53\x42\x61',
        '\x43\x4d\x76\x57\x42\x67\x66\x4a\x7a\x71',
        '\x43\x4d\x76\x51\x7a\x77\x6e\x30',
        '\x72\x4d\x66\x50\x42\x67\x76\x4b\x69\x68\x72\x56\x69\x68\x6a\x4c\x79\x77\x6e\x30\x69\x68\x72\x56\x69\x68\x6e\x30\x79\x78\x72\x31\x43\x5a\x4f\x47',
        '\x44\x77\x35\x53\x41\x77\x35\x52\x75\x33\x4c\x55\x79\x57',
        '\x7a\x67\x76\x54\x42\x33\x72\x4c',
        '\x43\x67\x4c\x55\x42\x57',
        '\x79\x77\x6e\x30\x41\x77\x39\x55',
        '\x7a\x4d\x4c\x53\x7a\x77\x35\x48\x42\x77\x75',
        '\x79\x78\x48\x50\x42\x33\x6d',
        '\x43\x32\x76\x55\x7a\x65\x6e\x56\x42\x4e\x72\x48\x79\x33\x71',
        '\x79\x77\x58\x53\x42\x32\x6d',
        '\x69\x67\x66\x32\x79\x77\x4c\x53\x79\x77\x6a\x53\x7a\x73\x4b',
        '\x42\x33\x76\x30\x43\x68\x76\x30',
        '\x7a\x33\x6a\x56\x44\x78\x61\x54\x43\x67\x66\x59\x44\x67\x4c\x4a\x41\x78\x62\x48\x42\x4e\x72\x5a\x6c\x4e\x76\x57\x7a\x67\x66\x30\x7a\x71',
        '\x43\x4d\x76\x54\x42\x33\x7a\x4c',
        '\x71\x77\x7a\x59\x41\x77\x6e\x48\x6c\x30\x58\x48\x7a\x32\x39\x5a',
        '\x43\x67\x66\x59\x43\x32\x75',
        '\x79\x78\x62\x57\x42\x67\x4c\x4a\x79\x78\x72\x50\x42\x32\x34\x56\x42\x32\x6e\x30\x7a\x78\x71\x54\x43\x33\x72\x59\x7a\x77\x66\x54',
        '\x74\x30\x35\x6d\x73\x75\x35\x66',
        '\x43\x68\x76\x59\x43\x67\x58\x4c',
        '\x42\x67\x39\x4e',
        '\x79\x78\x76\x30\x42\x33\x6a\x4c\x79\x77\x71',
        '\x41\x67\x76\x53\x43\x63\x62\x53\x41\x78\x6e\x30\x6b\x47\x4f\x6b\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x76\x4b\x69\x67\x35\x56\x44\x63\x62\x59\x7a\x78\x6e\x57\x42\x32\x35\x4b\x41\x77\x35\x4e\x70\x59\x64\x57\x4e\x36\x73\x4d\x69\x67\x58\x4c\x44\x63\x62\x54\x7a\x73\x62\x4f\x7a\x77\x58\x57\x69\x63\x34\x55\x6c\x47\x4f\x6b\x34\x4f\x63\x49\x69\x65\x44\x4c\x44\x63\x62\x48\x69\x67\x35\x4c\x44\x59\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55\x69\x67\x7a\x59\x42\x32\x30\x47',
        '\x77\x5a\x62\x44\x69\x65\x72\x50\x43\x32\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x4c\x7a\x63\x34\x47\x75\x4d\x76\x5a\x44\x67\x66\x59\x44\x67\x4c\x55\x7a\x59\x62\x49\x42\x33\x71\x47\x41\x77\x34\x47\x6e\x73\x62\x5a\x7a\x77\x6e\x56\x42\x4d\x72\x5a\x6c\x49\x34\x55',
        '\x43\x33\x72\x48\x79\x32\x53',
        '\x77\x31\x76\x55\x79\x32\x66\x31\x7a\x32\x48\x30\x69\x65\x76\x34\x79\x32\x76\x57\x44\x67\x4c\x56\x42\x4c\x30\x47',
        '\x72\x33\x6a\x56\x44\x78\x61\x47\x76\x78\x62\x4b\x79\x78\x72\x4c\x6f\x49\x61',
        '\x43\x4d\x76\x48\x7a\x67\x72\x50\x43\x4c\x6e\x35\x42\x4d\x6d',
        '\x77\x63\x31\x78\x71\x73\x31\x63\x73\x76\x4f\x54\x74\x4b\x66\x6e\x72\x74\x4f',
        '\x44\x77\x35\x48\x44\x4d\x66\x50\x42\x67\x66\x49\x42\x67\x75',
        '\x42\x67\x66\x5a\x44\x61',
        '\x6c\x49\x39\x30\x42\x78\x61\x56\x43\x32\x76\x5a\x43\x32\x4c\x56\x42\x47',
        '\x79\x4d\x66\x4b\x69\x67\x31\x48\x79\x57',
        '\x79\x32\x48\x48\x42\x67\x53',
        '\x41\x78\x72\x4c\x42\x74\x65\x55\x76\x65\x76\x6d\x6f\x33\x44\x48\x41\x77\x71\x39',
        '\x76\x77\x35\x4c\x45\x68\x62\x4c\x79\x33\x72\x4c\x7a\x63\x62\x4f\x79\x77\x35\x4b\x43\x32\x48\x48\x41\x32\x75\x47\x7a\x78\x6a\x59\x42\x33\x69',
        '\x44\x4d\x76\x59\x43\x32\x4c\x56\x42\x47',
        '\x44\x4d\x6e\x48\x43\x4d\x71',
        '\x41\x77\x31\x48\x7a\x32\x75',
        '\x44\x68\x6a\x31\x7a\x71',
        '\x38\x6a\x2b\x72\x49\x59\x62\x69\x7a\x77\x58\x53\x42\x59\x62\x61\x44\x78\x6e\x4c\x43\x49\x57\x47\x44\x32\x76\x53\x79\x32\x39\x54\x7a\x73\x62\x30\x42\x59\x61\x51\x71\x67\x44\x59\x42\x33\x76\x57\x6b\x47\x4f\x6b\x71\x67\x72\x4c\x43\x32\x6d\x6b\x38\x6a\x2b\x74\x48\x73\x62\x61\x7a\x67\x66\x30\x7a\x73\x62\x61\x44\x67\x4c\x54\x7a\x71',
        '\x7a\x4e\x6a\x56\x42\x75\x31\x4c',
        '\x74\x31\x6a\x68\x6f\x4d\x35\x31\x42\x67\x57\x6b',
        '\x72\x76\x6a\x73\x74\x31\x69',
        '\x43\x4d\x76\x48\x79\x33\x71',
        '\x6c\x49\x39\x30\x42\x78\x61\x56\x43\x33\x72\x56\x43\x4d\x75',
        '\x7a\x4d\x4c\x53\x7a\x71',
        '\x74\x4a\x4f\x37',
        '\x79\x78\x76\x4b\x41\x77\x38',
        '\x43\x4d\x76\x48\x7a\x65\x7a\x50\x42\x67\x76\x74\x45\x77\x35\x4a',
        '\x42\x32\x7a\x4d',
        '\x73\x75\x35\x67\x74\x57',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55',
        '\x44\x78\x6a\x53',
        '\x44\x33\x6a\x50\x44\x67\x76\x67\x41\x77\x58\x4c\x75\x33\x4c\x55\x79\x57',
        '\x43\x32\x76\x30\x44\x67\x4c\x55\x7a\x33\x6d',
        '\x42\x77\x54\x4b\x41\x78\x6a\x74\x45\x77\x35\x4a',
        '\x43\x33\x72\x4b\x42\x33\x76\x30',
        '\x7a\x4e\x6a\x56\x42\x71',
        '\x7a\x78\x6a\x59\x42\x33\x69',
        '\x42\x4d\x39\x4b\x7a\x73\x31\x4a\x79\x77\x6e\x4f\x7a\x71',
        '\x6c\x49\x39\x30\x42\x78\x61\x56',
        '\x6f\x5a\x53\x37\x63\x47',
        '\x43\x32\x58\x50\x79\x32\x75',
        '\x41\x77\x35\x4a\x42\x68\x76\x4b\x7a\x78\x6d',
        '\x63\x47\x50\x73\x7a\x77\x44\x48\x43\x4d\x72\x5a\x6c\x61\x52\x57\x4e\x7a\x6f\x75\x38\x6a\x32\x74\x52\x46\x63\x44\x4b\x37\x46\x57\x4e\x7a\x6f\x2b\x38\x6a\x32\x74\x56\x71',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x42\x78\x4c\x4d\x44\x77\x35\x4a',
        '\x44\x78\x6e\x4c\x43\x47',
        '\x79\x32\x39\x55\x79\x32\x66\x30',
        '\x44\x32\x76\x53\x79\x32\x39\x54\x7a\x71',
        '\x7a\x67\x66\x30\x79\x71',
        '\x42\x4d\x39\x33',
        '\x77\x5a\x62\x44\x69\x65\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x4c\x7a\x63\x62\x30\x42\x5a\x4f\x47',
        '\x71\x68\x6d\x55\x44\x32\x48\x48\x44\x68\x6e\x48\x43\x68\x61\x55\x42\x4d\x76\x30',
        '\x71\x68\x62\x57',
        '\x7a\x67\x4c\x5a\x43\x67\x58\x48\x45\x75\x35\x48\x42\x77\x75',
        '\x41\x4e\x6e\x56\x42\x47',
        '\x6d\x5a\x75\x57\x6d\x64\x69\x5a\x6d\x4c\x6a\x4e\x75\x78\x62\x71\x44\x61',
        '\x43\x68\x6a\x56\x42\x77\x4c\x5a\x7a\x78\x6d',
        '\x73\x65\x47\x36\x42\x77\x30\x36\x43\x33\x6d',
        '\x72\x78\x7a\x4c\x42\x4e\x72\x66\x42\x77\x4c\x30\x44\x67\x76\x59',
        '\x44\x4d\x4c\x4b\x7a\x77\x38',
        '\x43\x4d\x76\x48\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x32\x76\x5a',
        '\x42\x67\x39\x48\x7a\x67\x76\x4b\x75\x67\x58\x31\x7a\x32\x4c\x55\x43\x57',
        '\x72\x77\x35\x4a\x42\x33\x76\x55\x44\x67\x76\x59\x7a\x77\x71\x47\x72\x78\x6a\x59\x42\x33\x69\x36\x69\x61',
        '\x43\x68\x6a\x4c\x7a\x4d\x4c\x34',
        '\x6c\x49\x39\x53\x41\x77\x69\x56\x79\x78\x6a\x59\x7a\x4e\x76\x55\x79\x33\x72\x50\x42\x32\x34\x55\x41\x4e\x6d',
        '\x42\x4d\x66\x54\x7a\x71',
        '\x7a\x33\x6a\x56\x44\x78\x62\x6e\x7a\x78\x72\x48\x7a\x67\x66\x30\x79\x71',
        '\x42\x32\x7a\x4d\x7a\x78\x69',
        '\x77\x5a\x62\x44\x69\x65\x66\x59\x79\x32\x47\x47\x76\x4d\x76\x59\x43\x32\x4c\x56\x42\x4a\x4f\x47\x44\x47',
        '\x43\x78\x76\x56\x44\x67\x76\x4b',
        '\x42\x67\x4c\x5a\x44\x63\x4f\x6b\x34\x4f\x63\x49\x69\x65\x44\x4c\x44\x63\x62\x4f\x7a\x77\x58\x57\x69\x67\x66\x49\x42\x33\x76\x30\x69\x67\x65\x47\x79\x32\x39\x54\x42\x77\x66\x55\x7a\x64\x4f\x47\x6b\x47',
        '\x6d\x74\x71\x5a\x73\x4c\x4c\x4a\x77\x75\x72\x71',
        '\x7a\x32\x76\x30\x76\x67\x4c\x54\x7a\x71',
        '\x71\x4d\x66\x4b\x69\x65\x31\x62\x71\x57',
        '\x41\x78\x6e\x62\x43\x4e\x6a\x48\x45\x71',
        '\x72\x4d\x66\x50\x42\x67\x76\x4b\x69\x68\x72\x56\x69\x67\x72\x4c\x79\x33\x6a\x35\x43\x68\x71\x47\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x73\x62\x33\x41\x78\x72\x4f\x69\x67\x66\x55\x45\x73\x62\x52\x42\x4d\x39\x33\x42\x49\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55',
        '\x69\x67\x6e\x56\x42\x4e\x72\x48\x79\x33\x72\x5a',
        '\x43\x4d\x76\x54\x42\x33\x7a\x4c\x71\x77\x58\x53\x74\x67\x4c\x5a\x44\x67\x76\x55\x7a\x78\x6a\x5a',
        '\x7a\x77\x35\x32',
        '\x42\x67\x4c\x5a\x44\x61\x52\x49\x47\x6b\x69\x47\x6b\x4b\x48\x4c\x42\x68\x61\x36\x6b\x49\x61',
        '\x6c\x49\x39\x53\x41\x77\x69\x56\x44\x78\x62\x4b\x79\x78\x72\x4c',
        '\x7a\x67\x39\x4a\x44\x77\x31\x4c\x42\x4e\x71',
        '\x41\x78\x6e\x63\x44\x77\x7a\x4d\x7a\x78\x69',
        '\x6d\x4a\x61\x55\x6d\x63\x34\x57\x6e\x61',
        '\x79\x32\x39\x54\x43\x67\x39\x5a\x41\x77\x35\x4e',
        '\x43\x32\x76\x55\x7a\x65\x7a\x50\x42\x67\x75',
        '\x72\x30\x39\x70\x72\x65\x6a\x7a\x72\x76\x39\x6e\x75\x30\x43',
        '\x79\x78\x7a\x48\x41\x77\x58\x48\x79\x4d\x58\x4c',
        '\x42\x78\x72\x35\x43\x67\x75',
        '\x43\x33\x72\x4b\x76\x66\x72\x6d',
        '\x43\x4d\x76\x48\x7a\x68\x6e\x33',
        '\x43\x33\x72\x48\x44\x68\x76\x5a\x71\x67\x6a\x59\x42\x32\x66\x4b\x79\x32\x66\x5a\x44\x61',
        '\x79\x33\x6a\x4c\x7a\x68\x6d\x55\x44\x78\x62\x4b\x79\x78\x72\x4c',
        '\x79\x78\x66\x31\x79\x71',
        '\x7a\x32\x76\x30\x72\x4d\x4c\x53\x7a\x71',
        '\x7a\x4d\x39\x59\x42\x77\x66\x30',
        '\x42\x67\x76\x55\x7a\x33\x72\x4f',
        '\x79\x32\x58\x56\x43\x32\x75',
        '\x63\x55\x6b\x61\x4f\x49\x62\x6a\x42\x4e\x62\x31\x44\x63\x62\x50\x42\x49\x62\x35\x42\x33\x76\x59\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34\x47\x73\x75\x71\x47\x44\x4d\x66\x59\x41\x77\x66\x49\x42\x67\x75\x47\x63\x55\x6b\x61\x4f\x49\x62\x73\x7a\x78\x6e\x30\x79\x78\x6a\x30\x69\x67\x7a\x59\x42\x32\x30\x47\x41\x67\x39\x5a\x44\x63\x64\x57\x4e\x35\x6b\x41\x63\x47\x4f',
        '\x7a\x77\x72\x55\x44\x78\x71',
        '\x79\x78\x62\x57\x42\x68\x4b',
        '\x43\x32\x76\x30\x44\x32\x76\x53\x79\x32\x39\x54\x7a\x71',
        '\x75\x32\x76\x5a\x43\x32\x4c\x56\x42\x4b\x6e\x50\x43\x67\x48\x4c\x43\x49\x35\x4b\x7a\x77\x6e\x59\x45\x78\x62\x30\x76\x32\x4c\x30\x41\x66\x6e\x4c\x43\x33\x6e\x50\x42\x32\x35\x5a',
        '\x71\x4d\x39\x30\x69\x67\x4c\x5a\x69\x68\x6a\x31\x42\x4d\x35\x50\x42\x4d\x43\x48',
        '\x69\x67\x6e\x48\x42\x67\x58\x4c\x7a\x63\x62\x48\x42\x4d\x71\x47\x44\x32\x66\x5a\x69\x63\x50\x49\x42\x67\x39\x4a\x41\x32\x76\x4b\x6b\x47',
        '\x42\x67\x76\x32\x7a\x77\x57',
        '\x72\x75\x35\x65\x6f\x4c\x7a\x64\x71\x76\x6a\x65',
        '\x43\x32\x76\x55\x7a\x66\x62\x59\x7a\x78\x6e\x4c\x42\x4d\x6e\x4c\x76\x78\x62\x4b\x79\x78\x72\x4c',
        '\x79\x77\x35\x30\x41\x77\x6e\x48\x42\x67\x57\x59',
        '\x79\x4d\x66\x5a\x7a\x74\x79\x30',
        '\x43\x32\x6e\x48\x42\x47',
        '\x77\x63\x31\x78\x71\x73\x31\x63\x73\x76\x4f\x54\x72\x65\x76\x74\x71\x31\x6a\x6a\x75\x66\x72\x6a\x74\x30\x34\x36',
        '\x43\x67\x66\x4a\x41\x32\x35\x48\x42\x77\x75',
        '\x6f\x64\x4b\x35\x6d\x4d\x31\x4a\x75\x75\x58\x6a\x79\x57',
        '\x41\x77\x35\x30\x7a\x78\x6a\x55\x79\x78\x72\x50\x42\x32\x35\x48\x42\x61',
        '\x7a\x78\x7a\x4c\x42\x4e\x72\x5a',
        '\x7a\x78\x48\x57\x43\x4d\x76\x5a\x43\x57',
        '\x7a\x77\x34\x54\x72\x30\x69',
        '\x79\x77\x58\x59\x7a\x77\x66\x4b\x45\x73\x31\x4c\x45\x67\x4c\x5a\x44\x68\x6d',
        '\x79\x78\x62\x57\x42\x67\x4c\x4a\x79\x78\x72\x50\x42\x32\x34',
        '\x41\x77\x35\x57\x44\x78\x71',
        '\x71\x68\x44\x4f\x41\x78\x6e\x52\x7a\x78\x4c\x5a\x42\x32\x6e\x52\x7a\x78\x72\x5a\x6c\x32\x6a\x48\x41\x77\x58\x4c\x45\x78\x6d',
        '\x44\x67\x66\x4e\x78\x32\x35\x48\x42\x77\x75',
        '\x74\x4d\x38\x47\x7a\x67\x76\x5a\x79\x33\x6a\x50\x43\x68\x72\x50\x42\x32\x34\x55',
        '\x79\x78\x76\x30\x41\x67\x39\x59',
        '\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x56\x42\x49\x35\x31\x43\x67\x72\x48\x44\x67\x75',
        '\x7a\x32\x76\x30\x74\x4e\x76\x54\x79\x4d\x76\x59',
        '\x6c\x4d\x6a\x50\x42\x47',
        '\x43\x33\x72\x48\x44\x68\x76\x5a\x71\x32\x39\x4b\x7a\x71',
        '\x42\x33\x62\x30\x43\x57',
        '\x7a\x4d\x4c\x53\x44\x67\x76\x59',
        '\x44\x33\x6a\x50\x44\x67\x76\x67\x41\x77\x58\x4c',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x78\x6d\x55\x44\x78\x62\x5a\x7a\x78\x6a\x30',
        '\x44\x67\x39\x76\x43\x68\x62\x4c\x43\x4b\x6e\x48\x43\x32\x75',
        '\x44\x67\x39\x6d\x42\x32\x6e\x48\x42\x67\x76\x75\x41\x77\x31\x4c\x75\x33\x72\x59\x41\x77\x35\x4e',
        '\x41\x78\x6e\x65\x41\x78\x6a\x4c\x79\x33\x72\x56\x43\x4e\x4b',
        '\x76\x4d\x66\x53\x44\x77\x75\x47\x42\x4d\x39\x30\x69\x67\x7a\x56\x44\x77\x35\x4b',
        '\x79\x78\x44\x4c\x43\x32\x39\x54\x7a\x73\x31\x57\x41\x67\x39\x55\x7a\x77\x35\x31\x42\x77\x6a\x4c\x43\x47',
        '\x42\x67\x4c\x5a\x44\x67\x76\x55',
        '\x44\x67\x4c\x54\x7a\x78\x50\x56\x42\x4d\x75',
        '\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x75\x6e\x56\x44\x77\x35\x30\x7a\x78\x6a\x66\x43\x4e\x6a\x56\x43\x4a\x4f\x47\x73\x32\x76\x35\x69\x68\x76\x5a\x7a\x77\x71\x47\x79\x77\x58\x59\x7a\x77\x66\x4b\x45\x73\x62\x56\x43\x49\x62\x55\x7a\x78\x7a\x4c\x43\x49\x62\x4d\x41\x77\x58\x53\x7a\x77\x71',
        '\x43\x32\x76\x59\x44\x4d\x76\x59',
        '\x43\x68\x72\x30',
        '\x76\x30\x76\x6d\x71\x30\x39\x6e\x72\x76\x39\x6e\x75\x30\x43',
        '\x43\x33\x72\x50\x79\x32\x54\x4c\x43\x47',
        '\x6d\x4a\x4b\x58\x6e\x74\x62\x78\x73\x78\x6e\x79\x44\x32\x79',
        '\x42\x4d\x39\x4b\x7a\x73\x31\x4d\x7a\x78\x72\x4a\x41\x61',
        '\x44\x4d\x66\x53\x44\x77\x75',
        '\x43\x67\x66\x4b\x75\x33\x72\x48\x43\x4e\x71',
        '\x63\x47\x50\x69\x7a\x77\x58\x53\x42\x59\x65\x47\x38\x6a\x2b\x72\x49\x59\x62\x6a\x6a\x32\x30\x47\x71\x78\x6a\x4a\x41\x63\x62\x6e\x7a\x63\x57\x47\x45\x77\x39\x31\x43\x49\x62\x78\x41\x67\x66\x30\x43\x30\x66\x57\x43\x63\x62\x49\x42\x33\x71\x55\x69\x65\x48\x4c\x43\x4d\x75\x4e\x43\x59\x62\x4f\x42\x33\x43\x47\x44\x67\x38\x47\x44\x78\x6e\x4c\x69\x67\x31\x4c\x6f\x47\x4f\x6b\x34\x4f\x63\x49\x69\x63\x50\x76\x43\x32\x66\x4e\x7a\x74\x4f\x51\x69\x61',
        '\x76\x30\x76\x6d\x71\x30\x39\x6e\x72\x71',
        '\x38\x6a\x2b\x4e\x55\x73\x62\x64\x42\x67\x76\x48\x42\x4d\x76\x4b\x69\x61',
        '\x79\x78\x6e\x65\x42\x32\x6e\x31\x42\x77\x76\x55\x44\x61',
        '\x79\x78\x76\x30\x42\x33\x6a\x4c\x79\x32\x39\x59\x7a\x67\x4c\x55\x7a\x57',
        '\x43\x78\x76\x4c\x43\x33\x72\x50\x42\x32\x34',
        '\x7a\x33\x6a\x56\x44\x78\x62\x5a',
        '\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x32\x75',
        '\x43\x33\x72\x4b\x41\x77\x34',
        '\x44\x67\x76\x34\x44\x61',
        '\x72\x65\x66\x75\x71\x75\x6a\x62\x75\x30\x76\x46\x76\x76\x6a\x6d',
        '\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x73\x62\x69\x79\x77\x35\x4b\x42\x67\x76\x59\x6f\x49\x61',
        '\x44\x78\x62\x4b\x79\x78\x72\x4c\x71\x4d\x58\x56\x79\x32\x54\x74\x44\x67\x66\x30\x44\x78\x6d',
        '\x79\x78\x6a\x4e\x44\x47',
        '\x72\x67\x76\x32\x7a\x77\x58\x56\x43\x67\x76\x59\x69\x65\x6a\x56\x44\x61',
        '\x72\x30\x39\x70\x72\x65\x6a\x7a\x72\x71',
        '\x72\x67\x76\x4a\x43\x4e\x4c\x57\x44\x67\x76\x4b\x69\x67\x31\x4c\x43\x33\x6e\x48\x7a\x32\x75\x47\x44\x32\x4c\x30\x41\x63\x62\x4a\x42\x67\x39\x5a\x7a\x77\x71\x47\x43\x32\x76\x5a\x43\x32\x4c\x56\x42\x49\x34',
        '\x7a\x67\x76\x4a\x42\x32\x72\x4c\x73\x4d\x4c\x4b',
        '\x79\x4d\x58\x31\x7a\x71',
        '\x78\x32\x6a\x56\x44\x77\x35\x4b',
        '\x7a\x4d\x39\x59\x72\x77\x66\x4a\x41\x61',
        '\x43\x33\x72\x48\x44\x68\x76\x5a',
        '\x42\x67\x39\x4b\x79\x78\x6e\x4f',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34\x47\x41\x77\x34\x47\x7a\x4d\x66\x32\x42\x33\x69\x47\x42\x32\x79\x47\x41\x77\x35\x4a\x42\x32\x31\x50\x42\x4d\x43\x47\x43\x68\x6a\x4c\x41\x32\x76\x35\x69\x67\x6a\x31\x42\x4d\x72\x53\x7a\x71',
        '\x7a\x4d\x58\x56\x42\x33\x69',
        '\x38\x6a\x2b\x72\x49\x59\x62\x61\x44\x78\x6e\x4c\x43\x49\x62\x53\x7a\x77\x7a\x30\x69\x63\x50\x61\x7a\x33\x6a\x56\x44\x78\x61\x51',
        '\x6e\x4b\x35\x5a\x41\x30\x48\x54\x43\x47',
        '\x43\x68\x6a\x56\x7a\x4d\x4c\x53\x7a\x76\x62\x50\x79\x33\x72\x31\x43\x4d\x76\x76\x43\x4d\x57',
        '\x6d\x74\x65\x31\x6d\x64\x61\x58\x6d\x4a\x48\x30\x73\x77\x76\x79\x77\x65\x79',
        '\x79\x4d\x66\x4b\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34',
        '\x7a\x78\x48\x30',
        '\x43\x33\x62\x53\x41\x78\x71',
        '\x42\x78\x6e\x4e',
        '\x44\x33\x6a\x50\x44\x67\x75',
        '\x7a\x67\x39\x33\x42\x4d\x58\x56\x79\x77\x72\x62\x42\x4d\x72\x74\x79\x78\x7a\x4c\x74\x77\x76\x4b\x41\x77\x66\x6e\x7a\x78\x6e\x5a\x79\x77\x44\x4c',
        '\x79\x4d\x4c\x55\x7a\x61',
        '\x79\x33\x6a\x4c\x79\x78\x72\x4c\x73\x77\x35\x30\x7a\x78\x6a\x4d\x79\x77\x6e\x4c',
        '\x41\x32\x76\x35',
        '\x43\x67\x66\x59\x44\x67\x4c\x4a\x41\x78\x62\x48\x42\x4e\x72\x5a',
        '\x7a\x32\x76\x30\x74\x4d\x66\x54\x7a\x71',
        '\x6c\x4d\x50\x5a',
        '\x69\x63\x4a\x49\x4d\x51\x64\x56\x55\x69\x38\x47\x74\x4d\x76\x33\x69\x68\x7a\x4c\x43\x4e\x6e\x50\x42\x32\x34\x47\x44\x47',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x79\x32\x39\x53\x42\x33\x69',
        '\x75\x65\x39\x73\x76\x61',
        '\x42\x77\x76\x55\x44\x67\x4c\x56\x42\x4e\x6d',
        '\x76\x32\x48\x48\x44\x68\x6e\x62\x43\x68\x61',
        '\x43\x67\x66\x30\x41\x61',
        '\x38\x6a\x2b\x51\x47\x63\x62\x62\x43\x4d\x6e\x4f\x69\x65\x31\x4b\x69\x67\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x4c\x7a\x63\x62\x5a\x44\x77\x6e\x4a\x7a\x78\x6e\x5a\x7a\x4e\x76\x53\x42\x68\x4b\x6b\x63\x4e\x62\x59\x7a\x77\x7a\x50\x45\x64\x4f\x47',
        '\x69\x67\x4c\x55\x79\x77\x6e\x30\x41\x78\x7a\x4c\x69\x67\x6e\x4f\x79\x78\x72\x5a\x69\x67\x7a\x59\x42\x32\x30\x47\x43\x33\x72\x56\x43\x4d\x75\x55',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x7a\x67\x66\x30\x79\x77\x6a\x48\x43\x32\x75\x56\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x56\x42\x49\x35\x51\x43\x32\x39\x55',
        '\x72\x65\x71\x56\x74\x75\x30\x56\x77\x76\x4c\x7a\x77\x71',
        '\x43\x4d\x76\x4a\x42\x32\x35\x55\x7a\x77\x6e\x30',
        '\x79\x77\x72\x4b',
        '\x77\x5a\x62\x44\x69\x65\x4c\x55\x43\x33\x72\x48\x42\x67\x58\x50\x42\x4d\x43\x47\x43\x67\x58\x31\x7a\x32\x4c\x55\x43\x59\x34\x55\x6c\x47',
        '\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x55\x7a\x57',
        '\x6c\x33\x6a\x48\x44\x57',
        '\x79\x78\x6e\x74\x44\x67\x4c\x4a\x41\x32\x76\x59',
        '\x44\x77\x35\x4a\x79\x78\x76\x4e\x41\x68\x72\x66\x45\x67\x6e\x4c\x43\x68\x72\x50\x42\x32\x34',
        '\x41\x78\x72\x4c\x42\x74\x65\x55\x77\x63\x31\x62\x71\x4b\x58\x48\x79\x4d\x76\x53\x6f\x4c\x62\x56\x42\x4e\x6e\x4c\x42\x61\x4f',
        '\x43\x32\x76\x55\x7a\x61',
        '\x6c\x49\x39\x57\x79\x77\x6e\x52\x79\x77\x44\x4c\x6c\x4d\x50\x5a\x42\x32\x34',
        '\x42\x77\x66\x34\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x78\x6e\x71\x7a\x78\x6a\x64\x41\x67\x66\x30',
        '\x7a\x78\x48\x50\x44\x61',
        '\x6e\x74\x79\x57\x6d\x4a\x6a\x41\x79\x4b\x66\x75\x42\x66\x47',
        '\x43\x32\x4c\x53\x7a\x77\x35\x30',
        '\x79\x33\x4c\x48\x42\x47',
        '\x45\x77\x66\x59\x7a\x33\x6d\x56\x45\x77\x66\x59\x7a\x33\x6d',
        '\x44\x67\x76\x5a\x44\x61',
        '\x43\x32\x76\x5a\x43\x32\x4c\x56\x42\x47',
        '\x7a\x4e\x6a\x56\x42\x75\x6a\x31\x7a\x4d\x7a\x4c\x43\x47',
        '\x42\x77\x39\x54\x7a\x77\x35\x30\x6c\x78\x72\x50\x42\x77\x76\x36\x42\x32\x35\x4c',
        '\x7a\x77\x35\x4b\x43\x31\x44\x50\x44\x67\x47',
        '\x69\x67\x48\x48\x43\x59\x62\x49\x7a\x77\x76\x55\x69\x67\x72\x4c\x42\x77\x39\x30\x7a\x77\x71\x47\x79\x4e\x4b\x47\x71\x61',
        '\x41\x4d\x39\x50\x42\x47',
        '\x7a\x32\x76\x30',
        '\x77\x5a\x62\x44\x69\x65\x7a\x48\x41\x77\x58\x4c\x7a\x63\x62\x30\x42\x59\x62\x53\x42\x32\x66\x4b\x69\x68\x62\x53\x44\x77\x44\x50\x42\x49\x61',
        '\x43\x33\x72\x4b\x7a\x78\x6a\x59',
        '\x76\x67\x4c\x54\x7a\x77\x71\x47\x74\x33\x76\x30',
        '\x79\x4d\x58\x56\x79\x32\x53',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x5a\x44\x67\x66\x53\x7a\x73\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34',
        '\x43\x4d\x76\x57\x42\x68\x4b',
        '\x71\x4b\x76\x68\x73\x75\x34\x36\x76\x4b\x6e\x62\x75\x4b\x71\x6b',
        '\x41\x67\x76\x53\x43\x63\x61\x38\x79\x32\x39\x54\x42\x77\x66\x55\x7a\x66\x39\x55\x79\x77\x31\x4c\x70\x47\x4f\x6b\x72\x78\x48\x48\x42\x78\x62\x53\x7a\x74\x4f\x6b\x34\x4f\x63\x49\x69\x65\x58\x50\x43\x33\x71\x47\x79\x77\x58\x53\x69\x67\x6e\x56\x42\x77\x31\x48\x42\x4d\x72\x5a\x6f\x49\x61\x51',
        '\x71\x32\x66\x53\x42\x63\x62\x69\x79\x77\x35\x4b\x42\x67\x76\x59\x6f\x49\x61',
        '\x42\x77\x66\x4e\x7a\x77\x35\x30\x79\x71',
        '\x44\x67\x39\x6d\x42\x33\x44\x4c\x43\x4b\x6e\x48\x43\x32\x75',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x78\x6d',
        '\x75\x31\x72\x62\x76\x66\x76\x74',
        '\x71\x32\x48\x59\x42\x32\x31\x4c',
        '\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x4e\x41\x78\x6e\x30\x6c\x4d\x44\x50\x44\x67\x48\x31\x79\x4e\x76\x5a\x7a\x78\x6a\x4a\x42\x32\x35\x30\x7a\x77\x35\x30\x6c\x4d\x6e\x56\x42\x73\x39\x4c\x7a\x67\x35\x31\x44\x64\x61\x57\x6d\x73\x38',
        '\x6c\x49\x39\x57\x42\x68\x76\x4e\x41\x77\x35\x5a\x6c\x32\x76\x4b\x42\x4e\x76\x30',
        '\x79\x32\x48\x48\x44\x68\x6d',
        '\x79\x32\x39\x55\x44\x67\x66\x4a\x44\x68\x6d',
        '\x6e\x64\x47\x32\x41\x33\x6a\x4e\x79\x33\x7a\x41',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34',
        '\x43\x33\x76\x49\x41\x4d\x76\x4a\x44\x61',
        '\x6d\x74\x71\x5a\x6e\x5a\x66\x4a\x41\x4d\x6a\x72\x72\x4e\x6d',
        '\x42\x77\x76\x54\x42\x33\x6a\x35\x74\x32\x35\x53\x45\x71',
        '\x42\x77\x4c\x54\x7a\x71',
        '\x6d\x74\x6d\x58\x6e\x30\x44\x50\x71\x75\x6a\x58\x74\x61',
        '\x79\x32\x66\x53\x42\x61'
    ];
    _0x55d3 = function () {
        return _0x715a03;
    };
    return _0x55d3();
}
const {Boom} = require('\x40\x68\x61\x70\x69\x2f\x62\x6f\x6f\x6d');
const yargs = require(_0x333d56(0x202));
const _ = require(_0x333d56(0x1d6));
const colors = require('\x40\x63\x6f\x6c\x6f\x72\x73\x2f\x63\x6f\x6c\x6f\x72\x73\x2f\x73\x61\x66\x65');
const NodeCache = require(_0x333d56(0x273));
const moment = require(_0x333d56(0x206));
const PhoneNumber = require(_0x333d56(0x1b4));
const FileType = require('\x66\x69\x6c\x65\x2d\x74\x79\x70\x65');
const readline = require('\x72\x65\x61\x64\x6c\x69\x6e\x65');
const {smsg, imageToWebp, videoToWebp, sleep, writeExif, toPTT, toAudio, toVideo, getBuffer, getSizeMedia} = require(_0x333d56(0x279));
const {getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture} = require('\x2e\x2f\x61\x6c\x6c\x2f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x2e\x6a\x73');
const axios = require(_0x333d56(0x23f));
const {color} = require(_0x333d56(0x1ea));
const moji = [
    '\ud83d\udcda',
    '\ud83d\udcad',
    '\ud83d\udcab',
    '\ud83c\udf0c',
    '\ud83c\udf0f',
    '\u2728',
    '\ud83c\udf37',
    '\ud83c\udf41',
    '\ud83e\udebb'
];
const randomemoji = moji[Math[_0x333d56(0x1d8)](Math[_0x333d56(0x22b)]() * moji[_0x333d56(0x2ad)])];
const listcolor = [
    _0x333d56(0x2aa),
    '\x72\x65\x64',
    _0x333d56(0x1d2),
    _0x333d56(0x24a),
    _0x333d56(0x214)
];
const randomcolor = listcolor[Math[_0x333d56(0x1d8)](Math['\x72\x61\x6e\x64\x6f\x6d']() * listcolor[_0x333d56(0x2ad)])];
const randomcolor2 = listcolor[Math[_0x333d56(0x1d8)](Math[_0x333d56(0x22b)]() * listcolor[_0x333d56(0x2ad)])];
const randomcolor3 = listcolor[Math[_0x333d56(0x1d8)](Math[_0x333d56(0x22b)]() * listcolor[_0x333d56(0x2ad)])];
const randomcolor4 = listcolor[Math[_0x333d56(0x1d8)](Math[_0x333d56(0x22b)]() * listcolor[_0x333d56(0x2ad)])];
const randomcolor5 = listcolor[Math[_0x333d56(0x1d8)](Math['\x72\x61\x6e\x64\x6f\x6d']() * listcolor['\x6c\x65\x6e\x67\x74\x68'])];
const _0x44e911 = {};
_0x44e911[_0x333d56(0x2a6)] = 0xe10;
const groupCache = new NodeCache(_0x44e911);
const ednutchat = require('\x2e\x2f\x74\x6d\x70\x2f\x64\x61\x74\x61');
const _0x315186 = {};
_0x315186[_0x333d56(0x1fd)] = 0x64;
_0x315186[_0x333d56(0x221)] = ![];
const store = ednutchat('\x2e\x2f\x74\x6d\x70\x2f\x73\x74\x6f\x72\x65', _0x315186);
global[_0x333d56(0x1ac)] = new Object(yargs(process[_0x333d56(0x1cd)][_0x333d56(0x276)](0x2))['\x65\x78\x69\x74\x50\x72\x6f\x63\x65\x73\x73'](![])['\x70\x61\x72\x73\x65']());
const deleteFolderRecursive = function (_0x1ccf38) {
    const _0x1a4e1e = _0x333d56;
    if (fs['\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63'](_0x1ccf38)) {
        fs[_0x1a4e1e(0x252)](_0x1ccf38)[_0x1a4e1e(0x1d4)](function (_0x3adad5, _0x26d2a4) {
            const _0x255fe0 = _0x1a4e1e;
            const _0x59fc09 = _0x1ccf38 + '\x2f' + _0x3adad5;
            if (fs['\x6c\x73\x74\x61\x74\x53\x79\x6e\x63'](_0x59fc09)[_0x255fe0(0x1b2)]()) {
                deleteFolderRecursive(_0x59fc09);
            } else {
                fs[_0x255fe0(0x23a)](_0x59fc09);
            }
        });
        fs['\x72\x6d\x64\x69\x72\x53\x79\x6e\x63'](_0x1ccf38);
    }
};
const question = _0xd2c9ed => {
    const _0x55f31a = _0x333d56;
    const _0x43af83 = {};
    _0x43af83[_0x55f31a(0x1a3)] = process[_0x55f31a(0x1c8)];
    _0x43af83[_0x55f31a(0x243)] = process['\x73\x74\x64\x6f\x75\x74'];
    const _0x224158 = readline[_0x55f31a(0x1e4)](_0x43af83);
    return new Promise(_0x2f368a => {
        const _0x485ae5 = _0x55f31a;
        _0x224158[_0x485ae5(0x1c5)](_0xd2c9ed, _0x2f368a);
    });
};
const fetch = require(_0x333d56(0x1bd));
const pkg = require(_0x333d56(0x1fc));
const connectionFilePath = path[_0x333d56(0x209)](__dirname, _0x333d56(0x1f1));
async function getLatestGitHubVersion() {
    const _0x26ec04 = _0x333d56;
    try {
        const _0x2773d2 = await fetch('\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x67\x69\x74\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x72\x65\x70\x6f\x73\x2f\x45\x64\x6e\x75\x74\x30\x30\x31\x2f\x41\x72\x63\x68\x2d\x6d\x64\x2f\x72\x65\x6c\x65\x61\x73\x65\x73\x2f\x6c\x61\x74\x65\x73\x74');
        if (!_0x2773d2['\x6f\x6b'])
            return null;
        const _0x3cb5f6 = await _0x2773d2[_0x26ec04(0x283)]();
        return _0x3cb5f6[_0x26ec04(0x1a5)]?.[_0x26ec04(0x237)](/^v/, '') || null;
    } catch {
        return null;
    }
}
const DataBase = require('\x2e\x2f\x6c\x69\x62\x2f\x64\x61\x74\x61\x62\x61\x73\x65');
async function startBotz() {
    const _0x508f88 = _0x333d56;
    const {
        state: _0x5a36fb,
        saveCreds: _0x47300b
    } = await useMultiFileAuthState(_0x508f88(0x256));
    const _0x31606a = {};
    _0x31606a[_0x508f88(0x1fd)] = 0x64;
    _0x31606a['\x6d\x65\x6d\x6f\x72\x79\x4f\x6e\x6c\x79'] = ![];
    const _0xb0a529 = ednutchat(_0x508f88(0x264), _0x31606a);
    const _0x504e5e = new DataBase(process['\x65\x6e\x76'][_0x508f88(0x1ca)]);
    const _0x568a7c = await _0x504e5e['\x72\x65\x61\x64']();
    const _0x1f0e38 = {
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
        ..._0x568a7c
    };
    global['\x64\x62'] = _0x1f0e38;
    const _0x3da2b6 = {};
    _0x3da2b6[_0x508f88(0x2b6)] = _0x508f88(0x200);
    const _0x4e1cc7 = makeWASocket({
        '\x61\x75\x74\x68': _0x5a36fb,
        '\x6c\x6f\x67\x67\x65\x72': pino(_0x3da2b6),
        '\x70\x72\x69\x6e\x74\x51\x52\x49\x6e\x54\x65\x72\x6d\x69\x6e\x61\x6c': !![],
        '\x62\x72\x6f\x77\x73\x65\x72': [
            '\x55\x62\x75\x6e\x74\x75',
            _0x508f88(0x218),
            _0x508f88(0x2a0)
        ]
    });
    _0x4e1cc7['\x65\x76']['\x6f\x6e'](_0x508f88(0x2a9), _0x47300b);
    if (!_0xb0a529[_0x508f88(0x1d3)]) {
        _0xb0a529[_0x508f88(0x1e3)](_0x4e1cc7['\x65\x76']);
        _0xb0a529[_0x508f88(0x1d3)] = !![];
    }
    global[_0x508f88(0x2b0)] = _0x4e1cc7;
    const _0x5f4e2f = async _0xcf20f6 => {
        const _0x46c7c4 = _0x508f88;
        try {
            const _0x481336 = _0xcf20f6[_0x46c7c4(0x216)]?.[0x0];
            if (!_0x481336?.[_0x46c7c4(0x232)])
                return;
            const _0x122abd = _0x481336[_0x46c7c4(0x1e5)][_0x46c7c4(0x260)];
            const _0x299f25 = _0x481336[_0x46c7c4(0x1e5)]['\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64'];
            const _0x1b8f88 = smsg(_0x4e1cc7, _0x481336, _0xb0a529);
            if (_0x299f25 === _0x46c7c4(0x2a8)) {
                const _0x22ce19 = process[_0x46c7c4(0x29b)]['\x53\x54\x41\x54\x55\x53\x5f\x45\x4d\x4f\x4a\x49']?.[_0x46c7c4(0x1df)]('\x2c')['\x6d\x61\x70'](_0x27b500 => _0x27b500['\x74\x72\x69\x6d']())[_0x46c7c4(0x1ad)](_0x1ff270 => _0x1ff270);
                const _0x32e8bb = Array[_0x46c7c4(0x297)](_0x22ce19) && _0x22ce19[_0x46c7c4(0x2ad)] > 0x0;
                const _0x592654 = process[_0x46c7c4(0x29b)][_0x46c7c4(0x217)] === _0x46c7c4(0x25e) || global['\x64\x62'][_0x46c7c4(0x26e)]?.[_0x46c7c4(0x2a7)] === !![];
                if (_0x592654 || _0x32e8bb) {
                    await _0x4e1cc7[_0x46c7c4(0x289)]([_0x481336['\x6b\x65\x79']]);
                    if (_0x32e8bb) {
                        const _0xe68e5e = _0x22ce19[Math[_0x46c7c4(0x1d8)](Math[_0x46c7c4(0x22b)]() * _0x22ce19['\x6c\x65\x6e\x67\x74\x68'])];
                        try {
                            const _0x43606f = {};
                            _0x43606f[_0x46c7c4(0x1c9)] = _0xe68e5e;
                            _0x43606f['\x6b\x65\x79'] = _0x481336['\x6b\x65\x79'];
                            const _0x2ea0f3 = {};
                            _0x2ea0f3[_0x46c7c4(0x263)] = _0x43606f;
                            await _0x4e1cc7[_0x46c7c4(0x1c7)](_0x299f25, _0x2ea0f3);
                        } catch (_0x159bfb) {
                            log(_0x46c7c4(0x262), _0x46c7c4(0x239) + _0x159bfb);
                        }
                    }
                }
                return;
            }
            if (process[_0x46c7c4(0x29b)]['\x52\x45\x41\x44'] === _0x46c7c4(0x25e) || global['\x64\x62'][_0x46c7c4(0x26e)]?.[_0x46c7c4(0x24c)] === !![]) {
                await _0x4e1cc7[_0x46c7c4(0x289)]([_0x481336[_0x46c7c4(0x1e5)]]);
            }
            if (!_0x122abd && global['\x64\x62'][_0x46c7c4(0x26e)]?.['\x61\x75\x74\x6f\x74\x79\x70\x69\x6e\x67'] === !![]) {
                _0x4e1cc7[_0x46c7c4(0x2b8)](_0x46c7c4(0x2a1), _0x299f25);
            }
            if (!_0x122abd && global['\x64\x62'][_0x46c7c4(0x26e)]?.[_0x46c7c4(0x1c4)] === !![]) {
                _0x4e1cc7[_0x46c7c4(0x2b8)](_0x46c7c4(0x233), _0x299f25);
            }
            if (!_0x122abd) {
                const _0x2f0c57 = process['\x65\x6e\x76'][_0x46c7c4(0x249)] === _0x46c7c4(0x25e) || global['\x64\x62'][_0x46c7c4(0x26e)]?.[_0x46c7c4(0x2a4)] === !![];
                _0x4e1cc7['\x73\x65\x6e\x64\x50\x72\x65\x73\x65\x6e\x63\x65\x55\x70\x64\x61\x74\x65'](_0x2f0c57 ? _0x46c7c4(0x2a4) : _0x46c7c4(0x254), _0x299f25);
            }
            handleMessage(_0x4e1cc7, _0x1b8f88, _0xcf20f6, _0x481336, _0xb0a529);
        } catch (_0x13c3b0) {
            log(_0x46c7c4(0x262), _0x46c7c4(0x1cb) + (_0x13c3b0[_0x46c7c4(0x232)] || _0x13c3b0));
        }
    };
    _0x4e1cc7['\x65\x76'][_0x508f88(0x269)](_0x508f88(0x1af), _0x5f4e2f);
    _0x4e1cc7['\x65\x76']['\x6f\x6e'](_0x508f88(0x1af), _0x5f4e2f);
    const _0x35ecab = () => {
        const _0x17df31 = _0x508f88;
        log('\x45\x52\x52\x4f\x52', _0x17df31(0x24e));
        setTimeout(() => {
            startBotz();
        }, 0x1388);
    };
    const _0x3a3263 = async _0x431be1 => {
        const _0x24eb09 = _0x508f88;
        const {
            connection: _0x1d289a,
            lastDisconnect: _0x569260
        } = _0x431be1;
        if (_0x1d289a === _0x24eb09(0x1f6)) {
            if (global['\x64\x62'][_0x24eb09(0x1f3)] === 0x0) {
                log(_0x24eb09(0x26a), _0x24eb09(0x230));
                log('\x49\x4e\x46\x4f', _0x24eb09(0x291) + pkg[_0x24eb09(0x25b)]);
            } else {
                log('\x49\x4e\x46\x4f', '\x5b\x30\x5d\x20\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67\x2e\x2e\x2e\x20\x28' + global['\x64\x62'][_0x24eb09(0x1f3)] + '\x29');
            }
        }
        if (_0x1d289a === '\x6f\x70\x65\x6e') {
            const _0x3cd505 = _0x4e1cc7[_0x24eb09(0x27a)]['\x69\x64'][_0x24eb09(0x1df)]('\x3a')[0x0];
            log('\x49\x4e\x46\x4f', _0x24eb09(0x27f) + _0x3cd505);
            if (global['\x64\x62']['\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74'] === 0x0) {
                log(_0x24eb09(0x26a), _0x24eb09(0x235));
            }
            global['\x64\x62'][_0x24eb09(0x1f3)] += 0x1;
            await delay(0x7d0);
            if (!global['\x64\x62'][_0x24eb09(0x28a)]) {
                log(_0x24eb09(0x26a), _0x24eb09(0x1f5));
                const _0x85c9e4 = fs[_0x24eb09(0x252)](_0x24eb09(0x21a))[_0x24eb09(0x1ad)](_0x2b16ea => _0x2b16ea[_0x24eb09(0x207)](_0x24eb09(0x1e8)));
                for (const _0x5bf8e2 of _0x85c9e4) {
                    try {
                        require('\x2e\x2f\x70\x6c\x75\x67\x69\x6e\x73\x2f\x65\x64\x6e\x75\x74\x2f' + _0x5bf8e2);
                    } catch (_0x5848f0) {
                        log('\x45\x52\x52\x4f\x52', _0x24eb09(0x20b) + _0x5bf8e2 + '\x3a\x20' + _0x5848f0[_0x24eb09(0x232)]);
                    }
                }
                log('\x49\x4e\x46\x4f', '\x5b\x30\x5d\x20\x50\x6c\x75\x67\x69\x6e\x73\x20\x69\x6e\x73\x74\x61\x6c\x6c\x65\x64\x2e');
                global['\x64\x62'][_0x24eb09(0x28a)] = !![];
            }
            if (global['\x64\x62'][_0x24eb09(0x1f3)] === 0x1) {
                const _0x567cb0 = await getLatestGitHubVersion();
                let _0x167f82 = '\x56\x65\x72\x73\x69\x6f\x6e\x3a\x20\x76' + pkg[_0x24eb09(0x25b)];
                if (_0x567cb0) {
                    _0x167f82 += _0x567cb0 !== pkg[_0x24eb09(0x25b)] ? _0x24eb09(0x1e9) + _0x567cb0 + _0x24eb09(0x242) : _0x24eb09(0x22f);
                } else {
                    _0x167f82 += '\x20\x28\u26a0\ufe0f\x20\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x63\x68\x65\x63\x6b\x20\x66\x6f\x72\x20\x75\x70\x64\x61\x74\x65\x73\x29';
                }
                const _0x1c3299 = {};
                _0x1c3299['\x74\x65\x78\x74'] = _0x24eb09(0x1ef) + global[_0x24eb09(0x28c)] + _0x24eb09(0x1c0) + global[_0x24eb09(0x28c)] + _0x24eb09(0x29c) + global[_0x24eb09(0x28c)] + _0x24eb09(0x212) + global['\x70\x72\x65\x66\x69\x78'] + _0x24eb09(0x293) + global[_0x24eb09(0x28c)] + _0x24eb09(0x24d) + global[_0x24eb09(0x2bb)] + _0x24eb09(0x2af) + _0x167f82 + _0x24eb09(0x278);
                await _0x4e1cc7['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x3cd505 + _0x24eb09(0x280), _0x1c3299);
            }
        }
        if (_0x1d289a === _0x24eb09(0x2ae)) {
            if (_0x569260?.[_0x24eb09(0x272)]?.['\x6f\x75\x74\x70\x75\x74']?.[_0x24eb09(0x1ab)] === 0x191) {
                process[_0x24eb09(0x1fe)](0x1);
            } else {
                _0x35ecab();
            }
        }
    };
    _0x4e1cc7['\x65\x76'][_0x508f88(0x269)](_0x508f88(0x1a8), _0x3a3263);
    _0x4e1cc7['\x65\x76']['\x6f\x6e'](_0x508f88(0x1a8), _0x3a3263);
    const _0x10e7b7 = async _0x2d4dfa => {
        const _0x3a03fb = _0x508f88;
        try {
            const _0x206283 = global[_0x3a03fb(0x1b6)] || _0x3a03fb(0x246);
            const _0x49cbfd = _0x2d4dfa['\x69\x64'];
            const _0x19c255 = await _0x4e1cc7['\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64\x61\x74\x61'](_0x49cbfd);
            const _0x131151 = _0x19c255[_0x3a03fb(0x21f)];
            const _0x39f359 = _0x19c255['\x64\x65\x73\x63'] || _0x3a03fb(0x1a6);
            const _0x42fc88 = _0x19c255[_0x3a03fb(0x1e6)]['\x6c\x65\x6e\x67\x74\x68'];
            const _0x513392 = moment()['\x74\x7a'](_0x206283)[_0x3a03fb(0x2ac)](_0x3a03fb(0x1f2));
            const _0x1fc18e = moment()['\x74\x7a'](_0x206283)[_0x3a03fb(0x2ac)](_0x3a03fb(0x286));
            const _0x3fee4c = global['\x64\x62'][_0x3a03fb(0x1c6)]?.[_0x49cbfd]?.[_0x3a03fb(0x27c)] === !![] || process[_0x3a03fb(0x29b)][_0x3a03fb(0x1c1)] === _0x3a03fb(0x25e);
            const _0x39721a = global['\x64\x62'][_0x3a03fb(0x1c6)]?.[_0x49cbfd]?.['\x67\x6f\x6f\x64\x62\x79\x65'] === !![] || process[_0x3a03fb(0x29b)][_0x3a03fb(0x1cf)] === _0x3a03fb(0x25e);
            for (const _0x3f85c4 of _0x2d4dfa[_0x3a03fb(0x1e6)]) {
                const _0xaf0357 = _0x3f85c4['\x73\x70\x6c\x69\x74']('\x40')[0x0][_0x3a03fb(0x1df)]('\x3a')[0x0];
                let _0x1751c0 = '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x64\x6e\x2e\x70\x69\x78\x61\x62\x61\x79\x2e\x63\x6f\x6d\x2f\x70\x68\x6f\x74\x6f\x2f\x32\x30\x31\x35\x2f\x31\x30\x2f\x30\x35\x2f\x32\x32\x2f\x33\x37\x2f\x62\x6c\x61\x6e\x6b\x2d\x70\x72\x6f\x66\x69\x6c\x65\x2d\x70\x69\x63\x74\x75\x72\x65\x2d\x39\x37\x33\x34\x36\x30\x5f\x39\x36\x30\x5f\x37\x32\x30\x2e\x70\x6e\x67';
                try {
                    _0x1751c0 = await _0x4e1cc7[_0x3a03fb(0x1db)](_0x3f85c4, _0x3a03fb(0x25d));
                } catch {
                }
                if (_0x2d4dfa[_0x3a03fb(0x23d)] === _0x3a03fb(0x1f4) && _0x3fee4c) {
                    let _0x32aca7 = global['\x64\x62'][_0x3a03fb(0x1c6)]?.[_0x49cbfd]?.[_0x3a03fb(0x2b2)] || process[_0x3a03fb(0x29b)][_0x3a03fb(0x1ba)] || _0x3a03fb(0x25f);
                    const _0x399803 = _0x32aca7[_0x3a03fb(0x277)](_0x3a03fb(0x281));
                    const _0x2df179 = _0x32aca7[_0x3a03fb(0x237)](/@user/gi, '\x40' + _0xaf0357)[_0x3a03fb(0x237)](/@group/gi, _0x131151)[_0x3a03fb(0x237)](/@desc/gi, _0x39f359)[_0x3a03fb(0x237)](/@date/gi, _0x513392)[_0x3a03fb(0x237)](/@time/gi, _0x1fc18e)[_0x3a03fb(0x237)](/@pp/gi, '');
                    if (_0x399803) {
                        const _0x25edbf = {};
                        _0x25edbf[_0x3a03fb(0x26c)] = _0x1751c0;
                        const _0x421ae5 = {};
                        _0x421ae5['\x69\x6d\x61\x67\x65'] = _0x25edbf;
                        _0x421ae5['\x63\x61\x70\x74\x69\x6f\x6e'] = _0x2df179;
                        _0x421ae5[_0x3a03fb(0x1ec)] = [_0x3f85c4];
                        await _0x4e1cc7[_0x3a03fb(0x1c7)](_0x49cbfd, _0x421ae5);
                    } else {
                        const _0x408c2f = {};
                        _0x408c2f[_0x3a03fb(0x1c9)] = _0x2df179;
                        _0x408c2f[_0x3a03fb(0x1ec)] = [_0x3f85c4];
                        await _0x4e1cc7[_0x3a03fb(0x1c7)](_0x49cbfd, _0x408c2f);
                    }
                } else if (_0x2d4dfa[_0x3a03fb(0x23d)] === _0x3a03fb(0x245) && _0x39721a) {
                    let _0x5f0751 = global['\x64\x62'][_0x3a03fb(0x1c6)]?.[_0x49cbfd]?.['\x73\x65\x74\x67\x6f\x6f\x64\x62\x79\x65'] || process[_0x3a03fb(0x29b)][_0x3a03fb(0x2a3)] || _0x3a03fb(0x1d9);
                    const _0x4eba15 = _0x5f0751['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x3a03fb(0x281));
                    const _0x1a7011 = _0x5f0751[_0x3a03fb(0x237)](/@user/gi, '\x40' + _0xaf0357)[_0x3a03fb(0x237)](/@group/gi, _0x131151)[_0x3a03fb(0x237)](/@desc/gi, _0x39f359)['\x72\x65\x70\x6c\x61\x63\x65'](/@date/gi, _0x513392)[_0x3a03fb(0x237)](/@time/gi, _0x1fc18e)['\x72\x65\x70\x6c\x61\x63\x65'](/@pp/gi, '');
                    if (_0x4eba15) {
                        const _0x436365 = {};
                        _0x436365[_0x3a03fb(0x26c)] = _0x1751c0;
                        const _0x44e838 = {};
                        _0x44e838[_0x3a03fb(0x25d)] = _0x436365;
                        _0x44e838['\x63\x61\x70\x74\x69\x6f\x6e'] = _0x1a7011;
                        _0x44e838[_0x3a03fb(0x1ec)] = [_0x3f85c4];
                        await _0x4e1cc7[_0x3a03fb(0x1c7)](_0x49cbfd, _0x44e838);
                    } else {
                        const _0x417609 = {};
                        _0x417609['\x74\x65\x78\x74'] = _0x1a7011;
                        _0x417609[_0x3a03fb(0x1ec)] = [_0x3f85c4];
                        await _0x4e1cc7['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x49cbfd, _0x417609);
                    }
                }
                if (global['\x64\x62']['\x67\x72\x6f\x75\x70\x73']?.[_0x49cbfd]?.[_0x3a03fb(0x2c0)]) {
                    if (_0x2d4dfa[_0x3a03fb(0x23d)] === '\x70\x72\x6f\x6d\x6f\x74\x65') {
                        await _0x4e1cc7['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x49cbfd, {
                            '\x74\x65\x78\x74': '\x40' + _0xaf0357 + _0x3a03fb(0x22d) + _0x2d4dfa['\x61\x75\x74\x68\x6f\x72'][_0x3a03fb(0x1df)]('\x40')[0x0],
                            '\x6d\x65\x6e\x74\x69\x6f\x6e\x73': [
                                _0x3f85c4,
                                _0x2d4dfa[_0x3a03fb(0x1a7)]
                            ]
                        });
                    } else if (_0x2d4dfa[_0x3a03fb(0x23d)] === _0x3a03fb(0x23b)) {
                        await _0x4e1cc7['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x49cbfd, {
                            '\x74\x65\x78\x74': '\x40' + _0xaf0357 + _0x3a03fb(0x208) + _0x2d4dfa['\x61\x75\x74\x68\x6f\x72'][_0x3a03fb(0x1df)]('\x40')[0x0],
                            '\x6d\x65\x6e\x74\x69\x6f\x6e\x73': [
                                _0x3f85c4,
                                _0x2d4dfa[_0x3a03fb(0x1a7)]
                            ]
                        });
                    }
                }
            }
        } catch (_0x5d8a7d) {
            log(_0x3a03fb(0x262), _0x3a03fb(0x251) + _0x5d8a7d[_0x3a03fb(0x232)]);
        }
    };
    _0x4e1cc7['\x65\x76'][_0x508f88(0x269)](_0x508f88(0x244), _0x10e7b7);
    _0x4e1cc7['\x65\x76']['\x6f\x6e']('\x67\x72\x6f\x75\x70\x2d\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73\x2e\x75\x70\x64\x61\x74\x65', _0x10e7b7);
    const _0x4770b3 = async _0x4aea28 => {
        const _0x2dff84 = _0x508f88;
        try {
            if (!_0x4aea28?.[0x0] || _0x4aea28[0x0][_0x2dff84(0x1d5)] !== _0x2dff84(0x290))
                return;
            const _0x3d23c9 = _0x4aea28[0x0][_0x2dff84(0x271)];
            const _0x3ae9b0 = global['\x64\x62'][_0x2dff84(0x26e)]?.[_0x2dff84(0x2b9)] ? _0x2dff84(0x20e) : global['\x64\x62']['\x73\x65\x74\x74\x69\x6e\x67\x73']?.[_0x2dff84(0x227)] ? _0x2dff84(0x238) : process[_0x2dff84(0x29b)]['\x43\x41\x4c\x4c']?.[_0x2dff84(0x215)]();
            if (!_0x3ae9b0)
                return;
            const _0x334182 = _0x3ae9b0 === _0x2dff84(0x20e) ? '\x40' + _0x3d23c9['\x73\x70\x6c\x69\x74']('\x40')[0x0] + _0x2dff84(0x2b5) : '\x40' + _0x3d23c9[_0x2dff84(0x1df)]('\x40')[0x0] + '\x20\x63\x61\x6c\x6c\x65\x64\x20\x61\x6e\x64\x20\x74\x68\x65\x20\x63\x61\x6c\x6c\x20\x77\x61\x73\x20\x2a\x72\x65\x6a\x65\x63\x74\x65\x64\x2a';
            const _0xe881d7 = {};
            _0xe881d7[_0x2dff84(0x1c9)] = _0x334182;
            _0xe881d7['\x6d\x65\x6e\x74\x69\x6f\x6e\x73'] = [_0x3d23c9];
            await _0x4e1cc7[_0x2dff84(0x1c7)](_0x4e1cc7[_0x2dff84(0x27a)]['\x69\x64'], _0xe881d7);
            await _0x4e1cc7[_0x2dff84(0x236)](_0x4aea28[0x0]['\x69\x64'], _0x3d23c9);
            if (_0x3ae9b0 === _0x2dff84(0x20e)) {
                await delay(0x7d0);
                await _0x4e1cc7[_0x2dff84(0x1cc)](_0x3d23c9, _0x2dff84(0x20e));
            }
        } catch (_0x21163d) {
            log(_0x2dff84(0x262), _0x2dff84(0x213) + _0x21163d['\x6d\x65\x73\x73\x61\x67\x65']);
        }
    };
    _0x4e1cc7['\x65\x76'][_0x508f88(0x269)](_0x508f88(0x224), _0x4770b3);
    _0x4e1cc7['\x65\x76']['\x6f\x6e'](_0x508f88(0x224), _0x4770b3);
    setInterval(async () => {
        const _0x587e98 = _0x508f88;
        try {
            await _0x504e5e[_0x587e98(0x1e1)](global['\x64\x62']);
        } catch (_0x114b20) {
            log(_0x587e98(0x262), _0x587e98(0x228) + _0x114b20[_0x587e98(0x232)]);
        }
    }, 0x2710);
    setInterval(() => {
        const _0x13081b = _0x508f88;
        const _0x4a5c1c = Date[_0x13081b(0x27e)]() - 0x2 * 0x18 * 0x3c * 0x3c * 0x3e8;
        let _0x4d80b7 = 0x0;
        for (let _0x1afc34 in _0xb0a529[_0x13081b(0x21b)]) {
            const _0x53c8c6 = _0xb0a529['\x63\x68\x61\x74\x73'][_0x1afc34]?.[_0x13081b(0x216)]?.[_0x13081b(0x255)];
            const _0x189d68 = _0x53c8c6?.[_0x13081b(0x1be)]?.[_0x13081b(0x22c)] * 0x3e8;
            if (_0x189d68 && _0x189d68 < _0x4a5c1c) {
                delete _0xb0a529[_0x13081b(0x21b)][_0x1afc34];
                _0x4d80b7++;
            }
        }
        if (_0x4d80b7)
            log(_0x13081b(0x26a), _0x13081b(0x1c2) + _0x4d80b7 + _0x13081b(0x1f0));
    }, 0x1e * 0x3c * 0x3e8);
    _0x4e1cc7[_0x508f88(0x1d1)] = _0x543cf3 => {
        const _0x62539c = _0x508f88;
        if (!_0x543cf3)
            return _0x543cf3;
        if (/:\d+@/gi['\x74\x65\x73\x74'](_0x543cf3)) {
            let _0x5598f1 = jidDecode(_0x543cf3) || {};
            return _0x5598f1[_0x62539c(0x27a)] && _0x5598f1[_0x62539c(0x1b8)] && _0x5598f1[_0x62539c(0x27a)] + '\x40' + _0x5598f1[_0x62539c(0x1b8)] || _0x543cf3;
        } else
            return _0x543cf3;
    };
    _0x4e1cc7[_0x508f88(0x1e7)] = (_0x4f968a, _0x57c6db = ![]) => {
        const _0x4fdd5c = _0x508f88;
        id = _0x4e1cc7[_0x4fdd5c(0x1d1)](_0x4f968a);
        _0x57c6db = _0x4e1cc7['\x77\x69\x74\x68\x6f\x75\x74\x43\x6f\x6e\x74\x61\x63\x74'] || _0x57c6db;
        let _0x85a625;
        if (id[_0x4fdd5c(0x207)]('\x40\x67\x2e\x75\x73'))
            return new Promise(async _0x5d32a9 => {
                const _0x257d2d = _0x4fdd5c;
                _0x85a625 = _0xb0a529['\x63\x6f\x6e\x74\x61\x63\x74\x73'][id] || {};
                if (!(_0x85a625[_0x257d2d(0x28e)] || _0x85a625[_0x257d2d(0x21f)]))
                    _0x85a625 = _0x4e1cc7[_0x257d2d(0x28f)](id) || {};
                _0x5d32a9(_0x85a625[_0x257d2d(0x28e)] || _0x85a625[_0x257d2d(0x21f)] || PhoneNumber('\x2b' + id[_0x257d2d(0x237)](_0x257d2d(0x280), ''))[_0x257d2d(0x1a9)](_0x257d2d(0x2bf)));
            });
        else
            _0x85a625 = id === '\x30\x40\x73\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x6e\x65\x74' ? {
                '\x69\x64': id,
                '\x6e\x61\x6d\x65': _0x4fdd5c(0x1ed)
            } : id === _0x4e1cc7['\x64\x65\x63\x6f\x64\x65\x4a\x69\x64'](_0x4e1cc7[_0x4fdd5c(0x27a)]['\x69\x64']) ? _0x4e1cc7[_0x4fdd5c(0x27a)] : _0xb0a529[_0x4fdd5c(0x21c)][id] || {};
        return (_0x57c6db ? '' : _0x85a625['\x6e\x61\x6d\x65']) || _0x85a625[_0x4fdd5c(0x21f)] || _0x85a625['\x76\x65\x72\x69\x66\x69\x65\x64\x4e\x61\x6d\x65'] || PhoneNumber('\x2b' + _0x4f968a[_0x4fdd5c(0x237)](_0x4fdd5c(0x280), ''))[_0x4fdd5c(0x1a9)](_0x4fdd5c(0x2bf));
    };
    _0x4e1cc7['\x73\x65\x72\x69\x61\x6c\x69\x7a\x65\x4d'] = _0x7930f4 => smsg(_0x4e1cc7, _0x7930f4, _0xb0a529);
    _0x4e1cc7['\x73\x65\x6e\x64\x54\x65\x78\x74'] = (_0x402786, _0x5d0d2b, _0x49a5da = '', _0x302800) => _0x4e1cc7[_0x508f88(0x1c7)](_0x402786, {
        '\x74\x65\x78\x74': _0x5d0d2b,
        ..._0x302800
    }, { '\x71\x75\x6f\x74\x65\x64': _0x49a5da });
    _0x4e1cc7[_0x508f88(0x240)] = async (_0x168e43, _0x3c8cf2, _0x14f5bf = _0x508f88(0x1ce), _0x57d5bf = '', _0x4f0db3 = {}) => {
        const _0x42f09b = _0x508f88;
        let _0x425848 = [];
        for (let _0x3a5a8f of _0x3c8cf2) {
            const _0xcba47c = {};
            _0xcba47c[_0x42f09b(0x282)] = botname;
            _0xcba47c[_0x42f09b(0x25c)] = _0x42f09b(0x211) + '\x56\x45\x52\x53\x49\x4f\x4e\x3a\x33\x2e\x30\x0a' + (_0x42f09b(0x266) + botname + _0x42f09b(0x275)) + ('\x46\x4e\x3a' + botname + '\x0a') + _0x42f09b(0x261) + '\x54\x49\x54\x4c\x45\x3a\x0a' + (_0x42f09b(0x259) + _0x3a5a8f + '\x3a' + _0x3a5a8f + '\x0a') + _0x42f09b(0x1fa) + (_0x42f09b(0x2bc) + _0x14f5bf + '\x0a') + (_0x42f09b(0x253) + botname + '\x0a') + _0x42f09b(0x2b7);
            _0x425848['\x70\x75\x73\x68'](_0xcba47c);
        }
        const _0x3f8146 = {};
        _0x3f8146[_0x42f09b(0x282)] = _0x425848['\x6c\x65\x6e\x67\x74\x68'] + _0x42f09b(0x299);
        _0x3f8146[_0x42f09b(0x21c)] = _0x425848;
        const _0x3e693e = {
            '\x63\x6f\x6e\x74\x61\x63\x74\x73': _0x3f8146,
            ..._0x4f0db3
        };
        const _0x5485c6 = {};
        _0x5485c6[_0x42f09b(0x292)] = _0x57d5bf;
        _0x4e1cc7[_0x42f09b(0x1c7)](_0x168e43, _0x3e693e, _0x5485c6);
    };
    _0x4e1cc7['\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x4d\x65\x64\x69\x61\x4d\x65\x73\x73\x61\x67\x65'] = async _0x3816be => {
        const _0x4cffa5 = _0x508f88;
        let _0x460c08 = (_0x3816be[_0x4cffa5(0x1e0)] || _0x3816be)['\x6d\x69\x6d\x65\x74\x79\x70\x65'] || '';
        let _0x18cd1c = _0x3816be['\x6d\x74\x79\x70\x65'] ? _0x3816be[_0x4cffa5(0x2a5)][_0x4cffa5(0x237)](/Message/gi, '') : _0x460c08[_0x4cffa5(0x1df)]('\x2f')[0x0];
        const _0x18bfd0 = await downloadContentFromMessage(_0x3816be, _0x18cd1c);
        let _0x164065 = Buffer[_0x4cffa5(0x271)]([]);
        for await (const _0x2f8538 of _0x18bfd0) {
            _0x164065 = Buffer[_0x4cffa5(0x27b)]([
                _0x164065,
                _0x2f8538
            ]);
        }
        return _0x164065;
    };
    _0x4e1cc7['\x73\x65\x6e\x64\x49\x6d\x61\x67\x65\x41\x73\x53\x74\x69\x63\x6b\x65\x72'] = async (_0x2b8263, _0x32c6d0, _0x58f3d3, _0x1010f8 = {}) => {
        const _0x4be588 = _0x508f88;
        let _0x36d6d7 = Buffer['\x69\x73\x42\x75\x66\x66\x65\x72'](_0x32c6d0) ? _0x32c6d0 : /^data:.?\/.?;base64,/i['\x74\x65\x73\x74'](_0x32c6d0) ? Buffer[_0x4be588(0x271)](_0x32c6d0[_0x4be588(0x1df)]`,`[0x1], '\x62\x61\x73\x65\x36\x34') : /^https?:\/\//[_0x4be588(0x203)](_0x32c6d0) ? await await getBuffer(_0x32c6d0) : fs[_0x4be588(0x229)](_0x32c6d0) ? fs[_0x4be588(0x268)](_0x32c6d0) : Buffer[_0x4be588(0x241)](0x0);
        let _0x1942d1;
        if (_0x1010f8 && (_0x1010f8[_0x4be588(0x2bd)] || _0x1010f8[_0x4be588(0x1a7)])) {
            _0x1942d1 = await writeExifImg(_0x36d6d7, _0x1010f8);
        } else {
            _0x1942d1 = await imageToWebp(_0x36d6d7);
        }
        const _0x5973b2 = {};
        _0x5973b2['\x75\x72\x6c'] = _0x1942d1;
        const _0x49d4b4 = {
            '\x73\x74\x69\x63\x6b\x65\x72': _0x5973b2,
            ..._0x1010f8
        };
        const _0xd61f53 = {};
        _0xd61f53[_0x4be588(0x292)] = _0x58f3d3;
        await _0x4e1cc7[_0x4be588(0x1c7)](_0x2b8263, _0x49d4b4, _0xd61f53);
        return _0x1942d1;
    };
    _0x4e1cc7['\x73\x65\x6e\x64\x56\x69\x64\x65\x6f\x41\x73\x53\x74\x69\x63\x6b\x65\x72'] = async (_0x18b152, _0x3dc01a, _0x45d691, _0xaa0f5c = {}) => {
        const _0x584839 = _0x508f88;
        let _0x10018c = Buffer[_0x584839(0x29f)](_0x3dc01a) ? _0x3dc01a : /^data:.?\/.?;base64,/i[_0x584839(0x203)](_0x3dc01a) ? Buffer[_0x584839(0x271)](_0x3dc01a['\x73\x70\x6c\x69\x74']`,`[0x1], _0x584839(0x2ba)) : /^https?:\/\//[_0x584839(0x203)](_0x3dc01a) ? await await getBuffer(_0x3dc01a) : fs[_0x584839(0x229)](_0x3dc01a) ? fs['\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63'](_0x3dc01a) : Buffer['\x61\x6c\x6c\x6f\x63'](0x0);
        let _0x4cb0fc;
        if (_0xaa0f5c && (_0xaa0f5c['\x70\x61\x63\x6b\x6e\x61\x6d\x65'] || _0xaa0f5c[_0x584839(0x1a7)])) {
            _0x4cb0fc = await writeExifVid(_0x10018c, _0xaa0f5c);
        } else {
            _0x4cb0fc = await videoToWebp(_0x10018c);
        }
        const _0x1ed56a = {};
        _0x1ed56a['\x75\x72\x6c'] = _0x4cb0fc;
        const _0x3b568c = {
            '\x73\x74\x69\x63\x6b\x65\x72': _0x1ed56a,
            ..._0xaa0f5c
        };
        const _0x3733cf = {};
        _0x3733cf[_0x584839(0x292)] = _0x45d691;
        await _0x4e1cc7[_0x584839(0x1c7)](_0x18b152, _0x3b568c, _0x3733cf);
        return _0x4cb0fc;
    };
    _0x4e1cc7[_0x508f88(0x210)] = (_0x47c087, _0x27fd15 = '', _0x36e787, _0xca5de0) => {
        const _0x10f629 = _0x508f88;
        return Buffer[_0x10f629(0x29f)](_0x27fd15) ? this['\x73\x65\x6e\x64\x46\x69\x6c\x65'](_0x47c087, _0x27fd15, _0x10f629(0x265), '', _0x36e787, ![], _0xca5de0) : _0x4e1cc7[_0x10f629(0x1c7)](_0x47c087, {
            ..._0xca5de0,
            '\x74\x65\x78\x74': _0x27fd15
        }, {
            '\x71\x75\x6f\x74\x65\x64': _0x36e787,
            ..._0xca5de0
        });
    };
    _0x4e1cc7['\x73\x65\x6e\x64\x4d\x65\x64\x69\x61'] = async (_0x2dd8c5, _0x2103f9, _0x2933a7, _0x4d779b = {}) => {
        const _0x44def6 = _0x508f88;
        let {
            ext: _0x42a942,
            mime: _0x183745,
            data: _0x2a2a63
        } = await _0x4e1cc7[_0x44def6(0x2ab)](_0x2103f9);
        messageType = _0x183745['\x73\x70\x6c\x69\x74']('\x2f')[0x0];
        pase = messageType[_0x44def6(0x237)](_0x44def6(0x1a2), '\x64\x6f\x63\x75\x6d\x65\x6e\x74') || messageType;
        const _0x5912bb = {
            ['' + pase]: _0x2a2a63,
            '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0x183745,
            ..._0x4d779b
        };
        const _0x3b0f81 = {};
        _0x3b0f81[_0x44def6(0x292)] = _0x2933a7;
        return await _0x4e1cc7[_0x44def6(0x1c7)](_0x2dd8c5, _0x5912bb, _0x3b0f81);
    };
    _0x4e1cc7[_0x508f88(0x2ab)] = async (_0x381abf, _0x12b396) => {
        const _0x10dc01 = _0x508f88;
        let _0xc1dd12;
        let _0x2bb780 = Buffer[_0x10dc01(0x29f)](_0x381abf) ? _0x381abf : /^data:.*?\/.*?;base64,/i[_0x10dc01(0x203)](_0x381abf) ? Buffer[_0x10dc01(0x271)](_0x381abf[_0x10dc01(0x1df)]('\x2c')[0x1], _0x10dc01(0x2ba)) : /^https?:\/\//[_0x10dc01(0x203)](_0x381abf) ? await (_0xc1dd12 = await getBuffer(_0x381abf)) : fs[_0x10dc01(0x229)](_0x381abf) ? (filename = _0x381abf, fs[_0x10dc01(0x268)](_0x381abf)) : typeof _0x381abf === '\x73\x74\x72\x69\x6e\x67' ? _0x381abf : Buffer[_0x10dc01(0x241)](0x0);
        const _0x568d5f = {};
        _0x568d5f[_0x10dc01(0x222)] = _0x10dc01(0x248);
        _0x568d5f[_0x10dc01(0x1de)] = _0x10dc01(0x1aa);
        let _0x352cec = await FileType[_0x10dc01(0x205)](_0x2bb780) || _0x568d5f;
        filename = path[_0x10dc01(0x209)](__dirname, _0x10dc01(0x274) + new Date()[_0x10dc01(0x295)]() + '\x2e' + _0x352cec[_0x10dc01(0x1de)]);
        if (_0x2bb780 && _0x12b396)
            fs[_0x10dc01(0x285)][_0x10dc01(0x1ae)](filename, _0x2bb780);
        return {
            '\x72\x65\x73': _0xc1dd12,
            '\x66\x69\x6c\x65\x6e\x61\x6d\x65': filename,
            '\x73\x69\x7a\x65': await getSizeMedia(_0x2bb780),
            ..._0x352cec,
            '\x64\x61\x74\x61': _0x2bb780
        };
    };
    _0x4e1cc7[_0x508f88(0x2a2)] = async (_0x39244f, _0x58477d, _0x38b85e = '', _0x426b05 = '', _0x56748d, _0x26def0 = ![], _0x1e9ba4 = {}) => {
        const _0x3731d0 = _0x508f88;
        let _0x154b24 = await _0x4e1cc7[_0x3731d0(0x2ab)](_0x58477d, !![]);
        let {
            res: _0x5cd95d,
            data: _0x32a537,
            filename: _0x13c8f1
        } = _0x154b24;
        if (_0x5cd95d && _0x5cd95d['\x73\x74\x61\x74\x75\x73'] !== 0xc8 || _0x32a537[_0x3731d0(0x2ad)] <= 0x10000) {
            try {
                throw { '\x6a\x73\x6f\x6e': JSON[_0x3731d0(0x247)](_0x32a537['\x74\x6f\x53\x74\x72\x69\x6e\x67']()) };
            } catch (_0x36b12c) {
                if (_0x36b12c[_0x3731d0(0x283)])
                    throw _0x36b12c[_0x3731d0(0x283)];
            }
        }
        const _0x166243 = {};
        _0x166243[_0x3731d0(0x23e)] = _0x38b85e;
        let _0x5bb386 = _0x166243;
        if (_0x56748d)
            _0x5bb386['\x71\x75\x6f\x74\x65\x64'] = _0x56748d;
        if (!_0x154b24)
            _0x1e9ba4[_0x3731d0(0x1c3)] = !![];
        let _0x1794a7 = '', _0x1ecb08 = _0x154b24[_0x3731d0(0x222)], _0x19f755;
        if (/webp/[_0x3731d0(0x203)](_0x154b24[_0x3731d0(0x222)]) || /image/[_0x3731d0(0x203)](_0x154b24['\x6d\x69\x6d\x65']) && _0x1e9ba4[_0x3731d0(0x1f8)])
            _0x1794a7 = _0x3731d0(0x1bb);
        else if (/image/[_0x3731d0(0x203)](_0x154b24['\x6d\x69\x6d\x65']) || /webp/[_0x3731d0(0x203)](_0x154b24[_0x3731d0(0x222)]) && _0x1e9ba4['\x61\x73\x49\x6d\x61\x67\x65'])
            _0x1794a7 = _0x3731d0(0x25d);
        else if (/video/[_0x3731d0(0x203)](_0x154b24[_0x3731d0(0x222)]))
            _0x1794a7 = _0x3731d0(0x288);
        else if (/audio/[_0x3731d0(0x203)](_0x154b24[_0x3731d0(0x222)]))
            _0x19f755 = await (_0x26def0 ? toPTT : toAudio)(_0x32a537, _0x154b24[_0x3731d0(0x1de)]), _0x32a537 = _0x19f755['\x64\x61\x74\x61'], _0x13c8f1 = _0x19f755[_0x3731d0(0x23e)], _0x1794a7 = _0x3731d0(0x267), _0x1ecb08 = '\x61\x75\x64\x69\x6f\x2f\x6f\x67\x67\x3b\x20\x63\x6f\x64\x65\x63\x73\x3d\x6f\x70\x75\x73';
        else
            _0x1794a7 = _0x3731d0(0x29e);
        if (_0x1e9ba4[_0x3731d0(0x1c3)])
            _0x1794a7 = '\x64\x6f\x63\x75\x6d\x65\x6e\x74';
        const _0x32e514 = {};
        _0x32e514[_0x3731d0(0x26c)] = _0x13c8f1;
        const _0x5130b1 = { ..._0x1e9ba4 };
        _0x5130b1['\x63\x61\x70\x74\x69\x6f\x6e'] = _0x426b05;
        _0x5130b1[_0x3731d0(0x1b9)] = _0x26def0;
        _0x5130b1[_0x1794a7] = _0x32e514;
        _0x5130b1[_0x3731d0(0x231)] = _0x1ecb08;
        let _0x288cb5 = _0x5130b1;
        let _0x407d0c;
        try {
            const _0x343b4c = {
                ..._0x5bb386,
                ..._0x1e9ba4
            };
            _0x407d0c = await _0x4e1cc7[_0x3731d0(0x1c7)](_0x39244f, _0x288cb5, _0x343b4c);
        } catch (_0xf123e) {
            console[_0x3731d0(0x272)](_0xf123e);
            _0x407d0c = null;
        } finally {
            const _0x4dc6fb = { ..._0x288cb5 };
            _0x4dc6fb[_0x1794a7] = _0x32a537;
            const _0x584a40 = {
                ..._0x5bb386,
                ..._0x1e9ba4
            };
            if (!_0x407d0c)
                _0x407d0c = await _0x4e1cc7[_0x3731d0(0x1c7)](_0x39244f, _0x4dc6fb, _0x584a40);
            return _0x407d0c;
        }
    };
    _0x4e1cc7[_0x508f88(0x1e2)] = async (_0xa21093, _0x103676, _0x105d08 = !![]) => {
        const _0x5341c2 = _0x508f88;
        let _0x4d816d = _0xa21093['\x6d'] ? _0xa21093['\x6d'] : _0xa21093;
        let _0x568b61 = (_0xa21093['\x6d'] || _0xa21093)[_0x5341c2(0x231)] || '';
        let _0x540285 = _0xa21093[_0x5341c2(0x2a5)] ? _0xa21093[_0x5341c2(0x2a5)][_0x5341c2(0x237)](/Message/gi, '') : _0x568b61[_0x5341c2(0x1df)]('\x2f')[0x0];
        const _0x520d35 = await downloadContentFromMessage(_0x4d816d, _0x540285);
        let _0x545d54 = Buffer[_0x5341c2(0x271)]([]);
        for await (const _0x1f297c of _0x520d35) {
            _0x545d54 = Buffer[_0x5341c2(0x27b)]([
                _0x545d54,
                _0x1f297c
            ]);
        }
        let _0x509414 = await FileType['\x66\x72\x6f\x6d\x42\x75\x66\x66\x65\x72'](_0x545d54);
        trueFileName = _0x105d08 ? _0x103676 + '\x2e' + _0x509414[_0x5341c2(0x1de)] : _0x103676;
        const _0x3c112f = '\x2e\x2f\x74\x6d\x70\x2f';
        if (!fs['\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63'](_0x3c112f)) {
            fs[_0x5341c2(0x26f)](_0x3c112f);
        }
        const _0x518ad7 = _0x3c112f + '\x2f' + trueFileName;
        await fs[_0x5341c2(0x26d)](_0x518ad7, _0x545d54);
        return _0x518ad7;
    };
    return _0x4e1cc7;
}
async function startBot() {
    const _0x1630d1 = _0x333d56;
    try {
        let _0x1f727d = global[_0x1630d1(0x204)];
        if (!_0x1f727d) {
            log('\x45\x52\x52\x4f\x52', '\x53\x65\x73\x73\x69\x6f\x6e\x20\x49\x44\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x2e\x20\x50\x6c\x65\x61\x73\x65\x20\x61\x64\x64\x20\x6f\x6e\x65\x20\x69\x6e\x20\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73');
            return;
        }
        if (!/^Arch[_~]|^Ednut~/[_0x1630d1(0x203)](_0x1f727d)) {
            log('\x45\x52\x52\x4f\x52', '\x49\x6e\x76\x61\x6c\x69\x64\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x49\x44\x2e\x20\x50\x6c\x65\x61\x73\x65\x20\x73\x63\x61\x6e\x20\x61\x20\x6e\x65\x77\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x66\x72\x6f\x6d\x20' + global[_0x1630d1(0x2bb)]);
            return;
        }
        const _0x2e4633 = _0x1f727d[_0x1630d1(0x237)](/^Arch[_~]|^Ednut~/, '');
        const _0x349572 = await axios[_0x1630d1(0x20a)](_0x1630d1(0x219) + _0x2e4633 + _0x1630d1(0x1f7));
        const _0x59297c = __dirname + '\x2f\x74\x6d\x70\x2f\x73\x65\x73\x73\x69\x6f\x6e\x2f\x63\x72\x65\x64\x73\x2e\x6a\x73\x6f\x6e';
        fs['\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63'](_0x59297c, JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x349572[_0x1630d1(0x27d)]));
        if (global['\x65\x64\x6e\x75\x74']?.['\x65\x76']) {
            global[_0x1630d1(0x2b0)]['\x65\x76'][_0x1630d1(0x29a)]();
            global[_0x1630d1(0x2b0)] = null;
        }
        startBotz();
    } catch (_0x26b181) {
        log(_0x1630d1(0x262), _0x1630d1(0x28b) + (_0x26b181?.[_0x1630d1(0x24f)] || _0x26b181));
    }
}
startBot();
process['\x6f\x6e'](_0x333d56(0x1f9), function (_0x395755) {
    const _0x5e20ae = _0x333d56;
    const _0x3735b0 = String(_0x395755 || '');
    const _0x2ec696 = [
        '\x63\x6f\x6e\x66\x6c\x69\x63\x74',
        _0x5e20ae(0x22a),
        '\x6e\x6f\x74\x2d\x61\x75\x74\x68\x6f\x72\x69\x7a\x65\x64',
        _0x5e20ae(0x1a1),
        '\x72\x61\x74\x65\x2d\x6f\x76\x65\x72\x6c\x69\x6d\x69\x74',
        '\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x43\x6c\x6f\x73\x65\x64',
        _0x5e20ae(0x20d),
        _0x5e20ae(0x1b3),
        _0x5e20ae(0x1d7),
        '\x43\x6c\x6f\x73\x69\x6e\x67\x20\x73\x74\x61\x6c\x65\x20\x6f\x70\x65\x6e\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x66\x6f\x72\x20\x6e\x65\x77\x20\x6f\x75\x74\x67\x6f\x69\x6e\x67\x20\x70\x72\x65\x6b\x65\x79\x20\x62\x75\x6e\x64\x6c\x65',
        _0x5e20ae(0x26b),
        _0x5e20ae(0x257),
        _0x5e20ae(0x1dd),
        _0x5e20ae(0x25a),
        '\x45\x72\x72\x6f\x72\x3a\x20\x72\x65\x61\x64\x20\x45\x43\x4f\x4e\x4e\x52\x45\x53\x45\x54'
    ];
    if (_0x2ec696[_0x5e20ae(0x22e)](_0x6a9bd7 => _0x3735b0[_0x5e20ae(0x215)]()[_0x5e20ae(0x277)](_0x6a9bd7[_0x5e20ae(0x215)]()))) {
        return;
    }
    log(_0x5e20ae(0x262), _0x5e20ae(0x250) + (_0x395755?.[_0x5e20ae(0x24f)] || _0x3735b0));
});
const express = require(_0x333d56(0x19f));
const app = express();
const port = process[_0x333d56(0x29b)][_0x333d56(0x1eb)] || 0xbb8;
app[_0x333d56(0x20a)]('\x2f', (_0x5d0aa6, _0x59c997) => _0x59c997[_0x333d56(0x1fb)](_0x333d56(0x2b4)));
app[_0x333d56(0x1b5)](port);