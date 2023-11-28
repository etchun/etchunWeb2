#### mark：media/img/docsify-plugin-flexible-alerts(2).png      <!-- {docsify-ignore-all} --> 
![](media/img/docsify-plugin-flexible-alerts(2).png "展示图")

#### mark：/media/img/docsify-plugin-flexible-alerts(2).png
![](/media/img/docsify-plugin-flexible-alerts(2).png "展示图")

#### mark：./media/img/docsify-plugin-flexible-alerts(2).png
![](./media/img/docsify-plugin-flexible-alerts(2).png "展示图")

#### mark：../media/img/docsify-plugin-flexible-alerts(2).png
![](../media/img/docsify-plugin-flexible-alerts(2).png "展示图")

#### mark：/../media/img/docsify-plugin-flexible-alerts(2).png
![](/../media/img/docsify-plugin-flexible-alerts(2).png "展示图")

#### mark：./../media/img/docsify-plugin-flexible-alerts(2).png
![](./../media/img/docsify-plugin-flexible-alerts(2).png "展示图")

#### mark：../../media/img/docsify-plugin-flexible-alerts(2).png
![](../../media/img/docsify-plugin-flexible-alerts(2).png "展示图")

#### imgsrc：media/img/docsify-plugin-flexible-alerts(2).png
  <img src="media/img/docsify-plugin-flexible-alerts(2).png" width="300px">

#### imgsrc：/media/img/docsify-plugin-flexible-alerts(2).png
  <img src="/media/img/docsify-plugin-flexible-alerts(2).png" width="300px">

#### imgsrc：./media/img/docsify-plugin-flexible-alerts(2).png
  <img src="./media/img/docsify-plugin-flexible-alerts(2).png" width="300px">

#### imgsrc：../media/img/docsify-plugin-flexible-alerts(2).png
  <img src="../media/img/docsify-plugin-flexible-alerts(2).png" width="300px">

#### imgsrc：/../media/img/docsify-plugin-flexible-alerts(2).png
  <img src="/../media/img/docsify-plugin-flexible-alerts(2).png" width="300px">

#### imgsrc：./../media/img/docsify-plugin-flexible-alerts(2).png
  <img src="./../media/img/docsify-plugin-flexible-alerts(2).png" width="300px">

#### imgsrc：../../media/img/docsify-plugin-flexible-alerts(2).png
  <img src="../../media/img/docsify-plugin-flexible-alerts(2).png" width="300px">

通过三种情况测试，  
一：Markdown Preview Enhanced（MPE）  
 > Markdown 语法的链接，能生效的有：  
 mark：/media/img/docsify-plugin-flexible-alerts(2).png  
 **mark：../../media/img/docsify-plugin-flexible-alerts(2).png**  

 > html 标签能生效的：  
 imgsrc：/media/img/docsify-plugin-flexible-alerts(2).png  
 imgsrc：../../media/img/docsify-plugin-flexible-alerts(2).png  

二：npm 挂载本地服务器测试  
 > Markdown 语法的链接，能生效的有：  
 **mark：../../media/img/docsify-plugin-flexible-alerts(2).png**  

 > 而 html 标签却所有都生效。  

三：部署在 GitHub page 上  
 > Markdown 语法的链接，能生效的有：  
 **mark：../../media/img/docsify-plugin-flexible-alerts(2).png**  

 > html 标签能生效的：  
 imgsrc：media/img/docsify-plugin-flexible-alerts(2).png  
 imgsrc：./media/img/docsify-plugin-flexible-alerts(2).png  

四：总结  
 Markdown 链接是**相对 .md 文件所在**位置，需要返回相应的文件夹，一个 “../” 返回一层。  
 <img src="./media/img/%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84.png" height="450">  
 如本例，【测试.md】在 sth 文件夹下，“../” 则返回到 md 文件夹；  
 “../../” 则返回 md 文件夹后，再次返回到 etchunWeb2 文件夹。  
 > 所以，“../../media/img/docsify-plugin-flexible-alerts(2).png” ；  
 等效于：“etchunWeb2/media/img/docsify-plugin-flexible-alerts(2).png”  

 imgsrc 链接则是**相对 .html 文件**所在位置，返回相应的文件夹，一个 “../” 返回一层。  
 如本例，index.html 位于 etchunWeb2 文件夹下。  
 所以，不需返回，可直接访问。  
 > “ ./media/img/docsify-plugin-flexible-alerts(2).png” 或   
 “media/img/docsify-plugin-flexible-alerts(2).png”   

!> **备注**  
**“./”** 或 **不加**：代表目前所在的目录；  
**“/”** 开头：代表根目录；  

**若 index2.html 中使用 imgsrc 链接访问**，则需要  
 > “../../media/img/docsify-plugin-flexible-alerts(2).png” 