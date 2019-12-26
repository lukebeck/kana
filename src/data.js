const data = [
  {
    hiragana: 'あ',
    katakana: 'ア',
    romaji: 'a',
    group: 1
  },
  {
    hiragana: 'い',
    katakana: 'イ',
    romaji: 'i',
    group: 1
  },
  {
    hiragana: 'う',
    katakana: 'ウ',
    romaji: 'u',
    group: 1
  },
  {
    hiragana: 'え',
    katakana: 'エ',
    romaji: 'e',
    group: 1
  },
  {
    hiragana: 'お',
    katakana: 'オ',
    romaji: 'o',
    group: 1
  },
  {
    hiragana: 'か',
    katakana: 'カ',
    romaji: 'ka',
    group: 2
  },
  {
    hiragana: 'き',
    katakana: 'キ',
    romaji: 'ki',
    group: 2
  },
  {
    hiragana: 'く',
    katakana: 'ク',
    romaji: 'ku',
    group: 2
  },
  {
    hiragana: 'け',
    katakana: 'ケ',
    romaji: 'ke',
    group: 2
  },
  {
    hiragana: 'こ',
    katakana: 'コ',
    romaji: 'ko',
    group: 2
  },
  {
    hiragana: 'さ',
    katakana: 'サ',
    romaji: 'sa',
    group: 3
  },
  {
    hiragana: 'し',
    katakana: 'シ',
    romaji: 'shi',
    group: 3
  },
  {
    hiragana: 'す',
    katakana: 'ス',
    romaji: 'su',
    group: 3
  },
  {
    hiragana: 'せ',
    katakana: 'セ',
    romaji: 'se',
    group: 3
  },
  {
    hiragana: 'そ',
    katakana: 'ソ',
    romaji: 'so',
    group: 3
  },

  {
    hiragana: 'た',
    katakana: 'タ',
    romaji: 'ta',
    group: 4
  },
  {
    hiragana: 'ち',
    katakana: 'チ',
    romaji: 'chi',
    group: 4
  },
  {
    hiragana: 'つ',
    katakana: 'ツ',
    romaji: 'tsu',
    group: 4
  },
  {
    hiragana: 'て',
    katakana: 'テ',
    romaji: 'te',
    group: 4
  },
  {
    hiragana: 'と',
    katakana: 'ト',
    romaji: 'to',
    group: 4
  },
  {
    hiragana: 'な',
    katakana: 'ナ',
    romaji: 'na',
    group: 5
  },
  {
    hiragana: 'に',
    katakana: 'ニ',
    romaji: 'ni',
    group: 5
  },
  {
    hiragana: 'ぬ',
    katakana: 'ヌ',
    romaji: 'nu',
    group: 5
  },
  {
    hiragana: 'ね',
    katakana: 'ネ',
    romaji: 'ne',
    group: 5
  },
  {
    hiragana: 'の',
    katakana: 'ノ',
    romaji: 'no',
    group: 5
  },
  {
    hiragana: 'は',
    katakana: 'ハ',
    romaji: 'ha',
    group: 6
  },
  {
    hiragana: 'ひ',
    katakana: 'ヒ',
    romaji: 'hi',
    group: 6
  },
  {
    hiragana: 'ふ',
    katakana: 'フ',
    romaji: 'fu',
    group: 6
  },
  {
    hiragana: 'へ',
    katakana: 'ヘ',
    romaji: 'he',
    group: 6
  },
  {
    hiragana: 'ほ',
    katakana: 'ホ',
    romaji: 'ho',
    group: 6
  },
  {
    hiragana: 'ま',
    katakana: 'マ',
    romaji: 'ma',
    group: 7
  },
  {
    hiragana: 'み',
    katakana: 'ミ',
    romaji: 'mi',
    group: 7
  },
  {
    hiragana: 'む',
    katakana: 'ム',
    romaji: 'mu',
    group: 7
  },
  {
    hiragana: 'め',
    katakana: 'メ',
    romaji: 'me',
    group: 7
  },
  {
    hiragana: 'も',
    katakana: 'モ',
    romaji: 'mo',
    group: 7
  },
  {
    hiragana: 'や',
    katakana: 'ヤ',
    romaji: 'ya',
    group: 8
  },
  {
    hiragana: 'ゆ',
    katakana: 'ユ',
    romaji: 'yu',
    group: 8
  },
  {
    hiragana: 'よ',
    katakana: 'ヨ',
    romaji: 'yo',
    group: 8
  },
  {
    hiragana: 'ら',
    katakana: 'ラ',
    romaji: 'ra',
    group: 9
  },
  {
    hiragana: 'り',
    katakana: 'リ',
    romaji: 'ri',
    group: 9
  },
  {
    hiragana: 'る',
    katakana: 'ル',
    romaji: 'ru',
    group: 9
  },
  {
    hiragana: 'れ',
    katakana: 'レ',
    romaji: 're',
    group: 9
  },
  {
    hiragana: 'ろ',
    katakana: 'ロ',
    romaji: 'ro',
    group: 9
  },
  {
    hiragana: 'わ',
    katakana: 'ワ',
    romaji: 'wa',
    group: 10
  },
  {
    hiragana: 'を',
    katakana: 'ヲ',
    romaji: 'wo',
    group: 10
  },
  {
    hiragana: 'ん',
    katakana: 'ン',
    romaji: 'n',
    group: 10
  },
  {
    hiragana: 'が',
    katakana: 'ガ',
    romaji: 'ga',
    group: 11
  },
  {
    hiragana: 'ぎ',
    katakana: 'ギ',
    romaji: 'gi',
    group: 11
  },
  {
    hiragana: 'ぐ',
    katakana: 'グ',
    romaji: 'gu',
    group: 11
  },
  {
    hiragana: 'げ',
    katakana: 'ゲ',
    romaji: 'ge',
    group: 11
  },
  {
    hiragana: 'ご',
    katakana: 'ゴ',
    romaji: 'go',
    group: 11
  },
  {
    hiragana: 'ざ',
    katakana: 'ザ',
    romaji: 'za',
    group: 12
  },
  {
    hiragana: 'じ',
    katakana: 'ジ',
    romaji: 'ji',
    group: 12
  },
  {
    hiragana: 'ず',
    katakana: 'ズ',
    romaji: 'zu',
    group: 12
  },
  {
    hiragana: 'ぜ',
    katakana: 'ゼ',
    romaji: 'ze',
    group: 12
  },
  {
    hiragana: 'ぞ',
    katakana: 'ゾ',
    romaji: 'zo',
    group: 12
  },
  {
    hiragana: 'だ',
    katakana: 'ダ',
    romaji: 'da',
    group: 13
  },
  {
    hiragana: 'ぢ',
    katakana: 'ヂ',
    romaji: 'dzi',
    group: 13
  },
  {
    hiragana: 'づ',
    katakana: 'ヅ',
    romaji: 'dzu',
    group: 13
  },
  {
    hiragana: 'で',
    katakana: 'デ',
    romaji: 'de',
    group: 13
  },
  {
    hiragana: 'ど',
    katakana: 'ド',
    romaji: 'do',
    group: 13
  },
  {
    hiragana: 'ば',
    katakana: 'バ',
    romaji: 'ba',
    group: 14
  },
  {
    hiragana: 'び',
    katakana: 'ビ',
    romaji: 'bi',
    group: 14
  },
  {
    hiragana: 'ぶ',
    katakana: 'ブ',
    romaji: 'bu',
    group: 14
  },
  {
    hiragana: 'べ',
    katakana: 'ベ',
    romaji: 'be',
    group: 14
  },
  {
    hiragana: 'ぼ',
    katakana: 'ボ',
    romaji: 'bo',
    group: 14
  },
  {
    hiragana: 'ぱ',
    katakana: 'パ',
    romaji: 'pa',
    group: 15
  },
  {
    hiragana: 'ぴ',
    katakana: 'ピ',
    romaji: 'pi',
    group: 15
  },
  {
    hiragana: 'ぷ',
    katakana: 'プ',
    romaji: 'pu',
    group: 15
  },
  {
    hiragana: 'ぺ',
    katakana: 'ペ',
    romaji: 'pe',
    group: 15
  },
  {
    hiragana: 'ぽ',
    katakana: 'ポ',
    romaji: 'po',
    group: 15
  }
]

export default data
