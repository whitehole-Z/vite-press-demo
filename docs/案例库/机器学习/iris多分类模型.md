**Iris 鸢尾花多分类模型示例**<br />Iris 鸢尾花数据集是一个经典数据集，数据集内包含 3 类共 150 条记录，每类各 50 个数据，每条记录都有 4 项特征：花萼长度、花萼宽度、花瓣长度、花瓣宽度，可以通过这4个特征预测鸢尾花卉属于(iris-setosa, iris-versicolour, iris-virginica)中的哪一品种。<br />**字段名说明：**

| 列名 | 说明 | 类型 |
| --- | --- | --- |
| sepal_length | 花萼长度 | float |
| sepal_width | 花萼宽度 | float |
| petal_length | 花瓣长度 | float |
| petal_width | 花瓣宽度 | float |
| species | 鸢尾花种类，Iris-setosa表示山鸢尾，iris-versicolour表示杂色鸢尾，iris-virginica表示维吉尼亚鸢尾。 | int |

**数据预览：**

| sepal_length | sepal_width | petal_length | petal_width | species |
| --- | --- | --- | --- | --- |
| 5.1 | 3.5 | 1.4 | 0.2 | Iris-setosa |
| 4.9 | 3 | 1.4 | 0.2 | Iris-setosa |
| 4.7 | 3.2 | 1.3 | 0.2 | Iris-setosa |
| 4.6 | 3.1 | 1.5 | 0.2 | Iris-setosa |
| 5 | 3.6 | 1.4 | 0.2 | Iris-setosa |


**模型训练到部署的流程图：**<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410964647-7eb01cd9-0a64-44bb-8228-61cbef2199b0.png#averageHue=%23000000&clientId=u5bf6953f-ae1c-4&from=paste&height=105&id=FPaSu&originHeight=157&originWidth=831&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=20911&status=done&style=none&taskId=u1bf8d760-3eb9-4431-9017-63677549dbd&title=&width=554)
<a name="ngrt5"></a>
### 新建项目
进入项目模块，点击“新建项目”，填入项目名称“鸢尾花Iris分类模型”，此模块提供数据集、训练实验、推理实验、模型、服务等的统一管理功能，还可以通过打包方式将项目分享给其他用户。<br />![1682411290507.png](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682411298146-7fcbcd4d-7ce1-4408-a938-ba51b1223b84.png#averageHue=%23a49885&clientId=u5bf6953f-ae1c-4&from=paste&height=216&id=u2ed4cb3f&originHeight=844&originWidth=1920&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=160338&status=done&style=none&taskId=u14d2035c-a0c2-4c31-973c-6fe081232d9&title=&width=491)
<a name="jGTWL"></a>
### 上传数据集
进入数据集模块，点击“添加数据集”，上传Iris 鸢尾花数据集离线文件，数据集文件可根据业务类型进行分类管理。<br />![1682411326159.png](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682411332186-43f09f35-6f4b-48c0-bc33-bb73568777bd.png#averageHue=%23b9a792&clientId=u5bf6953f-ae1c-4&from=paste&height=217&id=ucf91de67&originHeight=847&originWidth=1920&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=203137&status=done&style=none&taskId=u6fba19b3-b488-446c-89bf-31e4939a269&title=&width=493)
<a name="dk4CB"></a>
### 新建训练实验
进入训练实验模块，点击新建，创建“鸢尾花分类模型”训练实验。<br />![1682411364833.png](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682411369634-dfb7b372-6bc1-44c9-be83-6af45b991098.png#averageHue=%23b2b2b2&clientId=u5bf6953f-ae1c-4&from=paste&height=217&id=uf2292b3d&originHeight=846&originWidth=1920&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=236914&status=done&style=none&taskId=ufb9b287f-0ffb-4f19-b281-682caf9b76a&title=&width=493)<br />点击实验名称进入拖拽式实验界面，建模流程如下：<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682411240115-3d0b42bc-dd22-4814-adc0-dd6475943b89.png#averageHue=%23000000&clientId=u5bf6953f-ae1c-4&from=paste&height=38&id=uf038e214&originHeight=57&originWidth=800&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=7560&status=done&style=none&taskId=u6e6fa00f-be60-4d79-8935-632430c1a80&title=&width=533.3333333333334)
<a name="m0JSL"></a>
#### 读取数据
AI训练平台既支持用户本地上传数据文件，也具备HIVE读取、Oracle读取等多种数据获取方式。本实验拖入我的数据集中离线上传的数据作为拖拽实验中的数据源节点。<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410730165-ddc5d86c-818c-45ae-a07f-84ae674a4cd4.png#averageHue=%23f8f7f6&height=266&id=hUWRJ&originHeight=681&originWidth=1267&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=495)
<a name="Z4vFJ"></a>
#### 数据预处理
数据预处理算子包括过滤、数据操作、标准化及采样拆分，拖入需要的算子进行连线，双击可配置参数。本实验对数据进行了选择列及类型转换，将字符串类型的species特征转换为分类变量。<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410730740-88061ff6-e8ca-49f3-b724-e0534ba6c714.png#averageHue=%23f9f6f5&height=235&id=LNKXZ&originHeight=602&originWidth=1267&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=495)

<a name="Ybkyv"></a>
#### 特征工程
特征工程算子包括特征变换、特征重要度评估、特征选择，拖入需要的算子进行连线，双击可配置参数，本实验拖入随机森林特征重要度评估，可查看特征重要度排序。<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410731208-2198f743-6207-463e-b981-48d751919618.png#averageHue=%23f7f3f3&height=234&id=hr1zw&originHeight=602&originWidth=1267&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=492)

<a name="u16u6"></a>
####  建立模型
在机器学习模块中用户可选择所需要的算法，本实验选择决策树多分类模型及XGBoost多分类模型进行训练，双击算子右侧可配置模型超参数。<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410731841-66e79bf6-d3c0-4863-a086-827ea5e5016c.png#averageHue=%23f8f3f3&height=235&id=fxAiF&originHeight=603&originWidth=1267&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=494)
<a name="iJl7I"></a>
#### 预测
拖入预测算子，根据训练好的模型，预测测试集的类别或数值。<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410732401-37c5df6b-6516-4b11-b25a-5e2273f87ca7.png#averageHue=%23f8f6f5&height=235&id=dYZLi&originHeight=601&originWidth=1267&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=495)

<a name="I3BcJ"></a>
#### 评估
拖入评估算子，根据在测试集上的预测结果评估多分类模型。<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410732933-efbc27d7-6b13-4e67-bafb-dc92813aa04c.png#averageHue=%23f8f4f4&height=234&id=qdd71&originHeight=601&originWidth=1267&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=494)

启动流程完成后，点击综合评估可查看模型的准确率等评估指标。<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410733476-718f17df-6f41-4a61-a42a-e3828e217f6b.png#averageHue=%23f2f1f1&height=233&id=euiIU&originHeight=600&originWidth=1267&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=493)

<a name="gIa8T"></a>
### 保存模型
运行完成后，右键单击准确率最高的模型，选择保存模型。<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410733966-5b37aa8b-6022-4007-b4fa-6d280ca2852d.png#averageHue=%23f7f6f6&height=234&id=V7yRI&originHeight=602&originWidth=1267&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=493)<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410734889-31a47804-ffdb-4c9e-8a83-7e1f37dfd294.png#averageHue=%23fcfcfc&height=213&id=GOdmP&originHeight=431&originWidth=645&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=319)
<a name="hCFo0"></a>
### 新建推理实验
进入推理实验模块，点击新建，选择对应的“鸢尾花分类模型”训练实验创建推理实验。<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410735314-e4c8f44b-0ffa-473c-80be-9014033eb0df.png#averageHue=%23bcbcbc&height=263&id=H1HRO&originHeight=1021&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=495)<br />点击实验名称进入拖拽式实验界面，推理流程如下：<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682411478341-0e8d3d89-3ad2-4428-ae83-375a4192f5ee.png#averageHue=%23000000&clientId=u5bf6953f-ae1c-4&from=paste&height=42&id=u939c8716&originHeight=63&originWidth=831&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=9365&status=done&style=none&taskId=uacdfb2e3-30e2-4669-9d62-658c1609199&title=&width=554)<br />![e16b37bc741823e1d8409ec35bb35ba.jpg](https://cdn.nlark.com/yuque/0/2023/jpeg/28805806/1682668821981-e0e14165-1b30-4536-a22e-47bfe914801e.jpeg#clientId=ub667605f-3e53-4&from=paste&height=314&id=u931c0d17&originHeight=432&originWidth=668&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&size=26202&status=done&style=none&taskId=ufa126e07-13b0-4d66-9b0d-f680b793ff5&title=&width=485.8181818181818)<br />以训练实验创建的推理实验的算子化流程与训练实验流程保持一致，搭建推理实验时需根据模型对应的特征字段对预处理部分进行修改，以及根据推理流程进行修改。
<a name="dQcyN"></a>
#### 读取数据
接入用于推理的与模型特征列保持一致的数据。
<a name="DTJuq"></a>
#### 数据预处理
对用于推理的数据进行预处理，可点击画布右侧手型按钮，对不需要的实验算子进行批量框选，仅保留数据预处理部分，并根据需要进行相应调整。<br />![1682668599653.png](https://cdn.nlark.com/yuque/0/2023/png/28805806/1682668599236-1f028382-34f8-4d9e-9438-2341dd838668.png#clientId=ub667605f-3e53-4&from=paste&height=272&id=u7b1bb941&originHeight=275&originWidth=265&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&size=29165&status=done&style=none&taskId=u2eed3242-ee58-4003-bb58-9221245c435&title=&width=261.72727966308594)<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410738338-c68f2b1f-c017-4973-851c-a388cf16c277.png#averageHue=%23f7f7f6&height=264&id=F9EQR&originHeight=671&originWidth=1267&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=499)
<a name="qKZGk"></a>
#### 调用模型
在左侧菜单栏我的模型中拖入刚才训练好的鸢尾花分类模型。
<a name="fTErD"></a>
#### 预测
拖入预测算子，根据训练好的模型，预测类别或数值。

![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410738727-ca0ad33f-f236-4357-adb1-f4c2efe4137e.png#averageHue=%23f7f6f6&height=262&id=iQkYx&originHeight=1020&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=494)<br />配置好资源后启动训练。<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410739307-c2109f1a-9be3-44f5-8d3a-539f38faea10.png#averageHue=%23fcfcfb&height=260&id=Z18vR&originHeight=691&originWidth=924&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=348)
<a name="TxwYc"></a>
### 服务部署与镜像生成
进入服务界面，点击右上角模型部署，选择对应的项目、部署类型、算法类型、推理实验，填写好镜像名称即可部署。<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410739614-89d14b6b-dff3-4297-b179-356db0e52819.png#averageHue=%23f1f0f0&id=r4LZP&originHeight=60&originWidth=1268&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410740403-fd3532aa-8e97-43ee-948b-76be63e046d1.png#averageHue=%23d3c0a8&height=266&id=xeuYr&originHeight=1021&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=500)<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410741026-f6179b43-2345-427f-b251-2deb00152b93.png#averageHue=%23f6f6f5&height=56&id=k3Wfk&originHeight=126&originWidth=1512&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=674)<br />部署过程中生成的镜像在镜像模块中统一管理。<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410741701-b4d91191-7b3f-44a0-8e8a-2c9ad76e409a.png#averageHue=%23cec3b2&height=247&id=BGuzA&originHeight=533&originWidth=1269&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=587)
<a name="UdFST"></a>
#### 推送镜像
点击推送镜像，即可将镜像一键推送至九天平台，并且支持查看推送记录。<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410742276-2ef2febd-c965-4411-ad58-79dc86c8d4f3.png#averageHue=%23f4f3f3&height=72&id=GxlDH&originHeight=195&originWidth=1545&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=571)<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410742799-66c799d4-571c-4e13-837d-fb5f7c0613ca.png#averageHue=%23d2d2d2&height=187&id=EqXen&originHeight=523&originWidth=1268&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=454)
