/*
Unlocks by photonmang 公众号：墨鱼手记
^https:\/\/(snailsleep\.net\/|(music|community)\.snailsleep\.net\/)(snail\/v1\/profile\/get|snail-music\/music\/(sleeping|meditation)\/single\/list) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/wnsm.js
*/
re('"expires":\\d+@"expired":\\w+@"vip":\\w+@"vipNeedPay":\\w+@"needPay":\\w+','"expires":4079147492000@"expired":false@"vip":true@"vipNeedPay":false@"needPay":false')

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
} 
