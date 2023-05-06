**Titanic乘客生存二分类模型示例**<br />Titanic 数据集是一个经典数据集，数据集内包含 2 类共 892 条记录，其中死亡类目有549 个数据，生存类目有 342 个数据，每条记录都有 4 项特征：与乘客同在船上的父母/孩子数目，船舱的等级，乘客性别以及与乘客同在船上的兄弟姐妹/配偶数目，可以通过这 4 个特征预测乘客的生存情况（survived:1, dead:0）。<br />**字段名说明**：

| 列名 | 说明 | 类型 |
| --- | --- | --- |
| Parch | 与乘客同在船上的父母/孩子数目 | int |
| Pclass | 船舱的等级 | int |
| Sex | 乘客性别 | string |
| SibSp | 乘客同在船上的兄弟姐妹/配偶数目 | int |
| Survived | 乘客生存情况：1 表示生存；0 表示死亡 | int |

**数据预览：**

| Parch | Pclass | Sex | SibSp | Survived |
| --- | --- | --- | --- | --- |
| 0 | 3 | male | 1 | 0 |
| 0 | 1 | female | 1 | 1 |
| 0 | 3 | female | 0 | 1 |
| 0 | 1 | female | 1 | 1 |
| 0 | 3 | male | 0 | 0 |

**模型训练到部署的流程图**：<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410964647-7eb01cd9-0a64-44bb-8228-61cbef2199b0.png#from=url&height=105&id=sON23&originHeight=157&originWidth=831&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&status=done&style=none&title=&width=557.719970703125)

<a name="ptubi"></a>
### 新建项目
进入项目模块，点击“新建项目”，填入项目名称“titanic 乘客测试”，此模块提供数据集、训练实验、推理实验、模型、服务等的统一管理功能，还可以通过打包方式将项目分享给其他用户。<br />![](https://cdn.nlark.com/yuque/0/2023/jpeg/35770947/1682500794329-2eb2e47f-ab8d-4cbf-b522-95d32e021d87.jpeg#height=279&id=p4xqs&originHeight=1408&originWidth=2642&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=523.7099609375)
<a name="veJWB"></a>
### 上传数据集
进入数据集模块，点击“添加数据集”，上传 titanic 数据集离线文件，数据集文件可根据业务类型进行分类管理。<br />![](https://cdn.nlark.com/yuque/0/2023/jpeg/35770947/1682500794870-81044499-e91c-4d68-afd6-916a5d11a737.jpeg#height=282&id=gtkgB&originHeight=1382&originWidth=2630&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=535.719970703125)
<a name="Mnff2"></a>
### 新建训练实验
进入训练实验模块，点击新建，创建“titanic 乘客 test”训练实验。<br />![](https://cdn.nlark.com/yuque/0/2023/jpeg/35770947/1682500795468-dd12b0dc-61ee-4741-a363-5792185e3464.jpeg#height=282&id=aqvSI&originHeight=1184&originWidth=2348&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=559.7000122070312)<br />点击实验名称进入拖拽式实验界面，建模流程如下：<br />![](https://cdn.nlark.com/yuque/0/2023/jpeg/35770947/1682500795920-31a5abea-7d3d-4f03-af16-f90d5a1e10eb.jpeg#height=43&id=bu3VO&originHeight=112&originWidth=1528&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=588.7000122070312)
<a name="dIW11"></a>
#### 读取数据
AI 训练平台既支持用户本地上传数据文件，也具备 HIVE 读取、Oracle 读取等多种数据获取方式。本实验拖入我的数据集中离线上传的数据作为拖拽实验中的数据源节点。<br />![1.jpg](https://cdn.nlark.com/yuque/0/2023/jpeg/28805806/1682560894295-7d522c2c-72cd-43d2-bc29-495682e92251.jpeg#averageHue=%23f6f4f4&clientId=u2af5e3e9-b099-4&from=ui&height=242&id=uc624cab0&originHeight=1106&originWidth=2640&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&size=147612&status=done&style=none&taskId=u8b99d6b3-106e-437a-89fb-e19c8f9371a&title=&width=578.719970703125)
<a name="lUqwN"></a>
#### 数据预处理
数据预处理算子包括过滤、数据操作、标准化及采样拆分，拖入需要的算子进行连线，双击可配置参数。本实验对数据进行了选择列及类型转换，将字符串类型的Survived 特征转换为分类变量。<br />![1.jpg](https://cdn.nlark.com/yuque/0/2023/jpeg/28805806/1682561145408-822f14fe-9960-4ce6-a142-cf3179e19ab2.jpeg#clientId=u2af5e3e9-b099-4&from=ui&height=244&id=ue4701c5c&originHeight=1102&originWidth=2628&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&size=158283&status=done&style=none&taskId=u1b14744e-841b-4e0c-97d0-8a4a11a6a98&title=&width=581.7000122070312)
<a name="tYq5f"></a>
#### 特征工程
特征工程算子包括特征变换、特征重要度评估、特征选择，拖入需要的算子进行连线，双击可配置参数，本实验拖入随机森林特征重要度评估和线性特征重要性评估，可查看特征重要度排序。<br />![1.jpg](https://cdn.nlark.com/yuque/0/2023/jpeg/28805806/1682561290780-a85933d0-49a3-4b91-b963-4bbe29426db3.jpeg#averageHue=%23f5f1f0&clientId=u2af5e3e9-b099-4&from=ui&height=249&id=ue1fa7d23&originHeight=1080&originWidth=2616&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&size=195557&status=done&style=none&taskId=u93867e8e-2c3c-435b-816e-cbfd4a32669&title=&width=603.719970703125)

<a name="bdfHw"></a>
#### 建立模型
在机器学习模块中用户可选择所需要的算法，本实验选择随机森林二分类模型及神经网络二分类模型进行训练，双击算子右侧可配置模型超参数。<br />![1.jpg](https://cdn.nlark.com/yuque/0/2023/jpeg/28805806/1682567017375-c71fda53-5dbb-4105-a8a1-964912786f52.jpeg#averageHue=%23f4f0f0&clientId=u2af5e3e9-b099-4&from=ui&height=314&id=u2efeedad&originHeight=1354&originWidth=2634&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&size=250786&status=done&style=none&taskId=ubac96231-6bcd-4a9c-a543-8f16ea65f96&title=&width=611.7099609375)
<a name="jHpkG"></a>
#### 预测
拖入预测算子，根据训练好的模型，预测测试集的类别或数值。

![1.jpg](https://cdn.nlark.com/yuque/0/2023/jpeg/28805806/1682567182096-7e7eeba7-6362-46b3-a7c2-4e34f87ef058.jpeg#averageHue=%23f4f2f2&clientId=u2af5e3e9-b099-4&from=ui&height=305&id=uc0ec88c3&originHeight=1306&originWidth=2624&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&size=215595&status=done&style=none&taskId=uf1601c6a-ca47-4fc1-a561-6dfe97196a1&title=&width=613.7000122070312)
<a name="LDXDa"></a>
#### 评估
拖入评估算子，根据在测试集上的预测结果评估二分类模型。

![1.jpg](https://cdn.nlark.com/yuque/0/2023/jpeg/28805806/1682567309373-d8a46f56-96e4-4953-a272-02803f9d6126.jpeg#averageHue=%23f4f3f2&clientId=u2af5e3e9-b099-4&from=ui&height=324&id=ucadafb9f&originHeight=1368&originWidth=2624&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&size=223681&status=done&style=none&taskId=ub0e9e25a-f785-45b5-ad98-1fcb508f257&title=&width=620.719970703125)<br />启动流程完成后，点击综合评估可查看模型的准确率等评估指标。

![](https://cdn.nlark.com/yuque/0/2023/jpeg/35770947/1682500800850-11d670ca-97e8-45b1-ac9e-ecb03e874f2b.jpeg#averageHue=%23f9f9f9&height=390&id=EhUR6&originHeight=1482&originWidth=2340&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=615.7099609375)
<a name="pPIjM"></a>
### 保存模型
右键单击准确率最高的模型，选择保存模型。<br />![1682662917857.png](https://cdn.nlark.com/yuque/0/2023/png/28805806/1682662941928-a6ddb57a-cf63-4970-b20f-857952c684c8.png#clientId=ucb1af59d-82ca-4&from=paste&height=310&id=ud5a17c80&originHeight=485&originWidth=725&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&size=14561&status=done&style=none&taskId=u22a06888-a1e1-4772-8b7e-92cfb9e38c9&title=&width=464)<br />![](https://cdn.nlark.com/yuque/0/2023/jpeg/35770947/1682500801806-794b47f8-8453-4a0d-b138-de17c4c0e0d9.jpeg#averageHue=%23f4f4f4&height=284&id=dqAOy&originHeight=1250&originWidth=2622&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=596.719970703125)
<a name="hCFo0"></a>
### 新建推理实验
进入推理实验模块，点击新建，选择对应的“titanic乘客随机森林模型”训练实验创建推理实验。<br />![1682666735374.png](https://cdn.nlark.com/yuque/0/2023/png/28805806/1682666733663-2be712ce-b9b8-48b4-ae42-47269c8d68e4.png#averageHue=%23adadad&clientId=ucb1af59d-82ca-4&from=paste&height=357&id=u0f748b42&originHeight=892&originWidth=1849&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&size=98845&status=done&style=none&taskId=u78ed7798-fd9f-4bdc-a7cc-f7c0f730956&title=&width=739.6)<br />点击实验名称进入拖拽式实验界面，推理流程如下：<br />                        ![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682411478341-0e8d3d89-3ad2-4428-ae83-375a4192f5ee.png#averageHue=%23000000&from=url&height=37&id=dB7IG&originHeight=63&originWidth=831&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&status=done&style=none&title=&width=488.71875)<br />![1682666771620.png](https://cdn.nlark.com/yuque/0/2023/png/28805806/1682666770452-414633ef-ae19-4e76-9ece-31c5a3c9dfe1.png#averageHue=%23fbfafa&clientId=ucb1af59d-82ca-4&from=paste&height=239&id=uf7b72c4b&originHeight=597&originWidth=674&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&size=33905&status=done&style=none&taskId=ub7742508-cf9c-4b78-9de3-0b4523aea1e&title=&width=269.6)<br />以训练实验创建的推理实验的算子化流程与训练实验流程保持一致，搭建推理实验时需根据模型对应的特征字段对预处理部分进行修改，以及根据推理流程进行修改。
<a name="dQcyN"></a>
#### 读取数据
接入用于推理的与模型特征列保持一致的数据。
<a name="DTJuq"></a>
#### 数据预处理
对用于推理的数据进行预处理，可点击画布右侧手型按钮，对不需要的实验算子进行批量框选，仅保留数据预处理部分，并根据需要进行相应调整。<br />![1682666837235.png](https://cdn.nlark.com/yuque/0/2023/png/28805806/1682666836664-6b70fa19-c201-4bac-9370-60a3c3452d5e.png#averageHue=%23f7f7f6&clientId=ucb1af59d-82ca-4&from=paste&height=357&id=u806e5c0b&originHeight=892&originWidth=1849&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&size=97790&status=done&style=none&taskId=u3d988f41-17f6-4af4-a9f0-168bef8bb2c&title=&width=739.6)<br />![1682664071944.png](https://cdn.nlark.com/yuque/0/2023/png/28805806/1682664071806-90d90d49-eb00-47e7-9012-f9caf50bee24.png#clientId=ucb1af59d-82ca-4&from=paste&height=571&id=uc3227174&originHeight=892&originWidth=1849&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&size=82034&status=done&style=none&taskId=u1768e46d-2588-42c0-a3d9-4c530e58870&title=&width=1183.36)
<a name="qKZGk"></a>
#### 调用模型
在左侧菜单栏我的模型中拖入刚才训练好的titanic乘客随机森林模型。
<a name="fTErD"></a>
#### 预测
拖入预测算子，根据训练好的模型，预测类别或数值。<br />![1682664388587.png](https://cdn.nlark.com/yuque/0/2023/png/28805806/1682664389037-a3702a10-cee4-498e-8108-2ed3fae4aabc.png#clientId=ucb1af59d-82ca-4&from=paste&height=571&id=uc6f6a959&originHeight=892&originWidth=1849&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&size=99912&status=done&style=none&taskId=u2425a954-960d-4ad4-ade9-d68c7fd70e0&title=&width=1183.36)<br />配置好资源后启动训练。<br />![1682664422354.png](https://cdn.nlark.com/yuque/0/2023/png/28805806/1682664424740-13b77e80-9e73-4fe5-a7c2-9ff5596b3b8d.png#clientId=ucb1af59d-82ca-4&from=paste&height=571&id=u73960a3a&originHeight=892&originWidth=1849&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&size=115040&status=done&style=none&taskId=ua16f48dd-f1e9-4b87-82e5-1c31731d2f7&title=&width=1183.36)
<a name="TxwYc"></a>
### 服务部署与镜像生成
进入服务界面，点击右上角模型部署，选择对应的项目、部署类型、算法类型、推理实验，填写好镜像名称即可部署。<br />![](https://cdn.nlark.com/yuque/0/2023/png/35770947/1682410739614-89d14b6b-dff3-4297-b179-356db0e52819.png?x-oss-process=image%2Fresize%2Cw_1171%2Climit_0#from=url&id=PGJC0&originHeight=55&originWidth=1171&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&status=done&style=none&title=)<br />![1682665236161.png](https://cdn.nlark.com/yuque/0/2023/png/28805806/1682665234402-7a954b68-1f1f-4e45-b934-a3dfcae0b749.png#clientId=ucb1af59d-82ca-4&from=paste&height=357&id=u4a081c7e&originHeight=892&originWidth=1849&originalType=binary&ratio=1.5625&rotation=0&showTitle=false&size=58706&status=done&style=none&taskId=uc7e834c1-8a5d-48bf-b65d-8fc016bb714&title=&width=739.6)
