const _0xb7ddc9 = _0x5e23;
(function (_0x5c02a1, _0x22a500) {
    const _0x39be9c = _0x5e23;
    const _0x752107 = _0x5c02a1();
    while (!![]) {
        try {
            const _0xf52e2c = parseInt(_0x39be9c(0x17a)) / 0x1 * (-parseInt(_0x39be9c(0x178)) / 0x2) + parseInt(_0x39be9c(0x1a4)) / 0x3 + -parseInt(_0x39be9c(0x19c)) / 0x4 + -parseInt(_0x39be9c(0x1a0)) / 0x5 + parseInt(_0x39be9c(0x198)) / 0x6 * (-parseInt(_0x39be9c(0x196)) / 0x7) + parseInt(_0x39be9c(0x19d)) / 0x8 * (parseInt(_0x39be9c(0x181)) / 0x9) + parseInt(_0x39be9c(0x176)) / 0xa;
            if (_0xf52e2c === _0x22a500) {
                break;
            } else {
                _0x752107['push'](_0x752107['shift']());
            }
        } catch (_0x10dcad) {
            _0x752107['push'](_0x752107['shift']());
        }
    }
}(_0x4fd2, 0x6d927));
const qrcode = require(_0xb7ddc9(0x1a8));
const fs = require('fs');
const pino = require(_0xb7ddc9(0x16b));
const {
    default: makeWASocket,
    Browsers,
    delay,
    useMultiFileAuthState,
    BufferJSON,
    fetchLatestBaileysVersion,
    PHONENUMBER_MCC,
    DisconnectReason,
    makeInMemoryStore,
    jidNormalizedUser,
    makeCacheableSignalKeyStore
} = require(_0xb7ddc9(0x18d));
const Pino = require(_0xb7ddc9(0x16b));
const NodeCache = require(_0xb7ddc9(0x1ad));
const chalk = require('chalk');
function _0x5e23(_0x5b6187, _0x54eb2e) {
    const _0x4fd2f4 = _0x4fd2();
    _0x5e23 = function (_0x5e2306, _0x135bae) {
        _0x5e2306 = _0x5e2306 - 0x168;
        let _0x16bff0 = _0x4fd2f4[_0x5e2306];
        return _0x16bff0;
    };
    return _0x5e23(_0x5b6187, _0x54eb2e);
}
const readline = require(_0xb7ddc9(0x188));
const {parsePhoneNumber} = require(_0xb7ddc9(0x186));
let phoneNumber = _0xb7ddc9(0x17c);
const pairingCode = !!phoneNumber || process[_0xb7ddc9(0x1aa)][_0xb7ddc9(0x194)](_0xb7ddc9(0x1a1));
const useMobile = process[_0xb7ddc9(0x1aa)]['includes']('--mobile');
const rl = readline[_0xb7ddc9(0x171)]({
    'input': process['stdin'],
    'output': process[_0xb7ddc9(0x1ab)]
});
const question = _0x41ea2a => new Promise(_0x502bb9 => rl['question'](_0x41ea2a, _0x502bb9));
async function qr() {
    const _0x21f8ea = _0xb7ddc9;
    let {
        version: _0x59e80b,
        isLatest: _0x2048be
    } = await fetchLatestBaileysVersion();
    const {
        state: _0x14f3e8,
        saveCreds: _0x5300fa
    } = await useMultiFileAuthState('./sessions');
    const _0x36f842 = new NodeCache();
    const _0x5a54fc = makeWASocket({
        'logger': pino({ 'level': _0x21f8ea(0x197) }),
        'printQRInTerminal': !pairingCode,
        'browser': Browsers[_0x21f8ea(0x19b)](_0x21f8ea(0x193)),
        'auth': {
            'creds': _0x14f3e8['creds'],
            'keys': makeCacheableSignalKeyStore(_0x14f3e8[_0x21f8ea(0x1a9)], Pino({ 'level': _0x21f8ea(0x18b) })[_0x21f8ea(0x172)]({ 'level': _0x21f8ea(0x18b) }))
        },
        'markOnlineOnConnect': !![],
        'generateHighQualityLinkPreview': !![],
        'getMessage': async _0x225c61 => {
            const _0x45ef00 = _0x21f8ea;
            let _0x12466c = jidNormalizedUser(_0x225c61[_0x45ef00(0x199)]);
            let _0x528e93 = await store[_0x45ef00(0x1a6)](_0x12466c, _0x225c61['id']);
            return _0x528e93?.[_0x45ef00(0x189)] || '';
        },
        'msgRetryCounterCache': _0x36f842,
        'defaultQueryTimeoutMs': undefined
    });
    if (pairingCode && !_0x5a54fc[_0x21f8ea(0x183)]['creds'][_0x21f8ea(0x18c)]) {
        if (useMobile)
            throw new Error(_0x21f8ea(0x16a));
        let _0x136221;
        if (!!_0x136221) {
            _0x136221 = _0x136221['replace'](/[^0-9]/g, '');
            if (!Object['keys'](PHONENUMBER_MCC)[_0x21f8ea(0x179)](_0x5fe0b9 => _0x136221['startsWith'](_0x5fe0b9))) {
                console[_0x21f8ea(0x18e)](chalk[_0x21f8ea(0x182)](chalk[_0x21f8ea(0x19f)](_0x21f8ea(0x16c))));
                process[_0x21f8ea(0x19a)](0x0);
            }
        } else {
            _0x136221 = await question(chalk['bgBlack'](chalk[_0x21f8ea(0x1a2)]('Please\x20type\x20your\x20WhatsApp\x20number\x20😍\x0aFor\x20example:\x20254711111111\x20:\x20')));
            _0x136221 = _0x136221[_0x21f8ea(0x19e)](/[^0-9]/g, '');
            if (!Object[_0x21f8ea(0x1a9)](PHONENUMBER_MCC)[_0x21f8ea(0x179)](_0x5a9943 => _0x136221[_0x21f8ea(0x16d)](_0x5a9943))) {
                console[_0x21f8ea(0x18e)](chalk[_0x21f8ea(0x182)](chalk[_0x21f8ea(0x19f)](_0x21f8ea(0x16c))));
                _0x136221 = await question(chalk[_0x21f8ea(0x182)](chalk[_0x21f8ea(0x1a2)](_0x21f8ea(0x17d))));
                _0x136221 = _0x136221[_0x21f8ea(0x19e)](/[^0-9]/g, '');
                rl[_0x21f8ea(0x169)]();
            }
        }
        setTimeout(async () => {
            const _0x3f17b2 = _0x21f8ea;
            let _0x1beace = await _0x5a54fc[_0x3f17b2(0x185)](_0x136221);
            _0x1beace = _0x1beace?.[_0x3f17b2(0x190)](/.{1,4}/g)?.[_0x3f17b2(0x168)]('-') || _0x1beace;
            console[_0x3f17b2(0x18e)](chalk[_0x3f17b2(0x16e)](chalk[_0x3f17b2(0x187)](_0x3f17b2(0x191))), chalk[_0x3f17b2(0x16e)](chalk[_0x3f17b2(0x175)](_0x1beace)));
        }, 0xbb8);
    }
    _0x5a54fc['ev']['on'](_0x21f8ea(0x180), async _0x348ecd => {
        const _0xc0e7d4 = _0x21f8ea;
        const {
            connection: _0x5ec5c2,
            lastDisconnect: _0x3dee09
        } = _0x348ecd;
        if (_0x5ec5c2 == 'open') {
            await delay(0x3e8 * 0xa);
            await _0x5a54fc[_0xc0e7d4(0x18a)](_0x5a54fc[_0xc0e7d4(0x17e)]['id'], { 'text': _0xc0e7d4(0x18f) });
            let _0xab8297 = fs[_0xc0e7d4(0x1a3)](_0xc0e7d4(0x184));
            await delay(0x3e8 * 0x2);
            const _0x5a8c4d = await _0x5a54fc['sendMessage'](_0x5a54fc['user']['id'], {
                'document': _0xab8297,
                'mimetype': _0xc0e7d4(0x1a7),
                'fileName': _0xc0e7d4(0x195)
            });
            await _0x5a54fc[_0xc0e7d4(0x18a)](_0x5a54fc[_0xc0e7d4(0x17e)]['id'], { 'text': _0xc0e7d4(0x170) }, { 'quoted': _0x5a8c4d });
            await delay(0x3e8 * 0x2);
            process[_0xc0e7d4(0x19a)](0x0);
        }
        if (_0x5ec5c2 === _0xc0e7d4(0x169) && _0x3dee09 && _0x3dee09[_0xc0e7d4(0x173)] && _0x3dee09[_0xc0e7d4(0x173)][_0xc0e7d4(0x1ae)][_0xc0e7d4(0x192)] != 0x191) {
            qr();
        }
    });
    _0x5a54fc['ev']['on']('creds.update', _0x5300fa);
    _0x5a54fc['ev']['on'](_0x21f8ea(0x174), () => {
    });
}
function _0x4fd2() {
    const _0xd4243a = [
        'includes',
        'creds.json',
        '1903223GhCagw',
        'silent',
        '12GSsgrx',
        'remoteJid',
        'exit',
        'windows',
        '1698308sHjhdD',
        '457136eIdaMW',
        'replace',
        'redBright',
        '2105725PbkUTu',
        '--pairing-code',
        'greenBright',
        'readFileSync',
        '1959549CBoGJn',
        'Socket\x20connection\x20timeout',
        'loadMessage',
        'application/json',
        'qrcode-terminal',
        'keys',
        'argv',
        'stdout',
        'not-authorized',
        'node-cache',
        'output',
        'join',
        'close',
        'Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20api',
        'pino',
        'Start\x20with\x20country\x20code\x20of\x20your\x20WhatsApp\x20Number,\x20Example\x20:\x20254711111111',
        'startsWith',
        'black',
        'Timed\x20Out',
        '\x0a>\x20*ABOVE\x20IS\x20YOUR\x20CREDS.JSON\x20FILE.*\x0a>\x20*USE\x20IT\x20TO\x20DEPLOY\x20YOUR\x20BOT.*\x0a╔═════◇\x0a║\x20『•••\x20𝗩𝗶𝘀𝗶𝘁\x20𝗙𝗼𝗿\x20𝗛𝗲𝗹𝗽\x20•••\x0a❒\x20𝐘𝐨𝐮𝐭𝐮𝐛𝐞:\x20youtube.com/@giftedtechnexus\x0a❒\x20𝐎𝐰𝐧𝐞𝐫:\x20t.me/giftedmd\x0a❒\x20𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥:\x20https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l\x0a❒\x20𝐆𝐢𝐭𝐡𝐮𝐛:\x20https://github.com/mouricedevs\x0a❒\x20𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫:\x20Gifted\x20Tech\x0a╚═══════════════╝\x0a\x20*𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗\x20𝗩𝟱💜💜💜*\x0a___________________________\x0a-\x20Don\x27t\x20Forget\x20To\x20Fork\x20and\x20Give\x20a\x20Star⭐\x20To\x20My\x20Repo.\x0a-\x20Check\x20Out\x20the\x20YouTube\x20Channel\x20Above\x20for\x20Tutorials.\x0a\x0a\x20',
        'createInterface',
        'child',
        'error',
        'messages.upsert',
        'white',
        '12549120bJfhyl',
        'Connection\x20Closed',
        '20GmPmQK',
        'some',
        '12693qLkMKa',
        'Value\x20not\x20found',
        '254711111111',
        'Please\x20type\x20your\x20WhatsApp\x20number\x20😍\x0aFor\x20example:\x20254711111111\x20:\x20',
        'user',
        'conflict',
        'connection.update',
        '9sDpvNy',
        'bgBlack',
        'authState',
        './sessions/creds.json',
        'requestPairingCode',
        'libphonenumber-js',
        'bgGreen',
        'readline',
        'message',
        'sendMessage',
        'fatal',
        'registered',
        '@whiskeysockets/baileys',
        'log',
        '\x0a>\x20*DEVICE\x20SUCCESSFULLY\x20LINKED!!!*\x0a\x0a\x0a',
        'match',
        'Your\x20Pairing\x20Code\x20:\x20',
        'statusCode',
        'Firefox'
    ];
    _0x4fd2 = function () {
        return _0xd4243a;
    };
    return _0x4fd2();
}
qr();
process['on']('uncaughtException', function (_0x4ec20d) {
    const _0x557591 = _0xb7ddc9;
    let _0x527a6f = String(_0x4ec20d);
    if (_0x527a6f[_0x557591(0x194)](_0x557591(0x17f)))
        return;
    if (_0x527a6f[_0x557591(0x194)](_0x557591(0x1ac)))
        return;
    if (_0x527a6f[_0x557591(0x194)](_0x557591(0x1a5)))
        return;
    if (_0x527a6f[_0x557591(0x194)]('rate-overlimit'))
        return;
    if (_0x527a6f['includes'](_0x557591(0x177)))
        return;
    if (_0x527a6f['includes'](_0x557591(0x16f)))
        return;
    if (_0x527a6f[_0x557591(0x194)](_0x557591(0x17b)))
        return;
    console['log']('Caught\x20exception:\x20', _0x4ec20d);
});
