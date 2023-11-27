
## <span id="CMI">COM3D2 Modular Installer</span>

*[CMI]:COM3D2 Modular Installer 插件整合包
**(简称 CMI)**
COM3D2 的插件整合包应用程序，插件全且兼容性好。
安装时选择一个适合的预设（我想大部分玩家只要选只管冲就行了），并遵照以下的几项注意点，然后一路确定即可。
|<div style="width:600px">下载地址</div>|
|:------|
|[**<kbd style="background:#1677ff;padding:5px"><font color=white face="微软雅黑 light">官方网址</font></kbd>**](https://krypto5863.github.io/COM-Modular-Installer/download.html) [**<kbd style="background:#1677ff;padding:5px"><font color=white face="微软雅黑 light">3DM下载 (略旧)</font></kbd>**](https://mod.3dmgame.com/mod/186198)|

<div style="background:#fff2f0;padding:8px;;width:720px;font-size:14px;font-family:微软雅黑 light;font-weight:bold">
  ❌ 确保你的游戏路径没有中文，部分插件不支持中文路径。
</div><br/>
<div style="background:#fdf3bc;padding:8px;width:720px;font-size:14px;font-family:微软雅黑 light;font-weight:bold">
  ⛔ 安装时记得把翻译插件去掉，因为那是英文的，而且你也没法用谷歌翻译。(但对老外来说 CMI 自带英化)
</div><br/>
<div style="background:#dbffb7;padding:8px;width:720px;font-size:14px;font-family:微软雅黑 light;font-weight:bold">
✳️ 提示

  - 记得勾选一个叫 NPRShader[^NPRShader] 的插件，这个插件需要手动勾选，而有些 Mod 需要这个。
  - CMI 自带作弊插件和一款修改器，该修改器需要手动勾选，具体参见文档。
  - 装完后游戏目录会出现一个 CMI Documentation 文件夹，文档在这里面，有中文版，记得读。
  - CMI 是支持重复安装的，会自动清理游戏目录，如有喜欢的插件没勾选，可以直接重新安装。
  - 如何卸载 CMI ？重新安装并取消所有插件勾选即可。
  - 少部分 Mod 没有被 CMI 收入，比如还有一个高跟鞋插件，也有些 Mod 会用到这些，具体文档内有说明。
</div>


 > [!tip]> 记得勾选一个叫 NPRShader[^NPRShader] 的插件，这个插件需要手动勾选，而有些 Mod 需要这个。
 > [!tip]> CMI 自带作弊插件和一款修改器，该修改器需要手动勾选，具体参见文档。
 > [!tip]> 装完后游戏目录会出现一个 CMI Documentation 文件夹，文档在这里面，有中文版，记得读。
 > [!tip]> CMI 是支持重复安装的，会自动清理游戏目录，如有喜欢的插件没勾选，可以直接重新安装。
 > [!tip]> 如何卸载 CMI ？重新安装并取消所有插件勾选即可。
 > [!tip]> 少部分 Mod 没有被 CMI 收入，比如还有一个高跟鞋插件，也有些 Mod 会用到这些，具体文档内有说明。


- - - 




2. 构建工程时候拉取相关内容，会比较慢，如果你有代理会好一些。
3. 【麻烦的问题】基于 Gradle 的 IDEA 插件开发会在构建过程中，会下载一个匹配版本的 IDEA 软件用于启动测试开发插件，几百兆那种zip包 `ideaIC-2019.3.1.zip`。这个时候基本你会遇到一个崩溃的报错 ` Could not resolve all files for configuration ':detachedConfiguration1'.` 咋办呢，如果你不嫌弃麻烦可以手动下载并SHA1加密后把下载的文件放到缓存文件夹中 `.gradle\caches\modules-2\files-2.1` 具体操作如下：
   - 打开系统盘下当前用户的`.gradle`目录，进入`.gradle\caches\modules-2\files-2.1`目录，即为缓存文件的目录。这个目录是你的报错构建过程中的报错地址，`Could not get resource D:\Program Files (x86)\gradle\gradle-5.2.1\.gradle\caches\modules-2\files-2.1\com.jetbrains.intellij.idea\ideaIC\2019.3.1`
   - 加密文件夹`2dae8e50d4b0508cad2e680b53414f657954f390`目录名称(你的可能不是这样的)，我去，这个应该是[加密](http://msd.misuland.com/pd/4146263708462488226)过的，但是是什么加密呢？,经过了解知道了这个是`SHA1`加密，且是对文件进行`SHA1`的加密生成的唯一[字符串](http://msd.misuland.com/pd/4146263708462488416)，但是windows上没有这个命令，在线`SHA1`也太麻烦了，还要上传文件，于是想到了Java的API，还有就是通过`git hash`命令行来实现。 把我们的文件`ideaIC-2019.3.1.zip`先临时拷贝到这个目录。运行`sha1sum.exe ideaIC-2019.3.1.zip`命令，生成唯一的唯一字符串（用来校验文件的完整性），这样就拿到这个`2dae8e50d4b0508cad2e680b53414f657954f390`目录名
   - 接下来在`2019.3.1`目录下，新建目录`2dae8e50d4b0508cad2e680b53414f657954f390`，将`ideaIC-2019.3.1.zip`移动进去即可。
4. 【堆栈溢出】在 Gradle 构建的过程中，消耗内存较大，可能会报错 `Java heap space` 所以也可以 在IDEA项目根目录下，新建文件`gradle.properties`，添加如下内容，变更gradle Jvm参数  `org.gradle.



## <font color=green>BepInEx 框架</font>
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > Unity 引擎游戏用的开源插件框架。
  > 和 Sybaris、UnityInjector 这两个插件框架不同，Bepinex 正在积极开发中。
  > 它拥有更好的日志记录功能，而且插件作者能够得到插件框架开发人员的直接支持。
  > 而 SybarisLoader 和 UnityInjectorLoader 组件让它可以使用这两个框架的插件，因此 BepInEx 可以完全取代 Sybaris 和 UnityInjector。
</details>

版本：5.4.22
来源：[https://github.com/BepInEx/BepInEx](https://github.com/BepInEx/BepInEx)

- - -

## <div align="right"><font color=blue>BepInEx Plugins 插件</font></div>
**<div align="right">———— 后缀为 .dll 的 BepInEx 框架插件，存放于 \COM3D2\BepinEx 文件夹。</div>**

### <font color=green>AddYotogiSliderSE2</font>
*[AddYotogiSliderSE2]:夜战 F5 插件
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 经典的色色插件。
  > 有自动阿嘿颜功能和自动Kupa功能（在i社游戏被称为花瓣开合功能），还能在夜伽中作弊，实时修改女仆的状态（比如兴奋度和体力值）。
  > 如果你就想色色，那你肯定需要这个。
</details>

**<font color=Red>注意</font>**：如果 InOutAnimation[^InOutAnimation] 的自动 kupa 开启了，则 AddYotogiSliderSE2 的自动 kupa 功能将被禁用以防止冲突。
**热键**：<font color=Red>F5</font>
**适用场景**：夜伽
<font color=Red>CR-Edit 版本[^CR-Edit版本]可用</font>
版本：1.0.0.10
来源：[https://github.com/Vin-meido/COM3D2.AddYotogiSliderSE.Plugin](https://github.com/Vin-meido/COM3D2.AddYotogiSliderSE.Plugin)


- - -

### <font color=green>AdvancedMaterialModifier</font>
*[AdvancedMaterialModifier]:高级材质定制
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 在游戏中实时进行大规模、统一的对物体的材质修改，并且可自动保存这些修改。
</details>

**热键**：<font color=red>F1</font> [**<font color=DarkOrchid>(需要<u>F1配置管理器</u>)</font>**](#f1menu)
<font color=red>CR-Edit 版本[^CR-Edit版本]可用</font>
版本：1.2.2.1
来源：[https://github.com/krypto5863/COM3d2-AdvancedMaterialModifier](https://github.com/krypto5863/COM3d2-AdvancedMaterialModifier)


- - -

### <font color=red>AutoSave</font>
*[AutoSave]:自动保存
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 在新的一天开始时自动创建一个保存项。
  > 默认情况下，使用保存插槽 90-99。自动保存将有存档描述“自动保存”。
</details>

**热键**：<font color=red>F1</font> [**<font color=DarkOrchid>(需要<u>F1配置管理器</u>)</font>**](#f1menu)
版本：1.3.0
来源：[https://github.com/Pain-Brioche/COM3D2.AutoSave](https://github.com/Pain-Brioche/COM3D2.AutoSave)

- - -

### <font color=red>CameraControlEx</font>
*[CameraControlEx]:小键盘控制相机
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 这个简单的插件可以让你用小键盘控制相机。
  > 对于那想些更熟练的拍摄照片的人来说是一个非常顺手的插件。
</details>

**热键**：<font color=red>几乎整个小键盘。</font>[**<font color=DarkOrchid>(<u>请参阅github文档</u>)</font>**](https://github.com/usagirei/CM3D2_CameraControlEx/blob/master/README.md)
**适用场景**：所有
版本：1.0.1.1 (Performance fix by Vin)
来源：[https://github.com/usagirei/CM3D2_CameraControlEx](https://github.com/usagirei/CM3D2_CameraControlEx)

- - -

### CheatMenu
*[CheatMenu]:作弊菜单
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 一个轻巧简单的作弊菜单，可以帮助淘汰 MaidFiddler。
</details>


**适用场景**：所有 </font>**<font color=DarkOrchid>(需要 <u>COM3D2.API </u>[^COM3D2.API])</font>**
版本：1.0
来源：[https://github.com/krypto5863/COM3D2.CheatMenu](https://github.com/krypto5863/COM3D2.CheatMenu)

[^COM3D2.API]:COM3D2.API
- - -

### <font color=green>ChoosyPreset</font>
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 一个允许您有选择地加载部分插件的预设。 
  > 只需打开预设面板，菜单就会随之打开。
  > 用户界面现在有了很大的改进。
</details>

版本：3.25
来源：[https://github.com/krypto5863/COM3D2.ChoosyPreset](https://github.com/krypto5863/COM3D2.ChoosyPreset)

- - -
### <font color=red>ColorPresetNum</font>
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 在编辑模式中选中无限色物品时生成一个小型UI，为精准调整颜色提供便利。
  > 功能与 ColorPaletteHelper[^ColorPaletteHelper] 作用一样。
  > 
  > [https://youtu.be/VXxlDrl8PFg](https://youtu.be/VXxlDrl8PFg "视频展示")<iframe width="625" height="405" src="https://www.youtube.com/embed/VXxlDrl8PFg?si=-0IcOJAJHJ4Wrp0M" title="视频展示" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  >
  > ![图片展示 1](https://user-images.githubusercontent.com/20321215/127504072-5f109aad-f34f-40b3-9d9d-0fdef970dd23.png "图片展示 1")
  > ![图片展示 2](https://user-images.githubusercontent.com/20321215/127507723-8adc7db5-cc42-4939-b960-e6434195e4f8.png "图片展示 2")
  > ![图片展示 3](https://user-images.githubusercontent.com/20321215/127507725-e4921983-24c4-4fa4-b8fe-10fe178673fb.png "图片展示 3")
</details>

版本：2.3.1
来源：[https://github.com/customordermaid3d2/COM3D2.colorPresetNum.Plugin](https://github.com/customordermaid3d2/COM3D2.colorPresetNum.Plugin)


- - -

### <span id="f1menu"><font color=green>ConfigurationManager</font></span>
*[ConfigurationManager]:BepInEx 框架插件设置管理器
*[F1配置管理器]:ConfigurationManager／F1 菜单
**(又名：F1菜单／F1配置管理器)**
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 主要为 mod 制作者所使用，但同时也是一个简单易用的 BepInEX 插件的图形化用户界面。
  > 本插件为插件制作者们提供了实装设置菜单的平台。基本上 BepInEX 框架的插件都能在这看见设置菜单。
  >
  > ![图片展示](https://raw.githubusercontent.com/BepInEx/BepInEx.ConfigurationManager/master/Screenshot.PNG "图片展示")
</details>

**热键**：<font color=red>F1</font>
版本：18.0.1
来源：[https://github.com/BepInEx/BepInEx.ConfigurationManager](https://github.com/BepInEx/BepInEx.ConfigurationManager)

- - -

### <font color=green>CMIUpdateChecker</font>
*[CMIUpdateChecker]:CMI 更新检测器
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 当你加载完标题画面时检查CMI是否有更新，如果有，则会弹窗告知用户。每次CMI更新都只会提示你一次。
  > 更新 CMIUpdateChecker 会生成一个设置文件来记录他检测到更新内容及玩家更新数据。

</details>

**注意**：<font color=red>需要联网获取更新清单</font>
版本：2.5.19 (内置于 [CMI](#CMI)，无需单独下载)
来源：
[1] [https://github.com/krypto5863/COM-Modular-Installer](https://github.com/krypto5863/COM-Modular-Installer)
[2] [https://krypto5863.github.io/COM-Modular-Installer/download](https://krypto5863.github.io/COM-Modular-Installer/download)

- - -

### <font color=green>EditBodyLoadFix</font>
*[EditBodyLoadFix]:体型读取编辑修复
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 从预设中加载自定义体型，并修复在编辑模式下切换体引起的各种问题。
  > 当切换身体时，这个插件自动恢复选定的姿势，防止乳房物理僵化，并在放置配件时防止动画冻结。
</details>

<font color=red>CR-Edit 版本[^CR-Edit版本]不可用</font>
版本：1.1.1
来源：[https://github.com/Perdition-117/COM3D2.EditBodyLoadFix](https://github.com/Perdition-117/COM3D2.EditBodyLoadFix)

- - -
### <font color=green>ExtendedErrorHandling</font>
*[ExtendedErrorHandling]:防弹窗报错闪退
**(又名：EEH)**
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 避免游戏因为一些无伤大雅的小错误而崩溃或停止响应。
  > 这个拓展包整合了一些已有插件（比如缺少的贴图会被替换为粉红色格子图和CreatorSaveFix，参见本文的留档信息部分）。
  >同时也写了一些新功能（基本是使用错误mod的时候不会报错/游戏崩溃）。
</details>

版本：1.6
来源：[https://github.com/krypto5863/COM3D2.ExtendedErrorHandling](https://github.com/krypto5863/COM3D2.ExtendedErrorHandling)

- - -
### <font color=green>ExtendedPresetManagement</font>
*[ExtendedPresetManagement]:女仆预设管理扩展
**(又名：PresetMan)**
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 允许用户使用文件夹并在其中切换来更好的管理自己的预设。
  > 允许将预设以任何名称保存在任何位置。每5分钟会自动保存一次你当前的编辑情况。
</details>

**热键**：<font color=red>F1</font> [**<font color=DarkOrchid>(需要<u>F1配置管理器</u>)</font>**](#f1menu)
版本：1.5.2
来源：[https://github.com/krypto5863/COM3D2.ExtendedPresetManagement](https://github.com/krypto5863/COM3D2.ExtendedPresetManagement)

- - -

### <font color=red>FPSCounter</font>
*[FPSCounter]:帧率计数器
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 提供更加精细的屏幕帧数数据，使您能查看到每个数据包上传流程所花费的具体时间。
  > 该插件将各插件／mod 对游戏性能的影响可视化。
  > 
  > ![图片展示](https://user-images.githubusercontent.com/39247311/77855748-c1764780-71f2-11ea-8e8e-0e9a35d9866b.png "图片展示")
</details>

**热键**：<font color=red>F1</font> [**<font color=DarkOrchid>(在<u>F1配置管理器</u>中，启用“FPSCounter”插件)</font>**](#f1menu)
版本：3.1
来源：[https://github.com/ManlyMarco/FPSCounter](https://github.com/ManlyMarco/FPSCounter)

- - -

### <font color=red>FPSUnlock</font>
*[FPSUnlock]:解锁帧率上限
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 可以直接调整帧数，再也不用每次开游戏都被迫点开那些个框框啦。
  > 同时也可以在游戏界面最小化挂在后台的时候进行帧率调整以减少内存占用。
  > 如果您已经安装了 [BepInEx 框架插件设置管理器](#f1menu) 插件，那么您可以按下 F1 来调整帧率。
  > 帧率变更将会实时进行。
</details>

**注意**：激活垂直同步将覆盖帧率设置，使游戏的刷新率强制变更为您的显示屏刷新率。若您希望手动调整帧率的话，请关闭垂直同步。
**热键**：<font color=red>F1</font> [**<font color=DarkOrchid>(需要<u>F1配置管理器</u>)</font>**](#f1menu)
版本：2.1
来源：[CustomMaidDiscord](https://discord.com/channels/297072643797155840/426725636367974410/927387379545829426)

- - -

### <font color=DimGray>GearMenuFix</font>
*[GearMenuFix]:右上角菜单修复
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 为COM3D2.5修复了一些插件图标不会在菜单中显示的问题。
</details>

**注意**：<font color=red>专供 3.13.0 及以上游戏版本使用。</font>
来源：[CustomMaidDiscord](https://discord.com/channels/297072643797155840/736350853442699284/947970154258640906)

- - -

### <font color=green>InputHotkeyBlock</font>
*[InputHotkeyBlock]:输入时屏蔽快捷键
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 当你在游戏内输入字符时，屏蔽快捷键功能以避免不便。
</details>

版本：v1.2
来源：[https://github.com/DeathWeasel1337/COM3D2_Plugins/releases/tag/v5](https://github.com/DeathWeasel1337/COM3D2_Plugins/releases/tag/v5)

- - -

### <font color=green>MeidoPhotoStudio</font>
*[MeidoPhotoStudio]:女仆摄影工作室
*[MPS]:Meido Photo Studio 女仆摄影工作室
**(又名：MPS)**
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 一个可以用来放置多个女仆，调整其姿势，摆放场景物品来摄影的插件。
  > 如果你之前使用 MM 复数摄影且希望能够将你保存过的姿势导入到 MPS 中的话，请将原文件放置到：【COM3D2\BepinEx\config\MeidoPhotoStudio\Presets\Custom Pose】
  > 
  > 场景管理![场景管理](https://git.coder.horse/habeebweeb/COM3D2.MeidoPhotoStudio/raw/main/img/scene_manager.jpg)
  >
  > 附加道具![附加道具](https://git.coder.horse/habeebweeb/COM3D2.MeidoPhotoStudio/raw/main/img/attach_prop.jpg)
  >
  > 更多服装切换![更多服装切换](https://git.coder.horse/habeebweeb/COM3D2.MeidoPhotoStudio/raw/main/img/more_clothing_toggles.jpg)
  >
  > 自定义姿势类别![自定义姿势](https://git.coder.horse/habeebweeb/COM3D2.MeidoPhotoStudio/raw/main/img/custom_pose.jpg)
  >
  > 自定义手部预设和类别![自定义手部](https://git.coder.horse/habeebweeb/COM3D2.MeidoPhotoStudio/raw/main/img/hand_presets.jpg)
</details>

**已知问题**：<font color=red>在编辑模式下加载女仆预设时，手摆的姿势可能失效。使用MPS时，避免加载预设、更改身体mod。</font>
**热键**：<font color=red>F6</font> 打开；更多操作请查阅说明<font size=2>【COM3D2\CMI Documentation\MPS_readme.html】</font>;
　　　操作方式类似于 F7复数摄影[^F7复数摄影]，因为本质上 MPS 是 MM[^MM] 的精神续作。
**适用场景**：女仆编辑界面, Office mode, limited control in Yotogi

<font color=red>CR-Edit 版本[^CR-Edit版本]不可用</font>
版本：1.0.0 beta 4.1
来源：[https://git.coder.horse/habeebweeb/COM3D2.MeidoPhotoStudio](https://git.coder.horse/habeebweeb/COM3D2.MeidoPhotoStudio)

- - -

### <font color=green>ModRefresh</font>
*[ModRefresh]:Mod 刷新
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 无需重启游戏便可加载新放入文件夹的 mod。
</details>

**注意**：必须先退出编辑模式后再使用本功能，之后重新进入编辑模式来看到新加载的mod（咸鱼说：在捏人界面也可以执行刷新命令，成功刷新后游戏会提示你重新进入编辑模式，缺点是刷新速率明显变慢）。
**热键**：右上角菜单，图标是一个带有“Mod”字样的刷新符号。
来源：[CustomMaidDiscord](https://discord.com/channels/297072643797155840/736350623020351509/766799553189249025)

- - -

### <font color=green>OptimizeIMGUI</font>
*[OptimizeIMGUI]:IMGUI优化（开插件UI更快）
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 优化很多插件调用的的 UI 库。
  它的工作原理是减少收集垃圾的配额，从而加快插件 UI 的开启。
</details>

版本：v1.0  
来源：[https://github.com/BepInEx/BepInEx.Utility/releases](https://github.com/BepInEx/BepInEx.Utility/releases)

- - -

### <div align="right"><font color=blue>Scripts 脚本类插件</font></div> <font color=green>ScriptLoader</font>
*[ScriptLoader]:脚本加载器
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > BepInEx 框架一个非常棒的点就是可以偷懒地做插件。不用经过编译得到.dll 文件，而可以直接使用小巧精简的 .cs 文件。
  > 后缀为 .cs 的脚本类插件添加到 \COM3D2\scripts 就可以被 ScriptLoader 加载。
</details>

版本：1.2.4.0
来源：[https://github.com/ghorsington/BepInEx.ScriptLoader](https://github.com/ghorsington/BepInEx.ScriptLoader)

- - -

#### <font color=red>Add Subs to Old Yotogi</font>
*[Add Subs to Old Yotogi]:为夜伽添加字幕
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 这个脚本能在联动 CM3D2[^CM3D2] 后的经营切题的夜伽中开启字幕。
  > 然后，XUAT 或其他翻译插件可以从中选中文本并进行翻译。
  > COM 的正常夜伽已经在 i18nEx[^i18nEx] 中内置了这个功能，所以不玩经营切替的 CM 的话不需要这个插件。
</details>

来源：By Denikson (@Geoffrey of the Horsington)

- - -

#### <font color=red>All Maids In Private Mode</font>
*[All Maids In Private Mode]:所有女仆私有化
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 无视和女仆的关系，可以直接在私人模式中选择她（原本需要结婚的关系）。
  > 这样你可以把一个女仆放在你的办公室里，而不用和她结婚。
  > 但是，通过此脚本解锁的女仆不能解锁私人模式事件。
</details>
<details>
<summary><b>注意</b></summary>

> 仍受性格限制，不兼容 GP-02 的女仆不能在私人模式下使用。
此外，Extra，Unique 和 NPC 女仆（比如通过事件获得的租借女仆，那些不能安排夜伽的）不能在私人模式中使用。
</details>

修复：Pain Brioché (@Rev)
来源：Denikson (@Geoffrey of the Horsington)
[https://git.coder.horse/ghorsington/NeighPack](https://git.coder.horse/ghorsington/NeighPack)

- - -

#### <font color=green>Character Edit Sort Redux</font>
*[Character Edit Sort Redux]:角色编辑排序
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 改变女仆在角色管理菜单中的排序方式。
  > 默认排序顺序如下：
  > 女仆长>已婚>初始(COM)>移籍(CM)>特殊>额外
  > 当女佣类型相同时，排序顺序为：
  > 合同类型(私人>自由>实习)>女仆的姓>女仆的名字
</details>

来源：[CustomMaidDiscord](https://discord.com/channels/297072643797155840/736350853442699284/936312744108519514)

- - -

#### <font color=green>DumpGameInfo</font>
*[DumpGameInfo]:转储游戏信息
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 这个简单的脚本通过将一些基本的游戏信息转储到位于 COM3D2x64_Data 文件夹中的 unity 日志文件中来帮助故障排除。
</details>

来源：Denikson (@Geoffrey of the Horsington)

- - -

#### <font color=green>EditBlinkStop</font>
*[EditBlinkStop]:编辑模式不眨眼
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 让女仆在编辑模式中不眨眼，保存封面和预设的时候更方便。
</details>

来源：[CustomMaidDiscord](https://discord.com/channels/297072643797155840/736350853442699284/949034464414150657)

- - -

#### <font color=green>EditableNames</font>
*[EditableNames]:名称可编辑
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 这个脚本允许你在女仆编辑模式下通过女仆个人资料页面中的文本框更改女仆的名字。
</details>

来源：Denikson (@Geoffrey of the Horsington)
- - -

#### <font color=green>Enable Scout Mode</font>
*[Enable Scout Mode]:启用星探模式
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 这个脚本允许你在不满足要求的情况下使用星探模式。
  > (原本需要完成主线故事，雇佣 30 个女佣，拥有 2 亿的钱)。
</details>

来源：Denikson (@Geoffrey of the Horsington)
- - -

#### <font color=green>FastFade</font>
*[FastFade]:减少场景之间的转换效果，使得 UI 更灵敏。
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 减少场景之间的转换效果，使得UI更灵敏。
  **注意**：只改善了场景之间的淡出和渐变。它没有像最初的 FastFade 那样跳过任何内容。
</details>


来源：[CustomMaidDiscord](https://discord.com/channels/297072643797155840/736350853442699284/948268507659915294)

- - -

#### <span id="forcescheduleevents"><font color=red>ForceScheduleEvents</font></span>
*[ForceScheduleEvents]:自由添加计划事件。
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 无视计划安排所需求的一切条件，强制安排进行所有可选事件，并且可以在记忆模式下访问 H 事件。
</details>
<details>
<summary><b>警告</b></summary>

  > <font color=red>使用此脚本强制进行事件将会促发事件对应条件的生成。
  举个栗子，NTR 系列事件强行进行中间事件，会导致之后关联 NTR 永久解锁，
  而之前事件在没有的脚本的情况下依旧缺少发生条件，女仆发生相应状况也会写入存档......
  所以可能会使存档发生问题。<b>使用前备份，备份，再备份存档。</b></font>
</details>

**热键**：<font color=red>E</font> 键切换 解锁／不解锁
配置：\COM3D2\scripts\ForceSchedleEvents.cs 切换热键可以在这里进行更改，并且可允许在游戏启动时默认启用。
来源：Pain Brioché(@Rev) [CustomMaidDiscord](https://discord.com/channels/297072643797155840/736350853442699284/960905252947759125)

- - - 

#### <font color=red>MemoriesModeUnlock</font>
*[MemoriesModeUnlock]:回想模式解锁场景
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 在回想模式下解锁所有夜伽场景，解锁将在和某个女仆进入一次【回想-夜伽】后完成。
  只能解锁该女仆的全部回想夜伽场景，而不会解锁所有女仆的回忆模式夜伽场景。
</details>
<details>
<summary><b>注意</b></summary>

 > ● 解锁的夜伽技能将保持解锁。 对于需要解锁多个夜伽技能建议使用 [Unlock All Skills](#unlockallskills) 脚本；
  ● H 事件 (可以在计划里被安排的事件) 将会保持解锁状态。如果希望解锁特定事件建议使用 [ForceScheduleEvents](#forcescheduleevents) 脚本；
  ● 要恢复到未使用脚本时的记忆数据，只需删除该插件。在脚本激活之前锁定的事件将再次被锁定。
</details>
来源：Lilly (@lilly#0603)

- - -

#### <font color=red>MoreRandomNames</font>
*[MoreRandomNames]:更多随机姓名
NPCs 姓名自动随机生成。找不到出处，可删除。

- - -

#### <font color=green>NameExtender</font>
*[NameExtender]:名字长度拓展
将可编辑文本框的字符限制增加到最多 20 个字符。适用于女仆和主人的英文姓名。

- - -

#### <font color=green>SaveSettingsInGame</font>
*[SaveSettingsInGame]:自动保存系统设定
当你关闭设置菜单 (而不是关闭游戏) 时，游戏内设置将被保存。
当你以非正常方式关闭游戏时有帮助，因为之前这么干会导致设置不被保存。

- - -

#### <font color=green>SkipStartLogo</font>
*[SkipStartLogo]:开始界面 Logo 跳过
跳过播放开始界面的 Logo 以及警告来为你省下数秒钟的加载时间。
来源：[CustomMaidDiscord](https://discord.com/channels/297072643797155840/736350853442699284/948641714116120597)

- - -

#### <font color=red>Load Small Thumbs</font>
*[Load Small Thumbs]:加载 Preset 预览图
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 这个脚本允许你改变女仆预览图（就是编辑模式下女仆的那张快照，夜伽前选人用的也是这张）。
  只要把预览图放在 thumbs 文件夹下就可以自动替换并固定为这张图片。
</details>
来源：Denikson (@Geoffrey of the Horsington)

- - -
#### <font color=red>Quick Edit Scene</font>
*[Quick Edit Scene]:快速进入编辑模式
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 该插件允许您直接从游戏标题界面进入女仆编辑模式。本插件主要为 mod 制作服务。
</details>
<details>
<summary><b>警告</b></summary>

  > 在这种方式下进入编辑模式后，不要点击右下角的 OK 去保存你创建的女仆。
  可能造成 bug 和其他后果，你可以右上角齿轮回到标题画面或直接关掉游戏。
</details>

**热键**：<font color=red>i</font>
**适用场景**：标题界面
配置：\COM3D2\scripts\quick_edit_scene.cs
来源：Denikson (@Geoffrey of the Horsington)

- - -

#### <font color=green>Report Dupes</font>
*[Report Dupes]:重复 mod 文件报告
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 这个脚本会在你启动游戏的时候在你的游戏根目录生成一个记录文件 menu_dupes.log，列出你 mod 文件夹内重复的 mod。
  避免在文件夹内保有重复 mod，没有好处，尽快移除。
</details>
来源：Denikson (@Geoffrey of the Horsington)

- - -

#### <span id="unlockallskills"><font color=red>Unlock All Skills</font></span>
*[Unlock All Skills]:解锁全部夜咖技能
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 本插件能够解锁所有性格兼容的全部夜咖技能。
  它移除了对女仆状态（自由／专属女仆、性经验、婚姻／奴役状态、夜咖等级／状态）的校验。
  夜咖技能将在雇佣女仆/进行一次夜咖之后解锁。
  也可以用于恢复任何解锁的技能到什么技能应该是可用的与女佣的当前属性。
  用于修复以前解锁的不兼容的技能。
</details>

<details>
<summary><font color=CadetBlue>使用方法</font></summary>

  > - 进入女仆管理界面选择一名女仆
  > - 按 U 键解锁技能，或者按R键重置当前女仆属性状态所能解锁的技能。
  > - 确认后进行变更。
</details>

<details>
<summary><b>注意</b></summary>

  > ● 按 U 键解锁技能可能会打开 InOutAnimation[^InOutAnimation] 面板它的热键也是 U。
  > 在女仆管理界面 InOutAnimation[^InOutAnimation] 没有任何功能，你可以放心地忽略它。
  > ● 如果女仆没有相应的癖好，一些夜伽技能的特定子选项将无法获得。
  > 需要完成一个具有 “觉醒” 技能（粉色背景）的夜伽事件，赋予女仆癖好。
</details>

配置：\COM3D2\scripts\unlock_all_skills.cs 上述插件冲突如果您介意可在这修改热键
来源：Pain Brioché (@Rev) [CustomMaidDiscord](https://discord.com/channels/297072643797155840/736350853442699284/960904866065158144)

- - -

#### <font color=green>Wrap Mode Extend</font>
*[Wrap Mode Extend]:长时间使用高级纹理
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 这个脚本允许 COM 长时间使用高级纹理。
  一些 mod 可能需要这个脚本，它将使 mod 搬运工的编辑更为容易。推荐！
</details>

**警告**：如果你的电脑配置不行，FPS将会大大降低。
<font color=red>CR-Edit 版本[^CR-Edit版本]不可用</font>
来源：Denikson (@Geoffrey of the Horsington)

- - -

### <font color=green>ShapekeyMaster</font>
*[ShapekeyMaster]:形态键大师
*[SM]:形态键大师
**(又名：SM)**
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 一个管理形态键及形态键动画的插件。
  允许用户以一种不破坏其游戏沉浸感的方式在捏人时使用。
  查看github网址来了解如何从ShapekeyAnimator插件继承你之前保存的形态键预设到本插件中。
</details>

**图标**：右上角齿轮菜单 (花俏的 SM 字体图标) 
**热键**：<font color=red>F1</font> [**<font color=DarkOrchid>(需要 <u>F1配置管理器</u> )</font>**](#f1menu)
版本：1.5
来源：[https://github.com/krypto5863/COM3D2.ShapekeyMaster](https://github.com/krypto5863/COM3D2.ShapekeyMaster)

- - -

### <font color=green>ShiftClickExplorer</font>
*[ShiftClickExplorer]:Shift 左键打开 mod 所在文件夹
**(又名：ShiftClick)**
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 在女仆编辑模式里 shift 左键点击物品，可以快速的在 Windows 资源管理器中看到对应的文件位置。
</details>

**热键**：<font color=red>Shift + LeftMouseButton</font>
**适用场景**：女仆编辑界面
版本：1.2
来源：[https://github.com/krypto5863/COM3D2.ShiftClickExplorer](https://github.com/krypto5863/COM3D2.ShiftClickExplorer)

- - -

### <span id="SML"><font color=green>ShortMenuLoader</font></span>
*[ShortMenuLoader]:女仆编辑界面快速加载
*[SML]:ShortMenuLoader【女仆编辑界面快速加载】
**(又名：SML)**
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > SML 可以加速 menu 文件的加载，它将使更快的加载到女仆编辑界面。
  如果您有较大的 mod 文件夹，加载速度将会显著提高。
</details>
<details>
<summary><b>注意</b></summary>

  > Mod 文件夹中没有多少文件的玩家可能不会注意到任何很大的差异。
  随着这个插件结合并改进了 CacheEditMenu 和 QuickEditStart, 我们已经不需要后两者了。
</details>

**热键**：<font color=red>F1</font> [**<font color=DarkOrchid>(需要 <u>F1配置管理器</u>)</font>**](#f1menu)
版本：1.5.6 (Fix for CR-Edit 3.13)
来源：[https://github.com/krypto5863/COM3D2.ShortMenuLoader](https://github.com/krypto5863/COM3D2.ShortMenuLoader)

- - -

### <font color=green>ShortMenuVanillaDatabase</font>
*[ShortMenuVanillaDatabase]:女仆编辑界面快速加载
*[SMVD]:ShortMenuVanillaDatabase【女仆编辑界面快速加载】
**(又名：SMVD)**
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 此插件能够显著提升加载游戏本体内容时的速度。此插件与快速menu 加载器 [ShortMenuLoader (SML)](#SML) 相辅相成。
</details>

版本：1.3.1
来源：[https://github.com/krypto5863/COM3D2.ShortMenuVanillaDatabase](https://github.com/krypto5863/COM3D2.ShortMenuVanillaDatabase)

- - - 
### <font color=green>ShortStartLoader</font>
*[ShortStartLoader]:游戏快速加载
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 另一个 COM3D2 加载插件，修复了 Kiss 的更多可怕代码。还有一些 .NET Framework 的东西。提高游戏加载速度。
  请记住，这不会解决您在开始游戏时遇到的巨大延迟，Kiss 蹩脚的代码仍然不受管理，这只会有所帮助，特别是当您有非常大的 mod 文件夹时。
</details>

版本：1.2
来源：[https://github.com/krypto5863/COM3D2.ShortStartLoader](https://github.com/krypto5863/COM3D2.ShortStartLoader)

- - - 

### <div align="right"><font color=red>Translation Plugins</font></div>
**<div align="right">翻译类插件</div>**

#### <span id="i18nex"><font color=red>i18nEx</font>
*[i18nEx]:加载已翻译文本的插件
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 这个插件可以抓取翻译文本与图片。
  它本身不能翻译，但可以将游戏内的文本与图片替换为翻译过的，从而实现翻译功能。
</details>

**警告**：<font color=red>可能会影响游戏性能（开启速度变慢）</font>
版本：1.5.1.0
来源：[https://github.com/ghorsington/COM3D2.i18nEx](https://github.com/ghorsington/COM3D2.i18nEx)

- - -

#### <font color=red>XUnity AutoTranslator</font>
*[XUnity AutoTranslator]:机翻插件
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 如果上面的 [i18nEx](#i18nex) 找不到翻译过的文本替换，那该怎么办呢？
  你可以用这个插件来获取机翻。总比看不懂的日语好吧？
</details>
<details>
<summary><b>注意</b></summary>

  > ● 需要联网才能实时翻译，需要申请翻译的 API。
  ● 需要将文本出现速度设置为最快，在文本逐字缓慢出现时会出问题。
  ● 从文本出现到翻译文本之间默认有 1 秒延迟。这是故意设置的延迟，以防被翻译软件认为是流量浪费，造成插件的翻译请求被禁止。 
  ● Resource Redirector 是 XUnity AutoTranslator 插件的必要组件，不要乱删！这是为了使数据能被 assetbundles 或资源文件加载。
</details>

**警告**：<font color=red>可能会影响游戏性能</font>
版本：5.3.0
来源：[https://github.com/bbepis/XUnity.AutoTranslator](https://github.com/bbepis/XUnity.AutoTranslator)

- - -

### <font color=green>TimeDependentPhysics</font>
*[TimeDependentPhysics]:修复人物骨骼插件
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 更改了 Jiggle Bones 的物理原理，使其独立于 COM3D2 的帧速率进行操作。
  低于和高于 60 fps 均适用。无需配置。
  该插件目前仅修复 Jiggle Bones。Yure 和 Skirt 骨骼尚未更改。
</details>

版本：1.0
来源：[https://github.com/luvoid/COM3D2.TimeDependentPhysics.Plugin](https://github.com/luvoid/COM3D2.TimeDependentPhysics.Plugin)

- - -
### <font color=green>UndressUtil</font>
*[UndressUtil]:脱衣插件
**(又名：Undress Utility)**
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 允许在剧情中、回忆模式、星探模式和客人模式下使用脱衣窗口。
  这 (几乎) 与舞蹈模式中用于脱衣的 UI 相同。
  还可以进行衣服半脱（类似于夜伽中掀起裙子）。
  VR 下可用。支持 CR 的男性身体脱衣。
  > [视频演示](https://i.gyazo.com/e72ee1a75a3486af8181aa3c9914d719.mp4)

</details>

**热键**：齿轮菜单（衬衫图标）
**配置按钮**：<font color=red>F1</font> [**<font color=DarkOrchid>(需要 <u>F1配置管理器</u>)</font>**](#f1menu)
版本：1.3.0.6
来源：[https://github.com/Vin-meido/COM3D2.UndressUtil](https://github.com/Vin-meido/COM3D2.UndressUtil)

- - -
## <div align="right"><font color=blue>Modding Extensioris</font></div>
**<div align="right">模组扩展</div>**
*[Modding Extensioris]:Mod 修改功能扩展

### <font color=red>ModLoader</font>
*[ModLoader]:原版 Mod 素材替换
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 不用解包封包，直接把素材放在 Mod 文件夹中就可以替换游戏原版素材。换句话说，此补丁模拟了 CM3D2 的 Sybaris 框架的 GameData 功能。
  **请注意此补丁并非使用 Mod 的必要补丁**，它仅在你需要覆盖游戏原版素材，添加.nei 文件或 asset_bg 之类的东西的时候才需要。
</details>

**警告**：<font color=red>显著降低游戏启动速度。</font>
版本：1.7.2
来源：[https://github.com/Neerhom/COM3D2.ModLoader](https://github.com/Neerhom/COM3D2.ModLoader)

- - -

### <font color=green>MaidLoader</font>
*[MaidLoader]:原版 Mod 素材替换
基本功能与 ModLoader 一致，多功能型的 ModLoader。

版本：1.4.4
来源：[https://github.com/Pain-Brioche/COM3D2.MaidLoader](https://github.com/Pain-Brioche/COM3D2.MaidLoader)

- - -
## <div align="right"><font color=blue>Patchers 补丁</font></div>

### <font color=green>AutoConverter</font>
*[AutoConverter]:使用 CM 时期的 mod 必须的补丁
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 自动将头发、脸部 mod 转化为符合 COM 要求的样式。
  没有它的情况下，使用 CM 时期的 mod 可能会报 “親が不正です” 等错误。
  （不支持 GP-01 的额外面部编辑）
</details>

<font color=red>CR-Edit 版本[^CR-Edit版本]可用</font>
版本：0.0.4.3
来源：[https://ux.getuploader.com/fumble_warez](https://ux.getuploader.com/fumble_warez)

- - -
### <font color=green>BodyCategoryAdd</font>
*[BodyCategoryAdd]:允许使用身体 mod
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 在女仆编辑界面添加 "身体” 选项，允许你使用默认身体以外的身体 mod，比如 LObody，RVbody 等。
</details>

版本：1.0.2
来源：[https://ux.getuploader.com/cm3d2_k](https://ux.getuploader.com/cm3d2_k)

- - -

### <font color=green>ExternalSaveData</font>
*[ExternalSaveData]:外部存档数据
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 本身不提供任何功能，但作为其他一些插件的前置组件存在。
  它允许你存储非标准的数据到存档文件中来保存其他插件的改动。
  比如常用的 F5 滑条扩展的改动。
</details>

<font color=red>CR-Edit 版本[^CR-Edit版本]可用</font>
版本：0.1.5
来源：[https://ux.getuploader.com/cm3d2_k/download/231](https://ux.getuploader.com/cm3d2_k/download/231)


- - -
### <font color=green>VibeYourMaid</font>
*[VibeYourMaid]:任意地方开始色色
**(又名：VYM)**
<details>
<summary><font color=CadetBlue>详情</font></summary>

  > 可以在夜伽以外的地方开始色色。
  可以让女仆根据兴奋度不同潮吹和漏尿。
  (你可以添加泌乳、榨乳和灌肠液 mod 进去)
  Nya’s 设置：https://drive.google.com/drive/folders/1g6OlkM4DeokbshiU4X7izK2ZdGfE3Xio
</details>
<details>
<summary><b>热键</b></summary><font size=2>

|按键|功能|按键|功能|按键|功能|
|:---:|:---:|:---:|:---:|:---:|:---:|
|I|启动/禁用 插件|O|显示 GUI|K|跳蛋弱震动|
|L|跳蛋强震动|J|跳蛋停止|P|改变女仆|
|N|切换男主|Num 1|第一人称视角|Num 2|锁定当前兴奋值|
|Num 3|锁定最大兴奋值|Num 4|切换自动模式|

</font>
</details>

**适用场景**：有女仆存在即可
<font color=red>CR-Edit 版本[^CR-Edit版本]不可用</font>
版本：2.0.5.2
来源：[https://ux.getuploader.com/com3d2_mod_kyouyu_d](https://ux.getuploader.com/com3d2_mod_kyouyu_d)

- - -


[^F1配置管理器]:F1配置管理器：[ConfigurationManager](#f1menu)
*[InOutAnimation]:暂时未做到
[^InOutAnimation]:InOutAnimation：暂时未做到
*[ColorPaletteHelper]:暂时未做到
[^ColorPaletteHelper]:ColorPaletteHelper：暂时未做到
*[NPRShader]:暂时未做到
[^NPRShader]:NPRShader：暂时未做到
*[CM3D2]:COM3D2 的前作
[^CM3D2]:**<font color=DarkOrchid>CM／CM3D2</font>**：COM3D2 的前作。
*[CR]:CR：[^CR-Edit版本]
*[CR-Edit 版本]:COM3D2.5／CR 版本／CR-Edit 版本
[^CR-Edit版本]:**<font color=DarkOrchid>COM3D2.5／CR 版本／CR-Edit 版本</font>**：使用CR-Edit的游戏版本。实现CR-Edit需要较多的变动，Kiss把COM拆成了两个版本。2.0(非CR-Edit)和2.5 (CR-Edit)。2.5也被称为3.0版本，因为这是代码中实际使用的版本。这个版本的游戏CMI暂时是支持的，但优先级非常的低。
*[MM]:暂时未做到
[^MM]:MM：暂时未做到
*[F7复数摄影]:暂时未做到
[^F7复数摄影]:F7复数摄影：暂时未做到
*[i18nEx]:暂时未做到
[^i18nEx]:i18nEx：暂时未做到
*[Unlock_all_skills]:Unlock All Skills(#unlockallskills)
[^Unlock_all_skills]:Unlock All Skills(#unlockallskills)
- - -




+COM3D2.API
删除 Error_texture_placeholder
?CM3D2.Toolkit.Guest4168Branch
安装 MaidVoicePitch（WideSlider）
安装 AddModsSlider
安装 DistortCorrect
安装 EyelashesAlpha
安装 SeparateEyeParams
安装 FaceType
删除 IMGUITranslationLoader
安装 NeighUncensor
安装 NTRLight
安装 RGBPalette

Unityinjector Plugins
安装 AlwaysColorChangeEX
安装 AutoEraseOutline
安装 CameraUtility
安装 ColorPaletteHelper
安装 ConsistentWindowPosition
安装 CustomNyou
删除 DanceCameraAdjust
安装 DressDamage
安装 EditMenuFilter
安装 EditMenuSelectedAnime
安装 EditSceneUndo
半安装 EmotionalEars
删除 Ahoge meshes
安装 Ear and tail meshes
删除 ExtendRenderingRange
安装 HalfUnDressing（Porori）
删除 InOutAnimation
安装 LookAtYourMaid
安装 LookAtYourMaster
删除 Mirror Props
删除 MTAccelerator
安装 NormalizeExcite
安装 NoteColor
安装 NPRShader（轻量化设定）
安装 ObjectExplorer
安装 PartsEdit（PE）
删除 PersonalizedEditSceneSettings
安装 PluginManager
删除 RhythmExtraOption
安装 PNGPlacement
安装 SceneCapture
  安装 Modified Pmats
  安装 VR Ini File
安装 Seieki
删除 ShaderChange
安装 ShapeAnimator
  安装 Standard SA
  删除 Doc's SA
安装 SKAccelerator
删除 SkillCommandShortCut
删除 SlimeShader
安装 TextureLoader
  安装 PosterLoader
安装 ToukaScreenShot
安装 VoiceNormalizer
安装 XTMasterSlave+（XTMS）
  安装 XTFutaBody
  安装 XTFutaAccessories
安装 YotogiUtil

Miscelleanous Files（其他文件）
安装 DLC Checker (Kry Fork)
安装 SybarisArcEditor
安装 Uncensored Vanilla Textures
删除 Male Penis Replacer（去码JJ替换）
删除 More Penis Variants（更多JJ模型）
安装 LoMobChara（LoMobBody）
