userLayoutEffect 在浏览器重新绘制屏幕之前测量布局：

userLayoutEffect(()=>{
  //设置代码
  return ()=>{
    //清理代码
  }
}, 依赖项数组)

1. 当该组件被添加到页面（安装）时，设置代码 就会运行
2. 每次重新渲染 依赖项发生变化的组件 时：
   2.1 首先，清理代码 使用旧的 props 和 state 运行
   2.2 然后，设置代码 将使用新的 props 和 state 运行
3. 当该组件从页面中删除（卸载）后，清理代码 将最后允许一次

***有清理代码必须有设置代码，清理代码应该停止或撤销设置代码所做的任何操作


userLayoutEffect
无依赖项：先计算但不渲染，等待设置代码运行后再渲染
有依赖项：无清理代码：先计算但不渲染，等待设置代码运行后再渲染，
                    如果设置代码改变了依赖项，再渲染一次
         有清理代码：先计算但不渲染，等待设置代码运行后再渲染，
                    如果设置代码改变了依赖项，先使用旧的 props 和 state 运行清理代码，再使用新的 props 和 state 运行设置代码