import {ActionConfig} from "./index";
import {ACTION_SCENE, ACTION_TYPES} from "./@types";
import {PREDEFINED_ICON} from "../icons";

const version = '0.1.0'
const customAction:ActionConfig = {
    define:{
        name:'自定义脚本',
        icon: PREDEFINED_ICON.custom,
        version: version,
        scenes: [ACTION_SCENE.text],
        clickScript: `(function(API,e,config){console.log(API);})(API,e,config);`,
        formConfig:[{
            gridSize: 12,
            minRows: 12,
            name:'script',
            label: '脚本',
            type: 'textarea',
            rules:[{
                required: true,
                message:"请输入脚本"
            }]
        }],
        description:"运行任意自定义脚本",
        actionType: ACTION_TYPES.custom
    },
    initData:{
        shortcut:'',
        scene: ACTION_SCENE.all,
        customSetting:[{
            key:'script',
            value:'alert("运行自定义脚本")'
        }],
    },
}

export default customAction;