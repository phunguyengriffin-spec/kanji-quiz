/* ============================================================================
   data-n4.js — Ngân hàng câu hỏi JLPT N4 (Minna no Nihongo II, bài 26–50)
   ----------------------------------------------------------------------------
   MẺ 1/4 — 45 câu (n4-001 → n4-045). Các mẻ sau nối tiếp id n4-046 trở đi,
   cùng định dạng, cùng cách nhúng — chỉ cần thêm file hoặc thêm push().

   CÁCH NHÚNG:
     <script src="data-n4.js"></script>      (đặt TRƯỚC file app, hoặc sau đều được)
   hoặc dán trọn nội dung file này vào khoang <script> cuối app.

   ĐỊNH DẠNG MỘT CÂU:
     id            : mã duy nhất
     level         : "N4"
     type          : "reading"      → Mondai 1: cho câu văn, chọn cách đọc Hiragana
                     "kanji_select" → Mondai 2: cho câu văn Hiragana, chọn từ Kanji
     sentence      : câu tiếng Nhật hoàn chỉnh, phần cần hỏi bọc trong 【 】
     underline     : phần bị hỏi (đúng bằng nội dung trong 【 】)
     sentence_vi   : nghĩa tiếng Việt của cả câu
     options[4]    : 4 phương án A B C D
     answer        : phương án đúng (khớp đúng chuỗi trong options)
     correct_detail: phân tích sâu đáp án đúng — hiện khi trả lời ĐÚNG
                     { word, reading, hanviet, meaning, breakdown:[{k,hv,on,kun,parts,story}], note }
     all_details[4]: phân tích cả 4 phương án — hiện khi trả lời SAI
                     { option, ok, word, reading, hanviet, meaning, parts, note }
============================================================================ */
window.KANJI_DATABASE = window.KANJI_DATABASE || [];
window.KANJI_DATABASE.push(

/* ---------- bài 26–30: công việc, hẹn hò, chuẩn bị ---------- */
{
  id:"n4-001", level:"N4", type:"reading",
  sentence:"来週の【会議】は三時から始まります。",
  underline:"会議", sentence_vi:"Cuộc họp tuần sau bắt đầu từ 3 giờ.",
  options:["かいぎ","かいき","がいぎ","かいけい"], answer:"かいぎ",
  correct_detail:{
    word:"会議", reading:"かいぎ", hanviet:"HỘI NGHỊ", meaning:"cuộc họp, hội nghị",
    breakdown:[
      {k:"会", hv:"HỘI", on:"カイ", kun:"あ(う)", parts:"亼(mái che)+云(hơi tụ lại)", story:"Mọi người tụ lại dưới một mái nhà."},
      {k:"議", hv:"NGHỊ", on:"ギ", kun:"-", parts:"言(Ngôn: lời nói)+義(Nghĩa: lẽ phải)", story:"Dùng lời lẽ bàn cho ra lẽ phải."}
    ],
    note:"議 đứng sau trong từ ghép đọc đục thành ぎ. Nhớ cặp 会議[かいぎ] – 会計[かいけい] để khỏi lẫn."
  },
  all_details:[
    {option:"かいぎ", ok:true,  word:"会議", hanviet:"HỘI NGHỊ", meaning:"cuộc họp", parts:"会(Hội)+議(Nghị)", note:"Đáp án đúng."},
    {option:"かいき", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục: 議 trong từ ghép luôn đọc ぎ, không phải き."},
    {option:"がいぎ", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục ở chữ đầu: 会 đọc かい, không đục thành がい."},
    {option:"かいけい", ok:false, word:"会計", hanviet:"HỘI KẾ", meaning:"tính tiền, kế toán", parts:"会(Hội)+計(Kế: tính toán)", note:"Đây là từ có thật nhưng chữ thứ hai là 計 chứ không phải 議."}
  ]
},
{
  id:"n4-002", level:"N4", type:"reading",
  sentence:"ホテルの【予約】をしておきました。",
  underline:"予約", sentence_vi:"Tôi đã đặt trước khách sạn rồi.",
  options:["よやく","ようやく","よあく","やくそく"], answer:"よやく",
  correct_detail:{
    word:"予約", reading:"よやく", hanviet:"DỰ ƯỚC", meaning:"sự đặt chỗ, đặt trước",
    breakdown:[
      {k:"予", hv:"DỰ", on:"ヨ", kun:"あらかじ(め)", parts:"予(hình con thoi đưa trước)", story:"Đưa ra trước, tính trước một bước."},
      {k:"約", hv:"ƯỚC", on:"ヤク", kun:"やく", parts:"糸(Mịch: sợi tơ)+勺(Chước: cái muôi)", story:"Buộc sợi dây làm dấu, tức là giao hẹn."}
    ],
    note:"予 đọc ngắn よ, không có trường âm. ようやく là phó từ khác nghĩa hoàn toàn."
  },
  all_details:[
    {option:"よやく", ok:true,  word:"予約", hanviet:"DỰ ƯỚC", meaning:"đặt trước", parts:"予(Dự)+約(Ước)", note:"Đáp án đúng."},
    {option:"ようやく", ok:false, meaning:"cuối cùng thì, mãi rồi cũng", note:"Bẫy trường âm. ようやく là phó từ độc lập, không viết bằng 予約."},
    {option:"よあく", ok:false, meaning:"cách đọc sai", note:"約 đọc やく, không tách thành あく."},
    {option:"やくそく", ok:false, word:"約束", hanviet:"ƯỚC THÚC", meaning:"lời hứa, cuộc hẹn", parts:"約(Ước)+束(Thúc: bó lại)", note:"Cũng có chữ 約 nhưng là từ khác: 約束."}
  ]
},
{
  id:"n4-003", level:"N4", type:"reading",
  sentence:"旅行の【準備】はもう終わりましたか。",
  underline:"準備", sentence_vi:"Anh chuẩn bị xong cho chuyến du lịch chưa?",
  options:["じゅんび","じゅんぴ","しゅんび","じゅんべ"], answer:"じゅんび",
  correct_detail:{
    word:"準備", reading:"じゅんび", hanviet:"CHUẨN BỊ", meaning:"sự chuẩn bị",
    breakdown:[
      {k:"準", hv:"CHUẨN", on:"ジュン", kun:"-", parts:"氵(Thủy: nước)+隼(Chuẩn: chim cắt)", story:"Lấy mặt nước làm chuẩn để đo cho phẳng."},
      {k:"備", hv:"BỊ", on:"ビ", kun:"そな(える)", parts:"亻(Nhân đứng: người)+用(Dụng)+備", story:"Người sắp sẵn đồ dùng để phòng khi cần."}
    ],
    note:"Cả hai chữ đều đọc đục: じゅん + び. Đọc thành しゅんび hay じゅんぴ đều sai."
  },
  all_details:[
    {option:"じゅんび", ok:true,  word:"準備", hanviet:"CHUẨN BỊ", meaning:"sự chuẩn bị", parts:"準(Chuẩn)+備(Bị)", note:"Đáp án đúng."},
    {option:"じゅんぴ", ok:false, meaning:"cách đọc sai", note:"Bẫy bán đục: 備 đọc び, không thành ぴ."},
    {option:"しゅんび", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục ở chữ đầu: 準 là じゅん."},
    {option:"じゅんべ", ok:false, meaning:"cách đọc sai", note:"Âm On của 備 là ビ, không phải ベ."}
  ]
},
{
  id:"n4-004", level:"N4", type:"reading",
  sentence:"先生が使い方を【説明】してくださいました。",
  underline:"説明", sentence_vi:"Thầy đã giải thích giúp tôi cách dùng.",
  options:["せつめい","せつめ","せいめい","せづめい"], answer:"せつめい",
  correct_detail:{
    word:"説明", reading:"せつめい", hanviet:"THUYẾT MINH", meaning:"sự giải thích",
    breakdown:[
      {k:"説", hv:"THUYẾT", on:"セツ", kun:"と(く)", parts:"言(Ngôn: lời nói)+兌(Đoài: vui)", story:"Nói tới lúc người nghe hiểu ra và gật đầu."},
      {k:"明", hv:"MINH", on:"メイ", kun:"あか(るい)", parts:"日(Nhật: mặt trời)+月(Nguyệt: mặt trăng)", story:"Trời trăng cùng chiếu thì mọi thứ sáng rõ."}
    ],
    note:"明 ở đây có trường âm めい. Bỏ trường âm thành せつめ là lỗi rất hay gặp."
  },
  all_details:[
    {option:"せつめい", ok:true,  word:"説明", hanviet:"THUYẾT MINH", meaning:"sự giải thích", parts:"説(Thuyết)+明(Minh)", note:"Đáp án đúng."},
    {option:"せつめ", ok:false, meaning:"cách đọc sai", note:"Bẫy trường âm: 明 đọc メイ, phải kéo dài."},
    {option:"せいめい", ok:false, word:"生命", hanviet:"SINH MỆNH", meaning:"sinh mệnh (từ khác)", note:"Bẫy trường âm ngược: せつ bị đổi thành せい."},
    {option:"せづめい", ok:false, meaning:"cách đọc sai", note:"Không có âm づ ở đây; 説 là セツ."}
  ]
},
{
  id:"n4-005", level:"N4", type:"kanji_select",
  sentence:"母は私のことをいつも【しんぱい】しています。",
  underline:"しんぱい", sentence_vi:"Mẹ lúc nào cũng lo lắng cho tôi.",
  options:["心配","必配","忘配","心記"], answer:"心配",
  correct_detail:{
    word:"心配", reading:"しんぱい", hanviet:"TÂM PHỐI", meaning:"lo lắng, bận tâm",
    breakdown:[
      {k:"心", hv:"TÂM", on:"シン", kun:"こころ", parts:"心(hình quả tim có ba giọt máu)", story:"Quả tim đang đập, tượng trưng cho tấm lòng."},
      {k:"配", hv:"PHỐI", on:"ハイ→パイ", kun:"くば(る)", parts:"酉(Dậu: hũ rượu)+己(Kỷ: bản thân)", story:"Tự tay rót rượu chia đều cho mọi người."}
    ],
    note:"配 đứng sau ん nên biến thành ぱい (bán đục). Cùng quy luật với 心配・年配."
  },
  all_details:[
    {option:"心配", ok:true,  reading:"しんぱい", hanviet:"TÂM PHỐI", meaning:"lo lắng", parts:"心(Tâm: trái tim)+配(Phối: chia đặt)", note:"Đáp án đúng."},
    {option:"必配", ok:false, hanviet:"TẤT PHỐI", meaning:"không phải từ có thật", parts:"必(Tất: nhất định)+配(Phối)", note:"必 và 心 chỉ khác một nét xiên. 必 đọc ヒツ, dùng trong 必要."},
    {option:"忘配", ok:false, hanviet:"VONG PHỐI", meaning:"không phải từ có thật", parts:"忘(Vong: quên)+配(Phối)", note:"忘 cũng có bộ 心 ở dưới nhưng nghĩa là quên (忘れる)."},
    {option:"心記", ok:false, hanviet:"TÂM KÝ", meaning:"không phải từ có thật", parts:"心(Tâm)+記(Ký: ghi chép)", note:"記 dùng trong 日記・記者, không ghép với 心 thành từ này."}
  ]
},
{
  id:"n4-006", level:"N4", type:"kanji_select",
  sentence:"熱が高いので、【びょういん】へ行きます。",
  underline:"びょういん", sentence_vi:"Vì sốt cao nên tôi đi bệnh viện.",
  options:["病院","病員","疲院","病完"], answer:"病院",
  correct_detail:{
    word:"病院", reading:"びょういん", hanviet:"BỆNH VIỆN", meaning:"bệnh viện",
    breakdown:[
      {k:"病", hv:"BỆNH", on:"ビョウ", kun:"やまい", parts:"疒(Nạch: người nằm giường)+丙(Bính)", story:"Người nằm liệt trên giường bệnh."},
      {k:"院", hv:"VIỆN", on:"イン", kun:"-", parts:"阝(Phụ: gò đất)+完(Hoàn: trọn vẹn)", story:"Toà nhà khép kín có tường bao quanh."}
    ],
    note:"Phân biệt 病院[びょういん] – bệnh viện với 美容院[びよういん] – tiệm làm tóc: khác nhau ở trường âm びょ/びよ."
  },
  all_details:[
    {option:"病院", ok:true,  reading:"びょういん", hanviet:"BỆNH VIỆN", meaning:"bệnh viện", parts:"病(Bệnh)+院(Viện)", note:"Đáp án đúng."},
    {option:"病員", ok:false, hanviet:"BỆNH VIÊN", meaning:"không phải từ có thật", parts:"病(Bệnh)+員(Viên: thành viên)", note:"員 chỉ người (会社員・店員), không chỉ toà nhà."},
    {option:"疲院", ok:false, hanviet:"BÌ VIỆN", meaning:"không phải từ có thật", parts:"疲(Bì: mệt)+院(Viện)", note:"疲 cùng bộ 疒 với 病 nên rất dễ nhìn nhầm; 疲れる nghĩa là mệt."},
    {option:"病完", ok:false, hanviet:"BỆNH HOÀN", meaning:"không phải từ có thật", parts:"病(Bệnh)+完(Hoàn: trọn vẹn)", note:"完 chính là phần bên phải của 院 nhưng thiếu bộ 阝."}
  ]
},
{
  id:"n4-007", level:"N4", type:"reading",
  sentence:"重い【荷物】は宅配便で送ります。",
  underline:"荷物", sentence_vi:"Hành lý nặng thì tôi gửi bằng dịch vụ chuyển phát.",
  options:["にもつ","かもつ","にぶつ","にもの"], answer:"にもつ",
  correct_detail:{
    word:"荷物", reading:"にもつ", hanviet:"HÀ VẬT", meaning:"hành lý, kiện hàng",
    breakdown:[
      {k:"荷", hv:"HÀ", on:"カ", kun:"に", parts:"艹(Thảo: cỏ)+何(Hà: gì)", story:"Bó cỏ vác trên vai, thành ra gánh nặng mang theo."},
      {k:"物", hv:"VẬT", on:"ブツ・モツ", kun:"もの", parts:"牜(Ngưu: con bò)+勿(Vật)", story:"Con bò là tài sản, là vật đáng giá nhất trong nhà."}
    ],
    note:"荷 ở đây đọc Kun に, còn 物 đọc モツ. Đây là từ ghép trộn âm, phải nhớ nguyên khối."
  },
  all_details:[
    {option:"にもつ", ok:true,  word:"荷物", hanviet:"HÀ VẬT", meaning:"hành lý", parts:"荷(Hà: gánh)+物(Vật)", note:"Đáp án đúng."},
    {option:"かもつ", ok:false, word:"貨物", hanviet:"HOÁ VẬT", meaning:"hàng hoá vận chuyển", note:"貨物 là từ có thật nhưng viết bằng 貨, không phải 荷."},
    {option:"にぶつ", ok:false, meaning:"cách đọc sai", note:"物 có hai âm On là ブツ và モツ; trong 荷物 phải chọn モツ."},
    {option:"にもの", ok:false, word:"煮物", hanviet:"CHỬ VẬT", meaning:"món hầm (nấu kho)", note:"Bẫy âm Kun: もの là Kun của 物, nhưng 荷物 dùng âm On モツ."}
  ]
},
{
  id:"n4-008", level:"N4", type:"reading",
  sentence:"明日は【都合】が悪いので、来週にしませんか。",
  underline:"都合", sentence_vi:"Ngày mai tôi bận, hay là để tuần sau nhé?",
  options:["つごう","とごう","つこう","みやこあい"], answer:"つごう",
  correct_detail:{
    word:"都合", reading:"つごう", hanviet:"ĐÔ HỢP", meaning:"sự tiện, hoàn cảnh thu xếp được",
    breakdown:[
      {k:"都", hv:"ĐÔ", on:"ト・ツ", kun:"みやこ", parts:"者(Giả: người)+阝(Ấp: khu dân cư)", story:"Nơi đông người tụ về, thành ra kinh đô."},
      {k:"合", hv:"HỢP", on:"ゴウ", kun:"あ(う)", parts:"亼(nắp đậy)+一+口(Khẩu: miệng)", story:"Nắp úp khít miệng bình, tức là vừa khớp."}
    ],
    note:"都 ở đây đọc ツ chứ không phải ト như trong 都会[とかい]. 合 đục thành ごう."
  },
  all_details:[
    {option:"つごう", ok:true,  word:"都合", hanviet:"ĐÔ HỢP", meaning:"sự tiện, thu xếp", parts:"都(Đô)+合(Hợp)", note:"Đáp án đúng."},
    {option:"とごう", ok:false, meaning:"cách đọc sai", note:"Bẫy âm On: 都 có cả ト lẫn ツ, nhưng 都合 luôn là つ."},
    {option:"つこう", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục: 合 đứng sau đọc ごう."},
    {option:"みやこあい", ok:false, meaning:"cách đọc sai", note:"Ghép hai âm Kun lại; từ ghép Hán này phải đọc âm On."}
  ]
},
{
  id:"n4-009", level:"N4", type:"kanji_select",
  sentence:"友達と六時に駅で会う【やくそく】をしました。",
  underline:"やくそく", sentence_vi:"Tôi đã hẹn gặp bạn ở ga lúc 6 giờ.",
  options:["約束","約速","紙束","約東"], answer:"約束",
  correct_detail:{
    word:"約束", reading:"やくそく", hanviet:"ƯỚC THÚC", meaning:"lời hứa, cuộc hẹn",
    breakdown:[
      {k:"約", hv:"ƯỚC", on:"ヤク", kun:"-", parts:"糸(Mịch: sợi tơ)+勺(Chước: cái muôi)", story:"Thắt nút sợi dây làm dấu giao kèo."},
      {k:"束", hv:"THÚC", on:"ソク", kun:"たば", parts:"木(Mộc: cây)+口(vòng dây buộc)", story:"Bó củi được siết chặt lại thành một bó."}
    ],
    note:"束 khác 東 (Đông) đúng một nét ngang giữa — đây là bẫy quen thuộc của đề N4."
  },
  all_details:[
    {option:"約束", ok:true,  reading:"やくそく", hanviet:"ƯỚC THÚC", meaning:"lời hứa", parts:"約(Ước)+束(Thúc: bó lại)", note:"Đáp án đúng."},
    {option:"約速", ok:false, hanviet:"ƯỚC TỐC", meaning:"không phải từ có thật", parts:"約(Ước)+速(Tốc: nhanh)", note:"速 có bộ 辶, dùng trong 速い・高速."},
    {option:"紙束", ok:false, hanviet:"CHỈ THÚC", meaning:"xấp giấy (cách nói hiếm)", parts:"紙(Chỉ: giấy)+束(Thúc)", note:"紙 và 約 cùng bộ 糸 nên rất dễ nhìn lướt thành nhau."},
    {option:"約東", ok:false, hanviet:"ƯỚC ĐÔNG", meaning:"không phải từ có thật", parts:"約(Ước)+東(Đông: phía đông)", note:"束 và 東 khác nhau ở nét ngang; đây là bẫy chính của câu này."}
  ]
},
{
  id:"n4-010", level:"N4", type:"reading",
  sentence:"日本で働いた【経験】がありますか。",
  underline:"経験", sentence_vi:"Bạn đã từng có kinh nghiệm làm việc ở Nhật chưa?",
  options:["けいけん","きょうけん","けいげん","けんけい"], answer:"けいけん",
  correct_detail:{
    word:"経験", reading:"けいけん", hanviet:"KINH NGHIỆM", meaning:"kinh nghiệm, sự từng trải",
    breakdown:[
      {k:"経", hv:"KINH", on:"ケイ", kun:"へ(る)", parts:"糸(Mịch: sợi tơ)+巠(dòng chảy dọc)", story:"Sợi dọc xuyên suốt tấm vải, mạch chính chạy qua."},
      {k:"験", hv:"NGHIỆM", on:"ケン", kun:"-", parts:"馬(Mã: con ngựa)+僉(gom lại)", story:"Cho ngựa chạy thử để kiểm chứng sức."}
    ],
    note:"験 giữ nguyên けん, không đục thành げん. So với 試験[しけん] để nhớ chắc."
  },
  all_details:[
    {option:"けいけん", ok:true,  word:"経験", hanviet:"KINH NGHIỆM", meaning:"kinh nghiệm", parts:"経(Kinh)+験(Nghiệm)", note:"Đáp án đúng."},
    {option:"きょうけん", ok:false, meaning:"cách đọc sai", note:"経 là ケイ chứ không phải キョウ; đừng lẫn với 教[キョウ]."},
    {option:"けいげん", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục: 験 không đục trong từ này."},
    {option:"けんけい", ok:false, meaning:"cách đọc sai", note:"Đảo ngược thứ tự hai âm — bẫy dành cho người đọc lướt."}
  ]
},
{
  id:"n4-011", level:"N4", type:"reading",
  sentence:"この件について、あなたの【意見】を聞かせてください。",
  underline:"意見", sentence_vi:"Về việc này, xin cho tôi nghe ý kiến của bạn.",
  options:["いけん","いげん","いんけん","おいけん"], answer:"いけん",
  correct_detail:{
    word:"意見", reading:"いけん", hanviet:"Ý KIẾN", meaning:"ý kiến, quan điểm",
    breakdown:[
      {k:"意", hv:"Ý", on:"イ", kun:"-", parts:"音(Âm: âm thanh)+心(Tâm: trái tim)", story:"Âm thanh vọng lên từ trái tim, ấy là ý nghĩ."},
      {k:"見", hv:"KIẾN", on:"ケン", kun:"み(る)", parts:"目(Mục: mắt)+儿(Nhân đi: hai chân)", story:"Con mắt đặt trên đôi chân, vừa đi vừa nhìn."}
    ],
    note:"意 chỉ một âm い ngắn gọn; 見 giữ nguyên けん. Cùng cụm với 意味[いみ]・注意[ちゅうい]."
  },
  all_details:[
    {option:"いけん", ok:true,  word:"意見", hanviet:"Ý KIẾN", meaning:"ý kiến", parts:"意(Ý)+見(Kiến)", note:"Đáp án đúng."},
    {option:"いげん", ok:false, word:"威厳", hanviet:"UY NGHIÊM", meaning:"vẻ uy nghiêm (từ khác, chữ khác)", note:"Bẫy âm đục: 見 trong 意見 không đục."},
    {option:"いんけん", ok:false, meaning:"cách đọc sai", note:"Thêm âm ん không có thật; 意 chỉ là い."},
    {option:"おいけん", ok:false, meaning:"cách đọc sai", note:"意 đọc イ, không phải オイ."}
  ]
},
{
  id:"n4-012", level:"N4", type:"kanji_select",
  sentence:"今日の会議には部長も【しゅっせき】します。",
  underline:"しゅっせき", sentence_vi:"Cuộc họp hôm nay trưởng phòng cũng tham dự.",
  options:["出席","出度","士席","出庶"], answer:"出席",
  correct_detail:{
    word:"出席", reading:"しゅっせき", hanviet:"XUẤT TỊCH", meaning:"tham dự, có mặt",
    breakdown:[
      {k:"出", hv:"XUẤT", on:"シュツ→シュッ", kun:"で(る)", parts:"山(Sơn: núi)+山(Sơn: núi)", story:"Mầm cây vượt qua hai lớp núi mà trồi lên."},
      {k:"席", hv:"TỊCH", on:"セキ", kun:"-", parts:"广(Nghiễm: mái hiên)+巾(Cân: tấm vải)", story:"Tấm chiếu trải dưới mái hiên, thành chỗ ngồi."}
    ],
    note:"Bẫy xúc âm: シュツ + セキ nuốt thành しゅっせき. Trái nghĩa là 欠席[けっせき]."
  },
  all_details:[
    {option:"出席", ok:true,  reading:"しゅっせき", hanviet:"XUẤT TỊCH", meaning:"tham dự", parts:"出(Xuất)+席(Tịch: chỗ ngồi)", note:"Đáp án đúng."},
    {option:"出度", ok:false, hanviet:"XUẤT ĐỘ", meaning:"không phải từ có thật", parts:"出(Xuất)+度(Độ: lần, mức)", note:"度 có bộ 广 giống 席 nên dễ nhìn nhầm; 度 dùng trong 今度・一度."},
    {option:"士席", ok:false, hanviet:"SĨ TỊCH", meaning:"không phải từ có thật", parts:"士(Sĩ: kẻ sĩ)+席(Tịch)", note:"士 và 出 khác hẳn nhau nhưng dễ chọn nhầm khi đọc vội."},
    {option:"出庶", ok:false, hanviet:"XUẤT THỨ", meaning:"không phải từ có thật", parts:"出(Xuất)+庶(Thứ: dân thường)", note:"庶 cũng mang bộ 广, là bẫy hình dạng điển hình."}
  ]
},
{
  id:"n4-013", level:"N4", type:"reading",
  sentence:"毎日一時間ぐらいピアノの【練習】をしています。",
  underline:"練習", sentence_vi:"Mỗi ngày tôi luyện đàn piano khoảng một tiếng.",
  options:["れんしゅう","れんしゅ","れんじゅう","れいしゅう"], answer:"れんしゅう",
  correct_detail:{
    word:"練習", reading:"れんしゅう", hanviet:"LUYỆN TẬP", meaning:"sự luyện tập",
    breakdown:[
      {k:"練", hv:"LUYỆN", on:"レン", kun:"ね(る)", parts:"糸(Mịch: sợi tơ)+柬(chọn lọc)", story:"Nhuộm đi nhuộm lại sợi tơ cho tới khi đạt màu."},
      {k:"習", hv:"TẬP", on:"シュウ", kun:"なら(う)", parts:"羽(Vũ: đôi cánh)+白(Bạch: trắng)", story:"Chim non đập cánh tập bay dưới nắng."}
    ],
    note:"習 có trường âm しゅう. Mất trường âm thành しゅ là lỗi phổ biến nhất ở Mondai 1."
  },
  all_details:[
    {option:"れんしゅう", ok:true,  word:"練習", hanviet:"LUYỆN TẬP", meaning:"luyện tập", parts:"練(Luyện)+習(Tập)", note:"Đáp án đúng."},
    {option:"れんしゅ", ok:false, meaning:"cách đọc sai", note:"Bẫy trường âm: 習 là シュウ, bắt buộc kéo dài."},
    {option:"れんじゅう", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục: 習 không đục thành じゅう."},
    {option:"れいしゅう", ok:false, meaning:"cách đọc sai", note:"練 là レン có âm ん, không phải レイ."}
  ]
},
{
  id:"n4-014", level:"N4", type:"reading",
  sentence:"進路のことで先生に【相談】したいです。",
  underline:"相談", sentence_vi:"Tôi muốn xin ý kiến thầy về hướng đi sau này.",
  options:["そうだん","そうたん","しょうだん","そだん"], answer:"そうだん",
  correct_detail:{
    word:"相談", reading:"そうだん", hanviet:"TƯƠNG ĐÀM", meaning:"sự bàn bạc, xin ý kiến",
    breakdown:[
      {k:"相", hv:"TƯƠNG", on:"ソウ", kun:"あい", parts:"木(Mộc: cây)+目(Mục: mắt)", story:"Đứng sau gốc cây nhìn nhau, tức là đôi bên."},
      {k:"談", hv:"ĐÀM", on:"ダン", kun:"-", parts:"言(Ngôn: lời nói)+炎(Viêm: lửa)", story:"Ngồi quanh bếp lửa mà chuyện trò."}
    ],
    note:"談 đứng sau đọc đục だん. Cùng nhóm với 相手[あいて] để phân biệt âm On/Kun của 相."
  },
  all_details:[
    {option:"そうだん", ok:true,  word:"相談", hanviet:"TƯƠNG ĐÀM", meaning:"bàn bạc, xin ý kiến", parts:"相(Tương)+談(Đàm)", note:"Đáp án đúng."},
    {option:"そうたん", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục: 談 luôn là ダン."},
    {option:"しょうだん", ok:false, word:"商談", hanviet:"THƯƠNG ĐÀM", meaning:"đàm phán kinh doanh (từ khác)", note:"相[ソウ] bị nhầm thành 商[ショウ]."},
    {option:"そだん", ok:false, meaning:"cách đọc sai", note:"Bẫy trường âm: 相 là ソウ, phải kéo dài."}
  ]
},
{
  id:"n4-015", level:"N4", type:"kanji_select",
  sentence:"着いたら、すぐ私に【れんらく】してください。",
  underline:"れんらく", sentence_vi:"Đến nơi rồi thì hãy liên lạc ngay cho tôi.",
  options:["連絡","運絡","連格","車絡"], answer:"連絡",
  correct_detail:{
    word:"連絡", reading:"れんらく", hanviet:"LIÊN LẠC", meaning:"sự liên lạc, báo tin",
    breakdown:[
      {k:"連", hv:"LIÊN", on:"レン", kun:"つら(なる)", parts:"辶(Sước: bước đi)+車(Xa: xe)", story:"Đoàn xe nối đuôi nhau chạy thành hàng dài."},
      {k:"絡", hv:"LẠC", on:"ラク", kun:"から(む)", parts:"糸(Mịch: sợi tơ)+各(Các: mỗi)", story:"Sợi dây quấn nối từng mối lại với nhau."}
    ],
    note:"連 và 運 đều có bộ 辶; phần trong của 連 là 車, của 運 là 軍."
  },
  all_details:[
    {option:"連絡", ok:true,  reading:"れんらく", hanviet:"LIÊN LẠC", meaning:"liên lạc", parts:"連(Liên)+絡(Lạc)", note:"Đáp án đúng."},
    {option:"運絡", ok:false, hanviet:"VẬN LẠC", meaning:"không phải từ có thật", parts:"運(Vận: chuyên chở)+絡(Lạc)", note:"運 đọc ウン, dùng trong 運転・運動."},
    {option:"連格", ok:false, hanviet:"LIÊN CÁCH", meaning:"không phải từ có thật", parts:"連(Liên)+格(Cách: quy cách)", note:"格 bộ 木, 絡 bộ 糸 — chỉ khác bộ bên trái."},
    {option:"車絡", ok:false, hanviet:"XA LẠC", meaning:"không phải từ có thật", parts:"車(Xa: xe)+絡(Lạc)", note:"車 chính là phần ruột của 連, thiếu mất bộ 辶."}
  ]
},
{
  id:"n4-016", level:"N4", type:"reading",
  sentence:"結婚式に【招待】されました。",
  underline:"招待", sentence_vi:"Tôi được mời dự lễ cưới.",
  options:["しょうたい","しょうだい","しょたい","そうたい"], answer:"しょうたい",
  correct_detail:{
    word:"招待", reading:"しょうたい", hanviet:"CHIÊU ĐÃI", meaning:"sự mời, thư mời",
    breakdown:[
      {k:"招", hv:"CHIÊU", on:"ショウ", kun:"まね(く)", parts:"扌(Thủ: bàn tay)+召(Triệu: gọi)", story:"Vẫy tay gọi khách lại gần."},
      {k:"待", hv:"ĐÃI", on:"タイ", kun:"ま(つ)", parts:"彳(Xích: bước chân)+寺(Tự: chùa)", story:"Dừng bước trước cửa chùa mà chờ."}
    ],
    note:"待 giữ nguyên たい, không đục. So với 期待[きたい]・招待状[しょうたいじょう]."
  },
  all_details:[
    {option:"しょうたい", ok:true,  word:"招待", hanviet:"CHIÊU ĐÃI", meaning:"sự mời", parts:"招(Chiêu)+待(Đãi)", note:"Đáp án đúng."},
    {option:"しょうだい", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục: 待 không đục thành だい."},
    {option:"しょたい", ok:false, word:"所帯", hanviet:"SỞ ĐỚI", meaning:"hộ gia đình (từ khác)", note:"Bẫy trường âm: 招 là ショウ, phải kéo dài."},
    {option:"そうたい", ok:false, word:"早退", hanviet:"TẢO THOÁI", meaning:"về sớm (từ khác)", note:"招[ショウ] bị đọc nhầm thành ソウ."}
  ]
},
{
  id:"n4-017", level:"N4", type:"reading",
  sentence:"どうぞ【遠慮】しないで、たくさん食べてください。",
  underline:"遠慮", sentence_vi:"Xin đừng khách sáo, hãy ăn thật nhiều.",
  options:["えんりょ","えんりょう","おんりょ","えんろ"], answer:"えんりょ",
  correct_detail:{
    word:"遠慮", reading:"えんりょ", hanviet:"VIỄN LỰ", meaning:"sự khách sáo, giữ ý",
    breakdown:[
      {k:"遠", hv:"VIỄN", on:"エン", kun:"とお(い)", parts:"辶(Sước: bước đi)+袁(Viên)", story:"Đường phải đi rất lâu mới tới, tức là xa."},
      {k:"慮", hv:"LỰ", on:"リョ", kun:"-", parts:"虍(Hô: đầu con hổ)+思(Tư: suy nghĩ)", story:"Nghĩ ngợi cẩn thận như đứng trước con hổ."}
    ],
    note:"Bẫy kinh điển: 慮 là リョ ngắn, KHÔNG có trường âm. Đối chiếu 旅行[りょこう] cũng りょ ngắn."
  },
  all_details:[
    {option:"えんりょ", ok:true,  word:"遠慮", hanviet:"VIỄN LỰ", meaning:"khách sáo, giữ ý", parts:"遠(Viễn)+慮(Lự)", note:"Đáp án đúng."},
    {option:"えんりょう", ok:false, meaning:"cách đọc sai", note:"Bẫy trường âm thừa: 慮 là リョ, không kéo dài."},
    {option:"おんりょ", ok:false, meaning:"cách đọc sai", note:"遠 đọc エン; おん là âm của 音・恩."},
    {option:"えんろ", ok:false, meaning:"cách đọc sai", note:"Mất âm chêm ょ: 慮 là りょ chứ không phải ろ."}
  ]
},
{
  id:"n4-018", level:"N4", type:"kanji_select",
  sentence:"エレベーターが【こしょう】して、動きません。",
  underline:"こしょう", sentence_vi:"Thang máy bị hỏng nên không chạy.",
  options:["故障","古障","故章","枯障"], answer:"故障",
  correct_detail:{
    word:"故障", reading:"こしょう", hanviet:"CỐ CHƯỚNG", meaning:"sự hỏng hóc, trục trặc",
    breakdown:[
      {k:"故", hv:"CỐ", on:"コ", kun:"ゆえ", parts:"古(Cổ: cũ)+攵(Phốc: cầm roi)", story:"Đánh vào cái cũ kỹ, sinh ra sự cố."},
      {k:"障", hv:"CHƯỚNG", on:"ショウ", kun:"さわ(る)", parts:"阝(Phụ: gò đất)+章(Chương)", story:"Gò đất chắn ngang lối đi, thành vật cản."}
    ],
    note:"故 chính là 古 thêm bộ 攵. Thiếu bộ 攵 là chữ khác hẳn."
  },
  all_details:[
    {option:"故障", ok:true,  reading:"こしょう", hanviet:"CỐ CHƯỚNG", meaning:"hỏng hóc", parts:"故(Cố)+障(Chướng)", note:"Đáp án đúng."},
    {option:"古障", ok:false, hanviet:"CỔ CHƯỚNG", meaning:"không phải từ có thật", parts:"古(Cổ: cũ)+障(Chướng)", note:"古 đọc ふるい/コ, là ruột của 故 nhưng thiếu bộ 攵."},
    {option:"故章", ok:false, hanviet:"CỐ CHƯƠNG", meaning:"không phải từ có thật", parts:"故(Cố)+章(Chương: chương mục)", note:"章 là ruột của 障, thiếu bộ 阝 bên trái."},
    {option:"枯障", ok:false, hanviet:"KHÔ CHƯỚNG", meaning:"không phải từ có thật", parts:"枯(Khô: héo)+障(Chướng)", note:"枯 cũng chứa 古 nên rất dễ chọn nhầm."}
  ]
},
{
  id:"n4-019", level:"N4", type:"reading",
  sentence:"この道は【事故】が多いですから、気をつけてください。",
  underline:"事故", sentence_vi:"Đường này hay xảy ra tai nạn, hãy cẩn thận.",
  options:["じこ","じっこ","じこう","ことこ"], answer:"じこ",
  correct_detail:{
    word:"事故", reading:"じこ", hanviet:"SỰ CỐ", meaning:"tai nạn, sự cố",
    breakdown:[
      {k:"事", hv:"SỰ", on:"ジ", kun:"こと", parts:"一+口+彐+亅(tay cầm bút ghi việc)", story:"Tay cầm bút ghi lại công việc."},
      {k:"故", hv:"CỐ", on:"コ", kun:"ゆえ", parts:"古(Cổ: cũ)+攵(Phốc: cầm roi)", story:"Cái cũ bị va đập mà sinh chuyện."}
    ],
    note:"Cả hai âm đều ngắn: じ + こ. Thêm っ hay kéo dài こう đều sai."
  },
  all_details:[
    {option:"じこ", ok:true,  word:"事故", hanviet:"SỰ CỐ", meaning:"tai nạn", parts:"事(Sự)+故(Cố)", note:"Đáp án đúng."},
    {option:"じっこ", ok:false, meaning:"cách đọc sai", note:"Bẫy xúc âm: 事 là ジ, không sinh っ trước こ."},
    {option:"じこう", ok:false, word:"時候", hanviet:"THỜI HẬU", meaning:"thời tiết theo mùa (từ khác)", note:"Bẫy trường âm: 故 là コ ngắn."},
    {option:"ことこ", ok:false, meaning:"cách đọc sai", note:"こと là âm Kun của 事; từ ghép này dùng âm On ジ."}
  ]
},
{
  id:"n4-020", level:"N4", type:"reading",
  sentence:"東京は【交通】が便利です。",
  underline:"交通", sentence_vi:"Tokyo giao thông rất tiện lợi.",
  options:["こうつう","こうつ","ごうつう","こつう"], answer:"こうつう",
  correct_detail:{
    word:"交通", reading:"こうつう", hanviet:"GIAO THÔNG", meaning:"giao thông, đi lại",
    breakdown:[
      {k:"交", hv:"GIAO", on:"コウ", kun:"まじ(わる)", parts:"亠(mái)+父(hai chân bắt chéo)", story:"Hai chân bắt chéo nhau, tức là giao nhau."},
      {k:"通", hv:"THÔNG", on:"ツウ", kun:"とお(る)", parts:"辶(Sước: bước đi)+甬(Dũng: lối thông)", story:"Đường thông suốt cho người qua lại."}
    ],
    note:"Hai trường âm liên tiếp: こう + つう. Đây là dạng bẫy trường âm kép rất hay ra thi."
  },
  all_details:[
    {option:"こうつう", ok:true,  word:"交通", hanviet:"GIAO THÔNG", meaning:"giao thông", parts:"交(Giao)+通(Thông)", note:"Đáp án đúng."},
    {option:"こうつ", ok:false, meaning:"cách đọc sai", note:"Thiếu trường âm ở 通[ツウ]."},
    {option:"ごうつう", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục: 交 là コウ, không đục."},
    {option:"こつう", ok:false, meaning:"cách đọc sai", note:"Thiếu trường âm ở 交[コウ]."}
  ]
},
{
  id:"n4-021", level:"N4", type:"kanji_select",
  sentence:"お金をおろすので、【ぎんこう】に寄ります。",
  underline:"ぎんこう", sentence_vi:"Tôi ghé ngân hàng để rút tiền.",
  options:["銀行","銀航","根行","銅行"], answer:"銀行",
  correct_detail:{
    word:"銀行", reading:"ぎんこう", hanviet:"NGÂN HÀNH", meaning:"ngân hàng",
    breakdown:[
      {k:"銀", hv:"NGÂN", on:"ギン", kun:"しろがね", parts:"釒(Kim: kim loại)+艮(Cấn)", story:"Thứ kim loại trắng quý, ấy là bạc."},
      {k:"行", hv:"HÀNH", on:"コウ・ギョウ", kun:"い(く)", parts:"彳(bước trái)+亍(bước phải)", story:"Hai bàn chân thay nhau bước, chính là đi."}
    ],
    note:"行 trong 銀行 đọc コウ, khác với 行く[いく] và 銀行員[ぎんこういん]."
  },
  all_details:[
    {option:"銀行", ok:true,  reading:"ぎんこう", hanviet:"NGÂN HÀNH", meaning:"ngân hàng", parts:"銀(Ngân)+行(Hành)", note:"Đáp án đúng."},
    {option:"銀航", ok:false, hanviet:"NGÂN HÀNG", meaning:"không phải từ có thật", parts:"銀(Ngân)+航(Hàng: đi thuyền)", note:"航 dùng trong 航空・欠航, bộ 舟 chứ không phải 行."},
    {option:"根行", ok:false, hanviet:"CĂN HÀNH", meaning:"không phải từ có thật", parts:"根(Căn: rễ)+行(Hành)", note:"根 và 銀 cùng phần bên phải 艮, chỉ khác bộ 木 và 釒."},
    {option:"銅行", ok:false, hanviet:"ĐỒNG HÀNH", meaning:"không phải từ có thật", parts:"銅(Đồng: kim loại đồng)+行(Hành)", note:"銅 cũng bộ 釒 nên rất dễ nhìn nhầm với 銀."}
  ]
},
{
  id:"n4-022", level:"N4", type:"reading",
  sentence:"この手紙を【郵便】局から出してください。",
  underline:"郵便", sentence_vi:"Hãy gửi lá thư này từ bưu điện.",
  options:["ゆうびん","ゆうべん","ゆびん","ゆうひん"], answer:"ゆうびん",
  correct_detail:{
    word:"郵便", reading:"ゆうびん", hanviet:"BƯU TIỆN", meaning:"bưu chính, thư từ",
    breakdown:[
      {k:"郵", hv:"BƯU", on:"ユウ", kun:"-", parts:"垂(Thùy: rủ xuống)+阝(Ấp: khu dân cư)", story:"Trạm dừng ở rìa làng để chuyển thư."},
      {k:"便", hv:"TIỆN", on:"ビン・ベン", kun:"たよ(り)", parts:"亻(Nhân đứng: người)+更(Canh: thay đổi)", story:"Người đổi phiên nhau đưa tin cho tiện."}
    ],
    note:"便 có hai âm: ビン (郵便・便利? không) — nhớ 郵便[ゆうびん] đọc ビン, còn 便利[べんり] đọc ベン."
  },
  all_details:[
    {option:"ゆうびん", ok:true,  word:"郵便", hanviet:"BƯU TIỆN", meaning:"bưu chính", parts:"郵(Bưu)+便(Tiện)", note:"Đáp án đúng."},
    {option:"ゆうべん", ok:false, meaning:"cách đọc sai", note:"Bẫy hai âm On của 便: ở đây phải là ビン, không phải ベン."},
    {option:"ゆびん", ok:false, meaning:"cách đọc sai", note:"Thiếu trường âm: 郵 là ユウ."},
    {option:"ゆうひん", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục: phải là びん, không phải ひん."}
  ]
},
{
  id:"n4-023", level:"N4", type:"kanji_select",
  sentence:"日本の【せいかつ】にもう慣れましたか。",
  underline:"せいかつ", sentence_vi:"Bạn đã quen với cuộc sống ở Nhật chưa?",
  options:["生活","生話","性活","主活"], answer:"生活",
  correct_detail:{
    word:"生活", reading:"せいかつ", hanviet:"SINH HOẠT", meaning:"cuộc sống, sinh hoạt",
    breakdown:[
      {k:"生", hv:"SINH", on:"セイ", kun:"い(きる)・う(まれる)", parts:"𠂉+土(Thổ: đất)", story:"Mầm cây nhú lên khỏi mặt đất, sự sống bắt đầu."},
      {k:"活", hv:"HOẠT", on:"カツ", kun:"い(かす)", parts:"氵(Thủy: nước)+舌(Thiệt: cái lưỡi)", story:"Có nước cho lưỡi thấm thì mới sống được."}
    ],
    note:"活 và 話 chỉ khác bộ bên trái: 氵 (nước) và 言 (lời nói)."
  },
  all_details:[
    {option:"生活", ok:true,  reading:"せいかつ", hanviet:"SINH HOẠT", meaning:"cuộc sống", parts:"生(Sinh)+活(Hoạt)", note:"Đáp án đúng."},
    {option:"生話", ok:false, hanviet:"SINH THOẠI", meaning:"không phải từ có thật", parts:"生(Sinh)+話(Thoại: nói chuyện)", note:"話 bộ 言, đọc わ/はなす — bẫy hình dạng chính của câu này."},
    {option:"性活", ok:false, hanviet:"TÍNH HOẠT", meaning:"không phải từ có thật", parts:"性(Tính: bản tính)+活(Hoạt)", note:"性 chứa 生 bên phải, thêm bộ 忄."},
    {option:"主活", ok:false, hanviet:"CHỦ HOẠT", meaning:"không phải từ có thật", parts:"主(Chủ: chủ nhân)+活(Hoạt)", note:"主 và 生 có nét đầu khá giống khi viết tay."}
  ]
},
{
  id:"n4-024", level:"N4", type:"reading",
  sentence:"来月、国から【両親】が遊びに来ます。",
  underline:"両親", sentence_vi:"Tháng sau bố mẹ tôi từ quê sang chơi.",
  options:["りょうしん","りょうおや","りょしん","りゅうしん"], answer:"りょうしん",
  correct_detail:{
    word:"両親", reading:"りょうしん", hanviet:"LƯỠNG THÂN", meaning:"bố mẹ, song thân",
    breakdown:[
      {k:"両", hv:"LƯỠNG", on:"リョウ", kun:"-", parts:"一+冂+丨丨(hai vật cân nhau)", story:"Hai bên cân bằng trên một đòn gánh."},
      {k:"親", hv:"THÂN", on:"シン", kun:"おや・した(しい)", parts:"立(Lập: đứng)+木(Mộc: cây)+見(Kiến: nhìn)", story:"Đứng trên cây trông ngóng con về."}
    ],
    note:"両 có trường âm りょう; 親 dùng âm On しん chứ không phải Kun おや."
  },
  all_details:[
    {option:"りょうしん", ok:true,  word:"両親", hanviet:"LƯỠNG THÂN", meaning:"bố mẹ", parts:"両(Lưỡng)+親(Thân)", note:"Đáp án đúng."},
    {option:"りょうおや", ok:false, meaning:"cách đọc sai", note:"Trộn On với Kun: 親 ở đây đọc しん."},
    {option:"りょしん", ok:false, meaning:"cách đọc sai", note:"Bẫy trường âm: 両 là リョウ."},
    {option:"りゅうしん", ok:false, meaning:"cách đọc sai", note:"りゅう là âm của 流・竜, không phải của 両."}
  ]
},
{
  id:"n4-025", level:"N4", type:"kanji_select",
  sentence:"隣の奥さんはとても【しんせつ】な人です。",
  underline:"しんせつ", sentence_vi:"Cô hàng xóm là người rất tử tế.",
  options:["親切","新切","親功","観切"], answer:"親切",
  correct_detail:{
    word:"親切", reading:"しんせつ", hanviet:"THÂN THIẾT", meaning:"tử tế, ân cần",
    breakdown:[
      {k:"親", hv:"THÂN", on:"シン", kun:"おや", parts:"立(Lập)+木(Mộc)+見(Kiến: nhìn)", story:"Người thân là người luôn dõi theo mình."},
      {k:"切", hv:"THIẾT", on:"セツ", kun:"き(る)", parts:"七(Thất: bảy)+刀(Đao: con dao)", story:"Lưỡi dao cắt tới nơi tới chốn."}
    ],
    note:"親 và 新 đều có 立+木 bên trái; khác nhau ở 見 và 斤 bên phải."
  },
  all_details:[
    {option:"親切", ok:true,  reading:"しんせつ", hanviet:"THÂN THIẾT", meaning:"tử tế", parts:"親(Thân)+切(Thiết)", note:"Đáp án đúng."},
    {option:"新切", ok:false, hanviet:"TÂN THIẾT", meaning:"không phải từ có thật", parts:"新(Tân: mới)+切(Thiết)", note:"新 đọc シン giống 親 nên bẫy này đánh vào cả âm lẫn hình."},
    {option:"親功", ok:false, hanviet:"THÂN CÔNG", meaning:"không phải từ có thật", parts:"親(Thân)+功(Công: công lao)", note:"功 và 切 khác hẳn bộ: 力 và 刀."},
    {option:"観切", ok:false, hanviet:"QUAN THIẾT", meaning:"không phải từ có thật", parts:"観(Quan: xem xét)+切(Thiết)", note:"観 cũng có bộ 見 bên phải như 親."}
  ]
},
{
  id:"n4-026", level:"N4", type:"reading",
  sentence:"きのう【医者】に診てもらいました。",
  underline:"医者", sentence_vi:"Hôm qua tôi đã đi khám bác sĩ.",
  options:["いしゃ","いじゃ","いさ","いしゅ"], answer:"いしゃ",
  correct_detail:{
    word:"医者", reading:"いしゃ", hanviet:"Y GIẢ", meaning:"bác sĩ",
    breakdown:[
      {k:"医", hv:"Y", on:"イ", kun:"-", parts:"匚(Phương: cái hộp)+矢(Thỉ: mũi tên)", story:"Hộp đựng dụng cụ rút mũi tên khỏi vết thương."},
      {k:"者", hv:"GIẢ", on:"シャ", kun:"もの", parts:"耂(Lão: người già)+日(Nhật)", story:"Người ngồi kể chuyện dưới nắng, chỉ 'kẻ, người'."}
    ],
    note:"者 đọc しゃ trong 医者・学者・記者. Không đục thành じゃ."
  },
  all_details:[
    {option:"いしゃ", ok:true,  word:"医者", hanviet:"Y GIẢ", meaning:"bác sĩ", parts:"医(Y)+者(Giả)", note:"Đáp án đúng."},
    {option:"いじゃ", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục: 者 giữ nguyên しゃ."},
    {option:"いさ", ok:false, meaning:"cách đọc sai", note:"Mất âm chêm ゃ; 者 là シャ."},
    {option:"いしゅ", ok:false, meaning:"cách đọc sai", note:"しゅ là âm của 手・主, không phải của 者."}
  ]
},
{
  id:"n4-027", level:"N4", type:"kanji_select",
  sentence:"父は先週から【にゅういん】しています。",
  underline:"にゅういん", sentence_vi:"Bố tôi nhập viện từ tuần trước.",
  options:["入院","入員","人院","入完"], answer:"入院",
  correct_detail:{
    word:"入院", reading:"にゅういん", hanviet:"NHẬP VIỆN", meaning:"nhập viện, nằm viện",
    breakdown:[
      {k:"入", hv:"NHẬP", on:"ニュウ", kun:"はい(る)・い(れる)", parts:"入(mũi nhọn chúc vào trong)", story:"Mũi tên chĩa vào trong, ngược hẳn với 人."},
      {k:"院", hv:"VIỆN", on:"イン", kun:"-", parts:"阝(Phụ: gò đất)+完(Hoàn: trọn vẹn)", story:"Toà nhà có tường bao khép kín."}
    ],
    note:"入 và 人 chỉ khác chỗ nét nào đè lên nét nào — bẫy hình dạng số một của N4."
  },
  all_details:[
    {option:"入院", ok:true,  reading:"にゅういん", hanviet:"NHẬP VIỆN", meaning:"nhập viện", parts:"入(Nhập)+院(Viện)", note:"Đáp án đúng."},
    {option:"入員", ok:false, hanviet:"NHẬP VIÊN", meaning:"không phải từ có thật", parts:"入(Nhập)+員(Viên: thành viên)", note:"員 đọc イン giống 院 nên bẫy này đánh vào âm."},
    {option:"人院", ok:false, hanviet:"NHÂN VIỆN", meaning:"không phải từ có thật", parts:"人(Nhân: người)+院(Viện)", note:"人 đọc ひと/ジン, khác hẳn 入[にゅう]."},
    {option:"入完", ok:false, hanviet:"NHẬP HOÀN", meaning:"không phải từ có thật", parts:"入(Nhập)+完(Hoàn)", note:"完 là ruột của 院, thiếu bộ 阝 bên trái."}
  ]
},
{
  id:"n4-028", level:"N4", type:"reading",
  sentence:"彼は【熱心】に日本語を勉強しています。",
  underline:"熱心", sentence_vi:"Anh ấy học tiếng Nhật rất chăm chỉ.",
  options:["ねっしん","ねつしん","ねっじん","ねいしん"], answer:"ねっしん",
  correct_detail:{
    word:"熱心", reading:"ねっしん", hanviet:"NHIỆT TÂM", meaning:"nhiệt tình, hăng say",
    breakdown:[
      {k:"熱", hv:"NHIỆT", on:"ネツ→ネッ", kun:"あつ(い)", parts:"埶(gieo trồng)+灬(Hỏa: lửa)", story:"Bốn chấm lửa bên dưới hun nóng mọi thứ."},
      {k:"心", hv:"TÂM", on:"シン", kun:"こころ", parts:"心(hình quả tim)", story:"Quả tim đang đập, tượng trưng cho tấm lòng."}
    ],
    note:"Bẫy xúc âm: ネツ + シン nuốt lại thành ねっしん. Nhưng 熱[ねつ] đứng một mình vẫn đủ hai âm tiết."
  },
  all_details:[
    {option:"ねっしん", ok:true,  word:"熱心", hanviet:"NHIỆT TÂM", meaning:"nhiệt tình", parts:"熱(Nhiệt)+心(Tâm)", note:"Đáp án đúng."},
    {option:"ねつしん", ok:false, meaning:"cách đọc sai", note:"Bẫy xúc âm: つ trước し phải biến thành っ."},
    {option:"ねっじん", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục: 心 là シン, không đục thành じん."},
    {option:"ねいしん", ok:false, meaning:"cách đọc sai", note:"熱 là ネツ, không có âm ねい."}
  ]
},
{
  id:"n4-029", level:"N4", type:"kanji_select",
  sentence:"車の運転には十分【ちゅうい】してください。",
  underline:"ちゅうい", sentence_vi:"Khi lái xe hãy hết sức chú ý.",
  options:["注意","主意","注音","柱意"], answer:"注意",
  correct_detail:{
    word:"注意", reading:"ちゅうい", hanviet:"CHÚ Ý", meaning:"sự chú ý, lưu ý",
    breakdown:[
      {k:"注", hv:"CHÚ", on:"チュウ", kun:"そそ(ぐ)", parts:"氵(Thủy: nước)+主(Chủ: chủ nhân)", story:"Rót nước tập trung vào một điểm."},
      {k:"意", hv:"Ý", on:"イ", kun:"-", parts:"音(Âm: âm thanh)+心(Tâm: trái tim)", story:"Âm thanh vọng lên từ trái tim, ấy là ý nghĩ."}
    ],
    note:"注 = 氵 + 主. Bỏ mất bộ 氵 sẽ thành 主 (chủ), nghĩa khác hẳn."
  },
  all_details:[
    {option:"注意", ok:true,  reading:"ちゅうい", hanviet:"CHÚ Ý", meaning:"chú ý", parts:"注(Chú)+意(Ý)", note:"Đáp án đúng."},
    {option:"主意", ok:false, hanviet:"CHỦ Ý", meaning:"chủ ý (từ hiếm, khác nghĩa)", parts:"主(Chủ)+意(Ý)", note:"主 là ruột của 注 nhưng thiếu bộ 氵."},
    {option:"注音", ok:false, hanviet:"CHÚ ÂM", meaning:"không phải từ thông dụng trong tiếng Nhật", parts:"注(Chú)+音(Âm: âm thanh)", note:"音 chính là phần trên của 意, thiếu bộ 心."},
    {option:"柱意", ok:false, hanviet:"TRỤ Ý", meaning:"không phải từ có thật", parts:"柱(Trụ: cây cột)+意(Ý)", note:"柱 cũng chứa 主, chỉ khác bộ 木 thay cho 氵."}
  ]
},
{
  id:"n4-030", level:"N4", type:"reading",
  sentence:"この単語の【発音】が難しいです。",
  underline:"発音", sentence_vi:"Phát âm của từ này khó quá.",
  options:["はつおん","はっおん","ほつおん","はつね"], answer:"はつおん",
  correct_detail:{
    word:"発音", reading:"はつおん", hanviet:"PHÁT ÂM", meaning:"phát âm",
    breakdown:[
      {k:"発", hv:"PHÁT", on:"ハツ", kun:"-", parts:"癶(hai bàn chân)+二+儿", story:"Hai bàn chân bật lên, bắt đầu khởi hành."},
      {k:"音", hv:"ÂM", on:"オン", kun:"おと", parts:"立(Lập: đứng)+日(Nhật)", story:"Tiếng vang dựng lên trong không trung."}
    ],
    note:"発 chỉ biến thành はっ khi đứng trước hàng か・さ・た・ぱ (発表[はっぴょう]). Trước お thì giữ nguyên はつ."
  },
  all_details:[
    {option:"はつおん", ok:true,  word:"発音", hanviet:"PHÁT ÂM", meaning:"phát âm", parts:"発(Phát)+音(Âm)", note:"Đáp án đúng."},
    {option:"はっおん", ok:false, meaning:"cách đọc sai", note:"Bẫy xúc âm ngược: không có xúc âm trước nguyên âm お."},
    {option:"ほつおん", ok:false, meaning:"cách đọc sai", note:"発 đọc ハツ; ホツ không phải âm thường dùng."},
    {option:"はつね", ok:false, meaning:"cách đọc sai", note:"ね/おと là âm Kun của 音; từ ghép này dùng âm On オン."}
  ]
},
{
  id:"n4-031", level:"N4", type:"reading",
  sentence:"何か【質問】がある人は手を挙げてください。",
  underline:"質問", sentence_vi:"Ai có câu hỏi thì xin giơ tay.",
  options:["しつもん","しちもん","じつもん","しつぶん"], answer:"しつもん",
  correct_detail:{
    word:"質問", reading:"しつもん", hanviet:"CHẤT VẤN", meaning:"câu hỏi, sự chất vấn",
    breakdown:[
      {k:"質", hv:"CHẤT", on:"シツ", kun:"-", parts:"斦(hai cái rìu)+貝(Bối: vỏ sò, tiền)", story:"Cân đo giá trị món hàng bằng rìu và tiền."},
      {k:"問", hv:"VẤN", on:"モン", kun:"と(う)", parts:"門(Môn: cánh cửa)+口(Khẩu: miệng)", story:"Đứng trước cửa mở miệng hỏi chủ nhà."}
    ],
    note:"問 đọc モン trong 質問・問題. Đừng nhầm sang ぶん của 文."
  },
  all_details:[
    {option:"しつもん", ok:true,  word:"質問", hanviet:"CHẤT VẤN", meaning:"câu hỏi", parts:"質(Chất)+問(Vấn)", note:"Đáp án đúng."},
    {option:"しちもん", ok:false, meaning:"cách đọc sai", note:"しち là âm của 七; 質 đọc シツ."},
    {option:"じつもん", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục ở chữ đầu: 質 không đục."},
    {option:"しつぶん", ok:false, meaning:"cách đọc sai", note:"ぶん là âm của 文; 問 đọc モン."}
  ]
},
{
  id:"n4-032", level:"N4", type:"kanji_select",
  sentence:"メールを読んだら、すぐ【へんじ】をください。",
  underline:"へんじ", sentence_vi:"Đọc mail xong hãy hồi âm ngay cho tôi.",
  options:["返事","反事","返時","板事"], answer:"返事",
  correct_detail:{
    word:"返事", reading:"へんじ", hanviet:"PHẢN SỰ", meaning:"hồi âm, câu trả lời",
    breakdown:[
      {k:"返", hv:"PHẢN", on:"ヘン", kun:"かえ(す)", parts:"辶(Sước: bước đi)+反(Phản: ngược lại)", story:"Đi ngược đường cũ để mang trả lại."},
      {k:"事", hv:"SỰ", on:"ジ", kun:"こと", parts:"一+口+彐+亅(tay cầm bút ghi việc)", story:"Tay cầm bút ghi lại công việc."}
    ],
    note:"返事 đọc へんじ (không phải かえりごと). 事 ở đây dùng âm On ジ."
  },
  all_details:[
    {option:"返事", ok:true,  reading:"へんじ", hanviet:"PHẢN SỰ", meaning:"hồi âm", parts:"返(Phản)+事(Sự)", note:"Đáp án đúng."},
    {option:"反事", ok:false, hanviet:"PHẢN SỰ", meaning:"không phải từ có thật", parts:"反(Phản: ngược)+事(Sự)", note:"反 là ruột của 返, thiếu bộ 辶 chỉ sự di chuyển."},
    {option:"返時", ok:false, hanviet:"PHẢN THỜI", meaning:"không phải từ có thật", parts:"返(Phản)+時(Thời: thời gian)", note:"時 đọc ジ giống 事 nên bẫy này đánh vào âm."},
    {option:"板事", ok:false, hanviet:"BẢN SỰ", meaning:"không phải từ có thật", parts:"板(Bản: tấm ván)+事(Sự)", note:"板 cũng chứa 反 bên phải, dễ nhìn nhầm."}
  ]
},
{
  id:"n4-033", level:"N4", type:"reading",
  sentence:"駅へ行く【途中】で雨が降ってきました。",
  underline:"途中", sentence_vi:"Trên đường ra ga thì trời đổ mưa.",
  options:["とちゅう","どちゅう","とじゅう","ずちゅう"], answer:"とちゅう",
  correct_detail:{
    word:"途中", reading:"とちゅう", hanviet:"ĐỒ TRUNG", meaning:"giữa đường, đang dở",
    breakdown:[
      {k:"途", hv:"ĐỒ", on:"ト", kun:"-", parts:"辶(Sước: bước đi)+余(Dư: còn lại)", story:"Quãng đường hãy còn lại phía trước."},
      {k:"中", hv:"TRUNG", on:"チュウ", kun:"なか", parts:"口(khung)+丨(xuyên tâm)", story:"Mũi tên xuyên đúng vào giữa khung."}
    ],
    note:"中 đọc ちゅう có trường âm. So với 中[なか] khi đứng một mình."
  },
  all_details:[
    {option:"とちゅう", ok:true,  word:"途中", hanviet:"ĐỒ TRUNG", meaning:"giữa đường", parts:"途(Đồ)+中(Trung)", note:"Đáp án đúng."},
    {option:"どちゅう", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục ở chữ đầu: 途 là ト."},
    {option:"とじゅう", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục: 中 là チュウ, không đục thành じゅう."},
    {option:"ずちゅう", ok:false, meaning:"cách đọc sai", note:"ず là âm của 図・頭, không liên quan tới 途."}
  ]
},
{
  id:"n4-034", level:"N4", type:"kanji_select",
  sentence:"【さいきん】、少し太ってきました。",
  underline:"さいきん", sentence_vi:"Dạo này tôi hơi tăng cân.",
  options:["最近","最進","再近","最遠"], answer:"最近",
  correct_detail:{
    word:"最近", reading:"さいきん", hanviet:"TỐI CẬN", meaning:"gần đây, dạo này",
    breakdown:[
      {k:"最", hv:"TỐI", on:"サイ", kun:"もっと(も)", parts:"曰(Viết: nói)+取(Thủ: lấy)", story:"Chọn lấy cái đứng đầu trong tất cả."},
      {k:"近", hv:"CẬN", on:"キン", kun:"ちか(い)", parts:"辶(Sước: bước đi)+斤(Cân: cái rìu)", story:"Chỉ cần vài bước là tới, tức là gần."}
    ],
    note:"最 và 再 đều đọc サイ — phải phân biệt bằng mặt chữ chứ không bằng âm."
  },
  all_details:[
    {option:"最近", ok:true,  reading:"さいきん", hanviet:"TỐI CẬN", meaning:"gần đây", parts:"最(Tối)+近(Cận)", note:"Đáp án đúng."},
    {option:"最進", ok:false, hanviet:"TỐI TIẾN", meaning:"không phải từ có thật", parts:"最(Tối)+進(Tiến: tiến lên)", note:"進 cũng có bộ 辶 như 近, ruột là 隹 chứ không phải 斤."},
    {option:"再近", ok:false, hanviet:"TÁI CẬN", meaning:"không phải từ có thật", parts:"再(Tái: lại lần nữa)+近(Cận)", note:"再 đọc サイ y hệt 最, đây là bẫy đồng âm."},
    {option:"最遠", ok:false, hanviet:"TỐI VIỄN", meaning:"xa nhất (không dùng như trạng từ thời gian)", parts:"最(Tối)+遠(Viễn: xa)", note:"Nghĩa ngược hẳn: 遠 là xa, 近 mới là gần."}
  ]
},
{
  id:"n4-035", level:"N4", type:"reading",
  sentence:"【将来】、日本で働きたいと思っています。",
  underline:"将来", sentence_vi:"Tương lai tôi muốn làm việc ở Nhật.",
  options:["しょうらい","そうらい","しょらい","しょうき"], answer:"しょうらい",
  correct_detail:{
    word:"将来", reading:"しょうらい", hanviet:"TƯƠNG LAI", meaning:"tương lai",
    breakdown:[
      {k:"将", hv:"TƯƠNG", on:"ショウ", kun:"-", parts:"爿(mảnh gỗ)+寸(Thốn: bàn tay)", story:"Tay cầm quân kỳ chỉ huy, sắp sửa xuất trận."},
      {k:"来", hv:"LAI", on:"ライ", kun:"く(る)", parts:"木(Mộc: cây)+两(hai người)", story:"Cây lúa chín gọi người kéo đến gặt."}
    ],
    note:"将 có trường âm しょう. Phân biệt 将来[しょうらい] (tương lai) với 未来[みらい] (tương lai xa, trừu tượng)."
  },
  all_details:[
    {option:"しょうらい", ok:true,  word:"将来", hanviet:"TƯƠNG LAI", meaning:"tương lai", parts:"将(Tương)+来(Lai)", note:"Đáp án đúng."},
    {option:"そうらい", ok:false, meaning:"cách đọc sai", note:"将 là ショウ, không phải ソウ."},
    {option:"しょらい", ok:false, meaning:"cách đọc sai", note:"Bẫy trường âm: 将 phải kéo dài しょう."},
    {option:"しょうき", ok:false, meaning:"cách đọc sai", note:"来 đọc ライ; き là âm của 気・来ない thì khác hẳn."}
  ]
},
{
  id:"n4-036", level:"N4", type:"kanji_select",
  sentence:"申し込みには印鑑が【ひつよう】です。",
  underline:"ひつよう", sentence_vi:"Khi đăng ký thì cần có con dấu.",
  options:["必要","心要","必安","秘要"], answer:"必要",
  correct_detail:{
    word:"必要", reading:"ひつよう", hanviet:"TẤT YẾU", meaning:"cần thiết, sự cần thiết",
    breakdown:[
      {k:"必", hv:"TẤT", on:"ヒツ", kun:"かなら(ず)", parts:"心(Tâm: trái tim)+丿(mũi tên xuyên qua)", story:"Mũi tên xuyên qua tim, nhất định phải làm."},
      {k:"要", hv:"YẾU", on:"ヨウ", kun:"い(る)", parts:"覀(hai tay chống)+女(Nữ: phụ nữ)", story:"Người chống nạnh, chỗ eo là chỗ trọng yếu."}
    ],
    note:"必 và 心 chỉ khác một nét xiên — đây là cặp bẫy quen mặt trong mọi đề N4."
  },
  all_details:[
    {option:"必要", ok:true,  reading:"ひつよう", hanviet:"TẤT YẾU", meaning:"cần thiết", parts:"必(Tất)+要(Yếu)", note:"Đáp án đúng."},
    {option:"心要", ok:false, hanviet:"TÂM YẾU", meaning:"không phải từ có thật", parts:"心(Tâm: trái tim)+要(Yếu)", note:"心 đọc シン, dùng trong 心配・安心."},
    {option:"必安", ok:false, hanviet:"TẤT AN", meaning:"không phải từ có thật", parts:"必(Tất)+安(An: rẻ, yên)", note:"安 có bộ 宀 và 女, khác hẳn 要."},
    {option:"秘要", ok:false, hanviet:"BÍ YẾU", meaning:"không phải từ thông dụng", parts:"秘(Bí: bí mật)+要(Yếu)", note:"秘 đọc ヒ, gần âm với 必[ヒツ] nên dễ chọn nhầm."}
  ]
},
{
  id:"n4-037", level:"N4", type:"reading",
  sentence:"このアプリはとても【便利】ですね。",
  underline:"便利", sentence_vi:"Ứng dụng này tiện lợi thật đấy nhỉ.",
  options:["べんり","びんり","へんり","べんりん"], answer:"べんり",
  correct_detail:{
    word:"便利", reading:"べんり", hanviet:"TIỆN LỢI", meaning:"tiện lợi",
    breakdown:[
      {k:"便", hv:"TIỆN", on:"ベン・ビン", kun:"たよ(り)", parts:"亻(Nhân đứng: người)+更(Canh: thay đổi)", story:"Người đổi phiên đưa tin cho thuận tiện."},
      {k:"利", hv:"LỢI", on:"リ", kun:"き(く)", parts:"禾(Hoà: cây lúa)+刂(Đao: con dao)", story:"Dao sắc cắt lúa nhanh, thu về mối lợi."}
    ],
    note:"便 hai âm: 便利[べんり] dùng ベン, 郵便[ゆうびん] dùng ビン. Đây là cặp đối chiếu bắt buộc phải thuộc."
  },
  all_details:[
    {option:"べんり", ok:true,  word:"便利", hanviet:"TIỆN LỢI", meaning:"tiện lợi", parts:"便(Tiện)+利(Lợi)", note:"Đáp án đúng."},
    {option:"びんり", ok:false, meaning:"cách đọc sai", note:"Chọn nhầm âm ビン của 便 (âm dùng cho 郵便・都合の便)."},
    {option:"へんり", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục: phải là べん, không phải へん."},
    {option:"べんりん", ok:false, meaning:"cách đọc sai", note:"利 chỉ đọc リ, không có âm ん ở cuối."}
  ]
},
{
  id:"n4-038", level:"N4", type:"kanji_select",
  sentence:"ここは【きけん】ですから、入らないでください。",
  underline:"きけん", sentence_vi:"Chỗ này nguy hiểm nên đừng vào.",
  options:["危険","危検","厄険","危剣"], answer:"危険",
  correct_detail:{
    word:"危険", reading:"きけん", hanviet:"NGUY HIỂM", meaning:"nguy hiểm",
    breakdown:[
      {k:"危", hv:"NGUY", on:"キ", kun:"あぶ(ない)", parts:"厃(người đứng trên vách)+卩(Tiết: người quỳ)", story:"Người đứng chênh vênh trên vách đá."},
      {k:"険", hv:"HIỂM", on:"ケン", kun:"けわ(しい)", parts:"阝(Phụ: gò đất)+僉(gom lại)", story:"Vách núi dựng đứng, đường đi hiểm trở."}
    ],
    note:"険・検・験 cùng phần bên phải 僉, chỉ khác bộ: 阝 (gò đất), 木 (cây), 馬 (ngựa)."
  },
  all_details:[
    {option:"危険", ok:true,  reading:"きけん", hanviet:"NGUY HIỂM", meaning:"nguy hiểm", parts:"危(Nguy)+険(Hiểm)", note:"Đáp án đúng."},
    {option:"危検", ok:false, hanviet:"NGUY KIỂM", meaning:"không phải từ có thật", parts:"危(Nguy)+検(Kiểm: kiểm tra)", note:"検 bộ 木, dùng trong 検査. Cùng đọc ケン nên đây là bẫy đồng âm."},
    {option:"厄険", ok:false, hanviet:"ÁCH HIỂM", meaning:"không phải từ có thật", parts:"厄(Ách: tai ương)+険(Hiểm)", note:"厄 rất giống 危 khi viết nhanh, chỉ thiếu phần trên."},
    {option:"危剣", ok:false, hanviet:"NGUY KIẾM", meaning:"không phải từ có thật", parts:"危(Nguy)+剣(Kiếm: thanh kiếm)", note:"剣 cũng đọc ケン, bộ 刂 — thêm một bẫy đồng âm."}
  ]
},
{
  id:"n4-039", level:"N4", type:"reading",
  sentence:"工事現場では【安全】が第一です。",
  underline:"安全", sentence_vi:"Ở công trường thì an toàn là trên hết.",
  options:["あんぜん","あんせん","やすぜん","あんじょう"], answer:"あんぜん",
  correct_detail:{
    word:"安全", reading:"あんぜん", hanviet:"AN TOÀN", meaning:"an toàn",
    breakdown:[
      {k:"安", hv:"AN", on:"アン", kun:"やす(い)", parts:"宀(Miên: mái nhà)+女(Nữ: phụ nữ)", story:"Người phụ nữ yên ổn trong nhà, ấy là bình an."},
      {k:"全", hv:"TOÀN", on:"ゼン", kun:"まった(く)", parts:"亼(mái che)+王(Vương: viên ngọc)", story:"Viên ngọc được che kín, còn nguyên vẹn."}
    ],
    note:"全 đọc đục ぜん trong 安全・全部. Đừng nhầm với 前[ぜん] của 午前."
  },
  all_details:[
    {option:"あんぜん", ok:true,  word:"安全", hanviet:"AN TOÀN", meaning:"an toàn", parts:"安(An)+全(Toàn)", note:"Đáp án đúng."},
    {option:"あんせん", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục: 全 luôn đọc ゼン."},
    {option:"やすぜん", ok:false, meaning:"cách đọc sai", note:"やす là âm Kun của 安 (安い); từ ghép này dùng âm On アン."},
    {option:"あんじょう", ok:false, meaning:"cách đọc sai", note:"じょう là âm của 上・場, không phải của 全."}
  ]
},
{
  id:"n4-040", level:"N4", type:"kanji_select",
  sentence:"この店のラーメンは【ゆうめい】です。",
  underline:"ゆうめい", sentence_vi:"Mì ramen của quán này rất nổi tiếng.",
  options:["有名","友名","右名","有各"], answer:"有名",
  correct_detail:{
    word:"有名", reading:"ゆうめい", hanviet:"HỮU DANH", meaning:"nổi tiếng",
    breakdown:[
      {k:"有", hv:"HỮU", on:"ユウ", kun:"あ(る)", parts:"𠂇(bàn tay)+月(Nguyệt: miếng thịt)", story:"Tay cầm miếng thịt, tức là đang có trong tay."},
      {k:"名", hv:"DANH", on:"メイ", kun:"な", parts:"夕(Tịch: chiều tối)+口(Khẩu: miệng)", story:"Trời tối không thấy mặt nên phải xưng tên."}
    ],
    note:"有 và 友 rất giống nhau: 有 có 月 bên dưới, 友 có 又. Cả hai đều đọc ユウ."
  },
  all_details:[
    {option:"有名", ok:true,  reading:"ゆうめい", hanviet:"HỮU DANH", meaning:"nổi tiếng", parts:"有(Hữu)+名(Danh)", note:"Đáp án đúng."},
    {option:"友名", ok:false, hanviet:"HỮU DANH", meaning:"không phải từ có thật", parts:"友(Hữu: bạn bè)+名(Danh)", note:"友 đọc ユウ y hệt 有 — bẫy đồng âm kèm bẫy hình dạng."},
    {option:"右名", ok:false, hanviet:"HỮU DANH", meaning:"không phải từ có thật", parts:"右(Hữu: bên phải)+名(Danh)", note:"右 cũng có phần trên giống 有, đọc ウ/みぎ."},
    {option:"有各", ok:false, hanviet:"HỮU CÁC", meaning:"không phải từ có thật", parts:"有(Hữu)+各(Các: mỗi)", note:"各 và 名 đều có 口 ở dưới, phần trên khác nhau."}
  ]
},
{
  id:"n4-041", level:"N4", type:"reading",
  sentence:"週末は【自由】に使える時間が多いです。",
  underline:"自由", sentence_vi:"Cuối tuần tôi có nhiều thời gian rảnh dùng tuỳ ý.",
  options:["じゆう","じゅう","じゆ","しゆう"], answer:"じゆう",
  correct_detail:{
    word:"自由", reading:"じゆう", hanviet:"TỰ DO", meaning:"tự do",
    breakdown:[
      {k:"自", hv:"TỰ", on:"ジ・シ", kun:"みずか(ら)", parts:"自(hình cái mũi, ý chỉ bản thân)", story:"Người Nhật chỉ vào mũi mình khi nói 'tôi'."},
      {k:"由", hv:"DO", on:"ユウ・ユ", kun:"よし", parts:"田(Điền: ruộng)+丨(mầm vươn lên)", story:"Mầm cây tự vươn lên theo lối riêng của nó."}
    ],
    note:"Bẫy kinh điển: じ + ゆう là BA âm tiết, khác hẳn じゅう (十・重). Phát âm sai là hiểu sai nghĩa."
  },
  all_details:[
    {option:"じゆう", ok:true,  word:"自由", hanviet:"TỰ DO", meaning:"tự do", parts:"自(Tự)+由(Do)", note:"Đáp án đúng."},
    {option:"じゅう", ok:false, word:"十・重", hanviet:"THẬP / TRỌNG", meaning:"mười / nặng", note:"Bẫy âm chêm: gộp じ và ゆ thành じゅ là thành từ khác hẳn."},
    {option:"じゆ", ok:false, meaning:"cách đọc sai", note:"Thiếu trường âm: 由 ở đây là ユウ."},
    {option:"しゆう", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục: 自 đọc ジ, không phải シ."}
  ]
},
{
  id:"n4-042", level:"N4", type:"kanji_select",
  sentence:"この問題は思ったより【かんたん】でした。",
  underline:"かんたん", sentence_vi:"Bài này đơn giản hơn tôi tưởng.",
  options:["簡単","間単","簡短","竹単"], answer:"簡単",
  correct_detail:{
    word:"簡単", reading:"かんたん", hanviet:"GIẢN ĐƠN", meaning:"đơn giản, dễ dàng",
    breakdown:[
      {k:"簡", hv:"GIẢN", on:"カン", kun:"-", parts:"竹(Trúc: tre)+間(Gian: khoảng cách)", story:"Thẻ tre ghi vắn tắt vài chữ cho gọn."},
      {k:"単", hv:"ĐƠN", on:"タン", kun:"ひと(え)", parts:"⺍+田+十(cây chạc đơn)", story:"Chỉ một cây chạc trơ trọi, không đôi không cặp."}
    ],
    note:"簡 = 竹 + 間. Thiếu bộ 竹 ở trên là thành 間 (khoảng, giữa), nghĩa khác hẳn."
  },
  all_details:[
    {option:"簡単", ok:true,  reading:"かんたん", hanviet:"GIẢN ĐƠN", meaning:"đơn giản", parts:"簡(Giản)+単(Đơn)", note:"Đáp án đúng."},
    {option:"間単", ok:false, hanviet:"GIAN ĐƠN", meaning:"không phải từ có thật", parts:"間(Gian: khoảng giữa)+単(Đơn)", note:"間 là ruột của 簡, thiếu bộ 竹. Cũng đọc カン nên rất dễ chọn nhầm."},
    {option:"簡短", ok:false, hanviet:"GIẢN ĐOẢN", meaning:"không phải từ có thật", parts:"簡(Giản)+短(Đoản: ngắn)", note:"短 đọc タン giống 単 — bẫy đồng âm."},
    {option:"竹単", ok:false, hanviet:"TRÚC ĐƠN", meaning:"không phải từ có thật", parts:"竹(Trúc: cây tre)+単(Đơn)", note:"竹 chính là bộ thủ trên đầu của 簡, tách ra thì thành chữ khác."}
  ]
},
{
  id:"n4-043", level:"N4", type:"reading",
  sentence:"手続きが【複雑】で、よく分かりません。",
  underline:"複雑", sentence_vi:"Thủ tục phức tạp quá, tôi không hiểu rõ lắm.",
  options:["ふくざつ","ふくさつ","ぶくざつ","ふくぞう"], answer:"ふくざつ",
  correct_detail:{
    word:"複雑", reading:"ふくざつ", hanviet:"PHỨC TẠP", meaning:"phức tạp, rắc rối",
    breakdown:[
      {k:"複", hv:"PHỨC", on:"フク", kun:"-", parts:"衤(Y: áo quần)+复(lặp lại)", story:"Áo mặc chồng nhiều lớp lên nhau."},
      {k:"雑", hv:"TẠP", on:"ザツ", kun:"-", parts:"九+木(Mộc: cây)+隹(Chuy: chim)", story:"Đủ loại chim đậu lộn xộn trên cây."}
    ],
    note:"雑 đọc đục ざつ. Trái nghĩa là 簡単[かんたん] — nên học thành cặp."
  },
  all_details:[
    {option:"ふくざつ", ok:true,  word:"複雑", hanviet:"PHỨC TẠP", meaning:"phức tạp", parts:"複(Phức)+雑(Tạp)", note:"Đáp án đúng."},
    {option:"ふくさつ", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục: 雑 là ザツ."},
    {option:"ぶくざつ", ok:false, meaning:"cách đọc sai", note:"Bẫy âm đục ở chữ đầu: 複 là フク."},
    {option:"ふくぞう", ok:false, meaning:"cách đọc sai", note:"ぞう là âm của 増・象, không phải của 雑."}
  ]
},
{
  id:"n4-044", level:"N4", type:"kanji_select",
  sentence:"店員さんの言葉づかいがとても【ていねい】でした。",
  underline:"ていねい", sentence_vi:"Cách nói của nhân viên cửa hàng rất lịch sự.",
  options:["丁寧","町寧","丁室","千寧"], answer:"丁寧",
  correct_detail:{
    word:"丁寧", reading:"ていねい", hanviet:"ĐINH NINH", meaning:"lịch sự, cẩn thận chu đáo",
    breakdown:[
      {k:"丁", hv:"ĐINH", on:"テイ・チョウ", kun:"-", parts:"丁(hình cái đinh có mũ)", story:"Cây đinh đóng ngay ngắn, không xiêu vẹo."},
      {k:"寧", hv:"NINH", on:"ネイ", kun:"-", parts:"宀(Miên: mái nhà)+心(Tâm)+皿(Mãnh: cái đĩa)+丁", story:"Trong nhà mọi thứ xếp yên ổn, lòng cũng yên."}
    ],
    note:"Cả hai chữ đều có trường âm: てい + ねい. Rơi mất một trường âm là sai."
  },
  all_details:[
    {option:"丁寧", ok:true,  reading:"ていねい", hanviet:"ĐINH NINH", meaning:"lịch sự, chu đáo", parts:"丁(Đinh)+寧(Ninh)", note:"Đáp án đúng."},
    {option:"町寧", ok:false, hanviet:"ĐINH NINH", meaning:"không phải từ có thật", parts:"町(Đinh: khu phố)+寧(Ninh)", note:"町 chứa 丁 bên phải, đọc まち — bẫy hình dạng."},
    {option:"丁室", ok:false, hanviet:"ĐINH THẤT", meaning:"không phải từ có thật", parts:"丁(Đinh)+室(Thất: căn phòng)", note:"室 cũng có bộ 宀 trên đầu như 寧."},
    {option:"千寧", ok:false, hanviet:"THIÊN NINH", meaning:"không phải từ có thật", parts:"千(Thiên: nghìn)+寧(Ninh)", note:"千 và 丁 chỉ khác một nét phẩy trên đầu."}
  ]
},
{
  id:"n4-045", level:"N4", type:"reading",
  sentence:"パスポートは【大切】に保管してください。",
  underline:"大切", sentence_vi:"Hãy giữ gìn hộ chiếu cẩn thận.",
  options:["たいせつ","だいせつ","たいせち","おおきり"], answer:"たいせつ",
  correct_detail:{
    word:"大切", reading:"たいせつ", hanviet:"ĐẠI THIẾT", meaning:"quan trọng, quý giá",
    breakdown:[
      {k:"大", hv:"ĐẠI", on:"ダイ・タイ", kun:"おお(きい)", parts:"一+人(Nhân: người dang tay)", story:"Người dang rộng hai tay hết cỡ, thật to lớn."},
      {k:"切", hv:"THIẾT", on:"セツ", kun:"き(る)", parts:"七(Thất: bảy)+刀(Đao: con dao)", story:"Lưỡi dao cắt tới nơi tới chốn."}
    ],
    note:"大 có hai âm On: 大学[だいがく] dùng ダイ, còn 大切[たいせつ]・大使[たいし] dùng タイ."
  },
  all_details:[
    {option:"たいせつ", ok:true,  word:"大切", hanviet:"ĐẠI THIẾT", meaning:"quan trọng", parts:"大(Đại)+切(Thiết)", note:"Đáp án đúng."},
    {option:"だいせつ", ok:false, meaning:"cách đọc sai", note:"Bẫy hai âm On của 大: ở đây phải chọn タイ."},
    {option:"たいせち", ok:false, meaning:"cách đọc sai", note:"切 là セツ; せち chỉ xuất hiện trong từ cổ お節[おせち]."},
    {option:"おおきり", ok:false, meaning:"cách đọc sai", note:"Ghép hai âm Kun おお + きり; từ ghép Hán này phải đọc âm On."}
  ]
}

);
