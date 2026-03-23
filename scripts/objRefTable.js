const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.filechooser,
		C3.Plugins.Button,
		C3.Plugins.Sprite,
		C3.Behaviors.Bullet,
		C3.Behaviors.solid,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.Physics,
		C3.Plugins.filechooser.Cnds.OnChanged,
		C3.Plugins.Sprite.Acts.LoadURL,
		C3.Plugins.filechooser.Exps.FileURLAt,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.CreateObject,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Behaviors.Physics.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{ファイル選択: 0},
	{ボタン: 0},
	{弾丸: 0},
	{固体: 0},
	{"ドラッグ＆ドロップ": 0},
	{スプライト: 0},
	{物理: 0},
	{スプライト2: 0},
	{スプライト3: 0},
	{ボタン2: 0},
	{ファイル選択2: 0},
	{ボタン3: 0},
	{ボタン4: 0},
	{ボタン5: 0},
	{ボタン6: 0},
	{ボタン7: 0},
	{ボタン8: 0}
];

self.InstanceType = {
	ファイル選択: class extends self.IFileChooserInstance {},
	ボタン: class extends self.IButtonInstance {},
	スプライト: class extends self.ISpriteInstance {},
	スプライト2: class extends self.ISpriteInstance {},
	スプライト3: class extends self.ISpriteInstance {},
	ボタン2: class extends self.IButtonInstance {},
	ファイル選択2: class extends self.IFileChooserInstance {},
	ボタン3: class extends self.IButtonInstance {},
	ボタン4: class extends self.IButtonInstance {},
	ボタン5: class extends self.IButtonInstance {},
	ボタン6: class extends self.IButtonInstance {},
	ボタン7: class extends self.IButtonInstance {},
	ボタン8: class extends self.IButtonInstance {}
}