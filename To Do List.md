# To Do List

## OFDFT Benchmark

- MD simulation
- Read *Understanding molecular simulation : from algorithms to applications*
- Write a little MC program
  - Case Study 1 (Equation of State of the Lennard-Jones Fluid)
    - read [eos_lj](https://github.com/Allen-Tildesley/examples/blob/master/python_examples/eos_lj.py)


## $ABF_3$

### Fe Co Mo V Cr

#### VASP structural relaxation

- find a better way to do mirror image
- for compond like $ABF_3$, we build one from AFM Structure of $AF_3$ and $BF_3$ and one from FM structure of $AF_3$ and $BF_3$. When the calculations are done we got two types of AFM structure of $ABF_3$ and two types of FM structure of $ABF_3$, we need to compare the fingerprint of those with same magnetic configuration.

#### $T_c$ calculation

- Understand the method to calculate Tc of AFM structure
- Run Calculation of FM structure, at present, the structure is VF3, with a low Tc
- run $FeF_3$ 's  $T_c$ in FM configuration
- test if the amount $J_{ij}$  affect $T_C$ Calaulation 
- run UPPASD in parallel style.

## Calypso

- Understand the background method of generate structure according to space group
- Understand the idea of Fingerprint
- Random seed implement 
  - why the number in python is different in fortran code 
    - *size of array*

  - unittest


## Flip

### other channel

- channels : depolarizing,  bit flip, bit phase flip, phase flip
- robustness measurement: Negativity, Concurrence
- initial Entanglement: Negativity, Concurrence

## Else

- sum up problems and gains
