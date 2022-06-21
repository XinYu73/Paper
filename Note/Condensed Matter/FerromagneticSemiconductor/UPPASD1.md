# A method for atomistic spin dynamics simulations: implementation and examples

## Introduction

- Born-Oppenheimer like approximation: atomistic spin slow, electronic motion fast

## Equations of motion

### Slow variables

$$
\begin{aligned}
\frac{\partial \hat{\mathbf{S}}}{\partial t}&=\frac{1}{\mathrm{i} \hbar}\left[\hat{\mathbf{S}}, \mathscr{H}_{\mathrm{KS}}\right]\\
\end{aligned}
$$

$$
\frac{\partial \mathbf{S}_{i}}{\partial t}(t)=-\gamma \mathbf{S}_{i}(t) \times \mathbf{B}_{i}
$$

