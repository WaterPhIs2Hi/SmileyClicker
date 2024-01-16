<html>

	<head>
		
		<title>Smiley Clicker</title>
		<link rel="stylesheet" href="style.css">
	</head>
	
	<body>
		
		<div id="TopMiddleJunk">
				<h1 id="mainTitle"> Smiley Clicker </h1>
				<h2 id="mainCashDisplay"> 0☺ </h2>
				<h2 id="cashpsDisplay"> 0☺ per second </h2>
				<button id="mainClicker" onclick="onClickMain()"><img src="Assets/MainButton.png" style="height:256px;width:256px;animation-duration:1;animation-fill-mode:forwards"></button>
		</div>

		<div id="buildingToolTips">
	
		</div>
		
		<h1 style="position:fixed;font-size:40px;text-align: center;background-color:black;right:0px;width:12.5%;font-align:center;background-color:#080913;border-style: solid;border-width:1%;border-radius:15px;">OBJECT SHOP</h1>
		<div id="Shop">
			<button id="building0btn" class="shopItem" onclick="attemptPurchase(0)" style="background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(Assets/ShopItem0.png);background-size:100% 100%;"></button>
			<button id="building1btn" class="shopItem" onclick="attemptPurchase(1)" style="background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(Assets/ShopItem1.png);background-size:100% 100%;"></button>
			<button id="building2btn" class="shopItem" onclick="attemptPurchase(2)" style="background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(Assets/ShopItem2.png);background-size:100% 100%;"></button>
			<button id="building3btn" class="shopItem" onclick="attemptPurchase(3)" style="background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(Assets/ShopItem3.png);background-size:100% 100%;"></button>
			<button id="building4btn" class="shopItem" onclick="attemptPurchase(4)" style="background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(Assets/ShopItem4.png);background-size:100% 100%;"></button>
			<button id="building5btn" class="shopItem" onclick="attemptPurchase(5)" style="background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(Assets/ShopItem5.png);background-size:100% 100%;"></button>
			<button id="building6btn" class="shopItem" onclick="attemptPurchase(6)" style="background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(Assets/ShopItem6.png);background-size:100% 100%;"></button>
			<button id="building7btn" class="shopItem" onclick="attemptPurchase(7)" style="background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(Assets/ShopItem7.png);background-size:100% 100%;"></button>
		</div>
		
		<div id="upgradeToolTips">
			
		</div>
		
		<h1 style="position:fixed;font-size:40px;text-align: center;background-color:black;left:0;width:12.5%;font-align:center;background-color:#080913;border-style: solid;border-width:1%;border-radius:15px;">UPGRADE SHOP</h1>
		
		<div id="UpgradeShop">
			<button id="building0upbtn" class="upgradeShopItem" onclick="attemptUpgrade(0)" style="background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(Assets/ShopItem0.png);background-size:100% 100%;"></button>
			<button id="building1upbtn" class="upgradeShopItem" onclick="attemptUpgrade(1)" style="background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(Assets/ShopItem1.png);background-size:100% 100%;"></button>
			<button id="building2upbtn" class="upgradeShopItem" onclick="attemptUpgrade(2)" style="background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(Assets/ShopItem2.png);background-size:100% 100%;"></button>
			<button id="building3upbtn" class="upgradeShopItem" onclick="attemptUpgrade(3)" style="background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(Assets/ShopItem3.png);background-size:100% 100%;"></button>
			<button id="building4upbtn" class="upgradeShopItem" onclick="attemptUpgrade(4)" style="background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(Assets/ShopItem4.png);background-size:100% 100%;"></button>
			<button id="building5upbtn" class="upgradeShopItem" onclick="attemptUpgrade(5)" style="background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(Assets/ShopItem5.png);background-size:100% 100%;"></button>
			<button id="building6upbtn" class="upgradeShopItem" onclick="attemptUpgrade(6)" style="background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(Assets/ShopItem6.png);background-size:100% 100%;"></button>
			<button id="building7upbtn" class="upgradeShopItem" onclick="attemptUpgrade(7)" style="background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(Assets/ShopItem7.png);background-size:100% 100%;"></button>
		</div>
		
		<div id="DialougeArea">
			<h2 id="DialougeAreaText"style="position:relative;left:2%;top:0.5%;right:2%;font-size:30px"></h2>easter egg :)
		</div>	
		
		
		
	</body>
<script src="main.js"></script>
</html>
