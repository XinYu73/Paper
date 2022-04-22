# ATLAS测试相关

## EOS测试

### Equation of State

pymatgen 和 ASE 均有 EOS的模块
[PymatgenVersion](https://github.com/materialsproject/pymatgen/blob/v2022.4.19/pymatgen/analysis/eos.py#L315-L326),
[ASEVersion](https://gitlab.com/ase/ase/-/blob/master/ase/eos.py)

有许多可以选用的状态方程，我们用到的应该Birch–Murnaghan equation，当得到DFT计算的能量和体积就可以拟合相应的参数得到体积模量用于和实验的对比

#### Birch–Murnaghan equation of state

1. 源于自由能

    $f=\frac{1}{2}\left[\left(\frac{V}{V_{0}}\right)^{-\frac{2}{3}}-1\right]$
2. 三阶级数展开得

    $P(V)=\frac{3 B_{0}}{2}\left[\left(\frac{V_{0}}{V}\right)^{\frac{7}{3}}-\left(\frac{V_{0}}{V}\right)^{\frac{5}{3}}\right]\left\{1+\frac{3}{4}\left(B_{0}^{\prime}-4\right)\left[\left(\frac{V_{0}}{V}\right)^{\frac{2}{3}}-1\right]\right\}$

    $B_0$bulk modulus ,$B_0^{\prime}$the derivative of the bulk modulus with respect to pressure
3. 三阶展开做积分得到Birch–Murnaghan equation of state

   $$E(V)=E_{0}+\frac{9 V_{0} B_{0}}{16}\left\{\left[\left(\frac{V_{0}}{V}\right)^{\frac{2}{3}}-1\right]^{3} B_{0}^{\prime}+\left[\left(\frac{V_{0}}{V}\right)^{\frac{2}{3}}-1\right]^{2}\left[6-4\left(\frac{V_{0}}{V}\right)^{\frac{2}{3}}\right]\right\}$$
