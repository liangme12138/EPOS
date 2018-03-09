/*
Navicat MySQL Data Transfer

Source Server         : Epos
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : epos

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-03-08 21:00:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `userId` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `userName` varchar(255) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `identify` varchar(255) DEFAULT NULL COMMENT '身份',
  `addTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'mm', '123', '管理员', '2018-03-06 16:47:19');
INSERT INTO `admin` VALUES ('2', 'mm', '111', '员工', '2018-03-06 16:47:19');

-- ----------------------------
-- Table structure for businessstatus
-- ----------------------------
DROP TABLE IF EXISTS `businessstatus`;
CREATE TABLE `businessstatus` (
  `typeId` varchar(255) NOT NULL COMMENT '营业类型Id',
  `type` varchar(255) DEFAULT NULL COMMENT '营销概况类型',
  `businessStatus` varchar(255) DEFAULT NULL COMMENT '概况',
  `cashPayment` varchar(255) DEFAULT NULL COMMENT '现金支付',
  `UnionPay` varchar(255) DEFAULT NULL COMMENT '银联支付',
  `petCardPay` varchar(255) DEFAULT NULL COMMENT '储值卡支付',
  `TimeCardToPay` varchar(255) DEFAULT NULL COMMENT '次卡支付',
  `GiftCardPayment` varchar(255) DEFAULT NULL COMMENT '购物卡支付',
  `PrepaidCardPayment.` varchar(255) DEFAULT NULL COMMENT '预付卡支付'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of businessstatus
-- ----------------------------
INSERT INTO `businessstatus` VALUES ('bis001', '商品销售', '', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00');
INSERT INTO `businessstatus` VALUES ('bis002', '储值卡充值', null, '0.00', '0.00', '-', '', '', '');
INSERT INTO `businessstatus` VALUES ('bis003', '次卡销售', null, '0.00', '0.00', null, null, '', '');
INSERT INTO `businessstatus` VALUES ('bis004', '购物卡充值', '', '0.00', '0.00', '0.00', '0.00', '0.00', '0.00');
INSERT INTO `businessstatus` VALUES ('bis005', '预付卡销售', null, null, null, null, null, '', '');
INSERT INTO `businessstatus` VALUES ('bis006', '现金收支', null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `carId` int(255) NOT NULL AUTO_INCREMENT,
  `foodId` varchar(255) DEFAULT NULL,
  `userphone` varchar(255) DEFAULT NULL,
  `count` int(10) DEFAULT '1',
  PRIMARY KEY (`carId`)
) ENGINE=MyISAM AUTO_INCREMENT=188 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------

-- ----------------------------
-- Table structure for cashier
-- ----------------------------
DROP TABLE IF EXISTS `cashier`;
CREATE TABLE `cashier` (
  `cashierId` varchar(255) DEFAULT NULL COMMENT '收银员id',
  `cashierName` varchar(255) DEFAULT NULL COMMENT '姓名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `account` varchar(255) DEFAULT NULL COMMENT '登录账号',
  `phone` varchar(255) DEFAULT NULL COMMENT '电话',
  `status` varchar(255) DEFAULT NULL COMMENT '状态'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cashier
-- ----------------------------

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `CategoryId` varchar(20) NOT NULL COMMENT '分类id',
  `CategoryName` varchar(255) DEFAULT NULL COMMENT '分类名',
  PRIMARY KEY (`CategoryId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('001', '特色菜');
INSERT INTO `category` VALUES ('002', '主食');
INSERT INTO `category` VALUES ('003', '营养汤');
INSERT INTO `category` VALUES ('004', '特色烧味');
INSERT INTO `category` VALUES ('005', '南北小炒');
INSERT INTO `category` VALUES ('006', '商务套餐快餐');
INSERT INTO `category` VALUES ('007', '营养汤');

-- ----------------------------
-- Table structure for foods
-- ----------------------------
DROP TABLE IF EXISTS `foods`;
CREATE TABLE `foods` (
  `foodId` int(255) NOT NULL AUTO_INCREMENT COMMENT '菜品',
  `foodName` varchar(255) DEFAULT NULL COMMENT '菜名',
  `Category` varchar(255) DEFAULT NULL,
  `sale` int(10) DEFAULT NULL COMMENT '月售',
  `price` float(10,2) DEFAULT NULL,
  `Like` int(10) DEFAULT NULL COMMENT '点赞',
  `eg1` varchar(255) DEFAULT NULL COMMENT '新品',
  `eg2` varchar(255) DEFAULT NULL COMMENT '限时8折',
  `eg3` varchar(255) DEFAULT NULL COMMENT '会员价',
  `foodImg` varchar(255) DEFAULT NULL COMMENT '食物图',
  `addTime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`foodId`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of foods
-- ----------------------------
INSERT INTO `foods` VALUES ('1', '风暴土豆牛腩', '002', '3920', '39.00', '359', '新品', '限时8折', '会员价', '', '2018-03-05 20:36:39');
INSERT INTO `foods` VALUES ('2', '手撕包菜', '002', '200', '39.00', '359', '新品', '限时8折', '会员价', null, '2018-03-05 20:36:39');
INSERT INTO `foods` VALUES ('3', '尖椒回锅肉', '002', '569', '39.00', '359', '', '限时8折', '会员价', null, '2018-03-05 20:36:39');
INSERT INTO `foods` VALUES ('4', '五花肉炒香干', '002', '569', '39.00', '359', null, '限时8折', '会员价', null, '2018-03-05 20:36:39');
INSERT INTO `foods` VALUES ('5', '特色手撕鸡', '001', '666', '45.00', '503', '新品', '限时8折', '会员价', null, '2018-03-05 20:36:39');
INSERT INTO `foods` VALUES ('6', '番茄鸡蛋汤', '003', '222', '18.00', '109', null, null, null, null, '2018-03-05 20:36:39');
INSERT INTO `foods` VALUES ('7', '乌鸡汤', '003', '300', '20.00', '230', null, '限时8折', '会员', null, '2018-03-05 20:36:39');
INSERT INTO `foods` VALUES ('31', 'asd', '001', '1231', '123.00', '123', null, null, null, null, '2018-03-08 20:07:51');
INSERT INTO `foods` VALUES ('10', '婷霜炒饭', '002', '321323', '1.00', '212', '', '', '', '', '2018-03-06 12:09:48');
INSERT INTO `foods` VALUES ('11', '海南鸡饭', '001', '232', '12.00', '23', '', '', '', '', '2018-03-06 12:10:25');
INSERT INTO `foods` VALUES ('20', 'rw', '002', '23213', '11.00', '2323', null, null, null, null, '2018-03-07 11:56:22');
INSERT INTO `foods` VALUES ('21', '123', '001', '123', '123.00', '123', null, null, null, null, '2018-03-07 17:04:55');
INSERT INTO `foods` VALUES ('22', '123', '001', '123', '123.00', '123', null, null, null, null, '2018-03-07 17:05:07');
INSERT INTO `foods` VALUES ('23', '123', '001', '123', '123.00', '123', null, null, null, null, '2018-03-07 17:06:42');
INSERT INTO `foods` VALUES ('24', '111', '001', '111', '111.00', '111', '', '', '', '', '2018-03-07 17:08:10');
INSERT INTO `foods` VALUES ('27', '1112', '001', '111', '111.00', '111', '', '', '', '', '2018-03-07 17:34:12');
INSERT INTO `foods` VALUES ('28', '1234', '001', '123', '123.00', '123', '', '', '', '', '2018-03-07 17:35:12');
INSERT INTO `foods` VALUES ('29', '12345', '001', '123', '123.00', '123', '', '', '', '', '2018-03-07 17:36:02');
INSERT INTO `foods` VALUES ('30', '000', '001', '123', '123.00', '123', '', '', '', '', '2018-03-07 17:38:01');

-- ----------------------------
-- Table structure for menusitem
-- ----------------------------
DROP TABLE IF EXISTS `menusitem`;
CREATE TABLE `menusitem` (
  `menusId` varchar(10) NOT NULL COMMENT '每个order表里对应的菜单',
  `foodId` varchar(255) DEFAULT NULL,
  `num` varchar(10) DEFAULT '1' COMMENT '菜品数量',
  PRIMARY KEY (`menusId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menusitem
-- ----------------------------

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `orderId` varchar(255) NOT NULL,
  `userPhone` varchar(255) DEFAULT NULL COMMENT '桌子号码',
  `status` varchar(255) DEFAULT NULL COMMENT 'status:0时为未付款；status:1时为已付款',
  `addTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`orderId`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1520502337515', '1111', '1', '2018-03-08 17:45:51');
INSERT INTO `order` VALUES ('3', '3', '1', '2018-03-07 10:58:21');
INSERT INTO `order` VALUES ('1520502393686', '1111', '1', '2018-03-08 17:46:47');
INSERT INTO `order` VALUES ('1520502242909', '1111', '1', '2018-03-08 17:44:17');
INSERT INTO `order` VALUES ('1520500488753', '1111', '1', '2018-03-08 17:15:02');
INSERT INTO `order` VALUES ('1520500605021', '1111', '1', '2018-03-08 17:16:59');
INSERT INTO `order` VALUES ('1520501756213', '1111', '1', '2018-03-08 17:36:10');
INSERT INTO `order` VALUES ('1520502076772', '1111', '1', '2018-03-08 17:41:31');
INSERT INTO `order` VALUES ('1520501502141', '1111', '1', '2018-03-08 17:31:56');
INSERT INTO `order` VALUES ('1520501685075', '1111', '1', '2018-03-08 17:34:59');
INSERT INTO `order` VALUES ('1520503872146', '15976043004', '0', '2018-03-08 18:11:26');
INSERT INTO `order` VALUES ('1520504866569', '18620154961', '0', '2018-03-08 18:28:00');
INSERT INTO `order` VALUES ('1520511385528', '13360438799', '0', '2018-03-08 20:15:03');
INSERT INTO `order` VALUES ('1520511502769', '18577363440', '0', '2018-03-08 20:18:35');
INSERT INTO `order` VALUES ('1520512357978', '18620154961', '0', '2018-03-08 20:32:38');

-- ----------------------------
-- Table structure for orderfoods
-- ----------------------------
DROP TABLE IF EXISTS `orderfoods`;
CREATE TABLE `orderfoods` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `orderId` varchar(100) DEFAULT NULL,
  `foodId` varchar(100) DEFAULT NULL,
  `addTime` datetime DEFAULT CURRENT_TIMESTAMP,
  `count` varchar(10) DEFAULT '1' COMMENT '商品数量',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=88 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orderfoods
-- ----------------------------
INSERT INTO `orderfoods` VALUES ('67', '1520502242909', '1', '2018-03-08 17:44:17', '2');
INSERT INTO `orderfoods` VALUES ('47', '1520500488753', '2', '2018-03-08 17:15:03', '1');
INSERT INTO `orderfoods` VALUES ('5', '3', '5', '2018-03-07 10:59:16', '1');
INSERT INTO `orderfoods` VALUES ('69', '1520502337515', '3', '2018-03-08 17:45:51', '2');
INSERT INTO `orderfoods` VALUES ('68', '1520502337515', '20', '2018-03-08 17:45:51', '1');
INSERT INTO `orderfoods` VALUES ('66', '1520502242909', '2', '2018-03-08 17:44:17', '2');
INSERT INTO `orderfoods` VALUES ('65', '1520502242909', '3', '2018-03-08 17:44:17', '2');
INSERT INTO `orderfoods` VALUES ('58', '1520501502141', '1', '2018-03-08 17:31:56', '2');
INSERT INTO `orderfoods` VALUES ('59', '1520501685075', '2', '2018-03-08 17:34:59', '3');
INSERT INTO `orderfoods` VALUES ('60', '1520501685075', '1', '2018-03-08 17:34:59', '2');
INSERT INTO `orderfoods` VALUES ('61', '1520501756213', '2', '2018-03-08 17:36:10', '3');
INSERT INTO `orderfoods` VALUES ('62', '1520501756213', '1', '2018-03-08 17:36:10', '3');
INSERT INTO `orderfoods` VALUES ('63', '1520502076772', '2', '2018-03-08 17:41:31', '2');
INSERT INTO `orderfoods` VALUES ('64', '1520502076772', '1', '2018-03-08 17:41:31', '2');
INSERT INTO `orderfoods` VALUES ('48', '1520500605021', '1', '2018-03-08 17:16:59', '2');
INSERT INTO `orderfoods` VALUES ('70', '1520502337515', '2', '2018-03-08 17:45:51', '2');
INSERT INTO `orderfoods` VALUES ('71', '1520502337515', '1', '2018-03-08 17:45:51', '2');
INSERT INTO `orderfoods` VALUES ('72', '1520502393686', '3', '2018-03-08 17:46:47', '1');
INSERT INTO `orderfoods` VALUES ('73', '1520502393686', '2', '2018-03-08 17:46:47', '2');
INSERT INTO `orderfoods` VALUES ('74', '1520502393686', '1', '2018-03-08 17:46:47', '2');
INSERT INTO `orderfoods` VALUES ('75', '1520503872146', '1', '2018-03-08 18:11:26', '4');
INSERT INTO `orderfoods` VALUES ('76', '1520504866569', '2', '2018-03-08 18:28:00', '2');
INSERT INTO `orderfoods` VALUES ('77', '1520504866569', '1', '2018-03-08 18:28:00', '2');
INSERT INTO `orderfoods` VALUES ('78', '1520511385528', '3', '2018-03-08 20:15:04', '1');
INSERT INTO `orderfoods` VALUES ('79', '1520511385528', '2', '2018-03-08 20:15:04', '2');
INSERT INTO `orderfoods` VALUES ('80', '1520511385528', '1', '2018-03-08 20:15:04', '1');
INSERT INTO `orderfoods` VALUES ('81', '1520511502769', '2', '2018-03-08 20:18:35', '1');
INSERT INTO `orderfoods` VALUES ('82', '1520511502769', '3', '2018-03-08 20:18:35', '1');
INSERT INTO `orderfoods` VALUES ('83', '1520511502769', '4', '2018-03-08 20:18:35', '1');
INSERT INTO `orderfoods` VALUES ('84', '1520511502769', '10', '2018-03-08 20:18:35', '1');
INSERT INTO `orderfoods` VALUES ('85', '1520512357978', '3', '2018-03-08 20:32:38', '1');
INSERT INTO `orderfoods` VALUES ('86', '1520512357978', '2', '2018-03-08 20:32:38', '1');
INSERT INTO `orderfoods` VALUES ('87', '1520512357978', '1', '2018-03-08 20:32:38', '1');

-- ----------------------------
-- Table structure for performance
-- ----------------------------
DROP TABLE IF EXISTS `performance`;
CREATE TABLE `performance` (
  `cashierPerformanceId` varchar(255) NOT NULL COMMENT '收银员业绩',
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '时间',
  `cashierId` varchar(255) DEFAULT NULL COMMENT '收银员id',
  `num` int(11) DEFAULT NULL COMMENT '数量',
  PRIMARY KEY (`cashierPerformanceId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of performance
-- ----------------------------

-- ----------------------------
-- Table structure for quan
-- ----------------------------
DROP TABLE IF EXISTS `quan`;
CREATE TABLE `quan` (
  `cardId` int(255) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '0',
  `introduce` varchar(255) NOT NULL DEFAULT '0',
  `discount` varchar(255) NOT NULL DEFAULT '0',
  `time` varchar(255) NOT NULL DEFAULT '0',
  `status` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`cardId`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of quan
-- ----------------------------
INSERT INTO `quan` VALUES ('1', '小池塘南山书城店', '小池塘众多新品上市,期待您的光临', '满30减5', '2018/2/10-2018/3/10', '1');
INSERT INTO `quan` VALUES ('2', '江味龙虾馆', '吃小龙虾最好的季节，就是现在', '满40减10', '2017/12/20-2018/4/1', '1');
INSERT INTO `quan` VALUES ('3', '里约西餐厅', '新鲜的食材，是美味的第一步', '满40减20', '2018/2/16-2018/5/1', '2');
INSERT INTO `quan` VALUES ('4', '巴西烤肉', '吃巴西的肉', '满100减30', '2018/3/1-2018/4/30', '2');
INSERT INTO `quan` VALUES ('5', '火盆烧烤', '吃自己烤的烧烤', '满200减50', '2018/3/5-2018/4/16', '1');
INSERT INTO `quan` VALUES ('6', '柳州螺蛳粉', '正宗的粉，正宗的料', '满30减5', '2018/2/7-2018/2/14', '3');
INSERT INTO `quan` VALUES ('7', '阿婆烧鸡', '吃最好的鸡', '满50减10', '2018/1/10-2018/2/31', '3');

-- ----------------------------
-- Table structure for soldnote
-- ----------------------------
DROP TABLE IF EXISTS `soldnote`;
CREATE TABLE `soldnote` (
  `soldNoteId` varchar(255) NOT NULL COMMENT '销售单据id（流水号）',
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `status` varchar(255) DEFAULT NULL COMMENT '订单状态',
  `cashierId` varchar(255) DEFAULT NULL COMMENT '收银员id',
  `userid` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '用户id（会员id）',
  `menusId` varchar(10) DEFAULT NULL COMMENT '菜单id（关联该订单表对应订单的菜品）',
  PRIMARY KEY (`soldNoteId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of soldnote
-- ----------------------------

-- ----------------------------
-- Table structure for store
-- ----------------------------
DROP TABLE IF EXISTS `store`;
CREATE TABLE `store` (
  `goodsId` int(10) NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `goodsName` varchar(255) DEFAULT NULL COMMENT '商品名称',
  `goodsCategory` varchar(255) DEFAULT NULL COMMENT '商品分类',
  `supplier` varchar(255) DEFAULT NULL COMMENT '供货商',
  `inventory` varchar(10) DEFAULT NULL COMMENT '库存',
  `Units` varchar(255) DEFAULT NULL COMMENT '单位',
  `purchasCost` float(10,2) DEFAULT NULL COMMENT '进货价',
  `salesPrice` float(10,2) DEFAULT NULL COMMENT '销售价',
  `ShelfLife` varchar(255) DEFAULT NULL COMMENT '保质期',
  `addTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of store
-- ----------------------------
INSERT INTO `store` VALUES ('30', '1234', '肉类', '鱼肉之乡', '1234', '123', '123.00', null, null, '2018-03-07 16:55:45');
INSERT INTO `store` VALUES ('2', '牛肉', '肉类', '鱼肉之乡', '180', 'kg', '32.00', null, 'one week', '2018-03-07 16:14:58');
INSERT INTO `store` VALUES ('3', '大白菜', '蔬菜类', '青青菜园', '46', 'kg', '9.00', null, 'one day', '2018-03-06 20:17:34');
INSERT INTO `store` VALUES ('4', '鲫鱼', '鱼类', '鱼肉之乡', '355', 'kg', '16.00', null, 'one week', '2018-03-07 13:06:26');
INSERT INTO `store` VALUES ('5', '包菜', '蔬菜类', '青青菜园', '77', 'kg', '7.00', null, 'two day', '2018-03-06 17:08:55');
INSERT INTO `store` VALUES ('6', '瘦肉', '肉类', '鱼肉之乡', '144', 'kg', '15.00', null, 'one week', '2018-03-06 17:08:55');
INSERT INTO `store` VALUES ('7', '鸡蛋', '禽蛋类', '小米之家', '210', 'kg', '5.00', null, 'two month', '2018-03-06 17:08:55');
INSERT INTO `store` VALUES ('8', '番茄', '蔬菜类', '青青菜园', '120', 'kg', '6.00', null, 'three day', '2018-03-06 17:08:55');
INSERT INTO `store` VALUES ('9', '乌鸡', '肉类', '鱼肉之乡', '31', 'kg', '24.00', null, 'one week', '2018-03-06 20:17:41');
INSERT INTO `store` VALUES ('10', '大米', '主食类', '小米之家', '1245', 'kg', '9.00', null, 'four month', '2018-03-07 13:04:49');
INSERT INTO `store` VALUES ('11', '面', '主食类', '小米之家', '834', 'kg', '7.00', null, 'three month', '2018-03-06 17:08:55');
INSERT INTO `store` VALUES ('12', '蚝油', '佐料类', '小米之家', '1323', 'kg', '23.00', null, 'one year', '2018-03-06 17:08:55');
INSERT INTO `store` VALUES ('26', 'aaa', '肉类', '鱼肉之乡', '232', 'kg', '21.00', null, null, '2018-03-07 15:48:53');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(255) NOT NULL AUTO_INCREMENT,
  `tel` varchar(255) NOT NULL DEFAULT '0',
  `password` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '18577363440', '123456');
INSERT INTO `user` VALUES ('25', '13360438799', '123456');
INSERT INTO `user` VALUES ('24', '18620154961', '123');
INSERT INTO `user` VALUES ('23', '13981581187', '11111');
INSERT INTO `user` VALUES ('22', '15296819293', '123456');
INSERT INTO `user` VALUES ('21', '13612345678', '123456');
INSERT INTO `user` VALUES ('20', '18212345678', 'qwerty');
INSERT INTO `user` VALUES ('19', '13712345678', 'zxcvbnm');
INSERT INTO `user` VALUES ('18', '13037788850', 'asdfgh');
INSERT INTO `user` VALUES ('17', '15976043004', '12345678');

-- ----------------------------
-- Table structure for vip
-- ----------------------------
DROP TABLE IF EXISTS `vip`;
CREATE TABLE `vip` (
  `VIPID` varchar(255) NOT NULL COMMENT '会员号',
  `VIPName` varchar(255) DEFAULT NULL COMMENT '电话',
  `phone` varchar(255) DEFAULT NULL,
  `levelId` varchar(255) DEFAULT NULL COMMENT '会员等级',
  `balance` varchar(255) DEFAULT NULL COMMENT '余额',
  `Integral` varchar(255) DEFAULT NULL COMMENT '积分',
  PRIMARY KEY (`VIPID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vip
-- ----------------------------

-- ----------------------------
-- Table structure for viplevel
-- ----------------------------
DROP TABLE IF EXISTS `viplevel`;
CREATE TABLE `viplevel` (
  `levelId` varchar(255) NOT NULL COMMENT '会员等级',
  `levelName` varchar(255) DEFAULT NULL COMMENT '等级名称',
  `discount` varchar(255) DEFAULT NULL COMMENT '优惠折扣',
  PRIMARY KEY (`levelId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of viplevel
-- ----------------------------
