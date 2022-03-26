# Ab initio electronic structure calculations using a real-space Chebyshev-filtered subspace iteration method

1. KS-DFT requires Ab initio electronic structure calculation
2. Traditional SCF approach use iterative diagonalization ($O(n^3)$)
3. Chebyshev-filtered subspace iteration (CheFSI) and real space finite-difference formulation

## Introduction

Necessity:

1. In practice, a large-scale simulation of complicated  structures  (e.g .heterointerfaces,dislocations) modeled by a big unit cell containing thousands of atoms are required sometimes
2. For practical applications of DFT(structure relaxation and MD), KS-DFT need to be solved a huge amount of times
