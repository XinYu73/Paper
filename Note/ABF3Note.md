# $ABF_3$

## Run VASP

## Run UPPASD

1. posfile

   ```bash
   1 1 0.000000 0.000000 0.000000
   ```

   	- first entry : site number
   	- second entry: atom type
   	- third - fifth : positions of the atoms in the unit cell are given in basis vector coordinates

2. momfile

   ```bash
   1 1 2.2459 0.0 0.0 1.0
   ```

   	- first entry: site number
   	- second entry: chemical type
   	- third entry: magnitude of the magnetic moment in $\mu_B$
   	- forth - sixth entry: orientation

3. exchangefile

   ```bash
   1 1 -1 -1 -1 1.359407144 0.866
   ```

   	- The first two entries indicate the sites, which corresponds to the types that one whishes to map
    - third - fifth entries
      - maptype = 1: the vector is specified in carteisan coodinates.
      - maptype = 2:  the coordination vector is put in basis coordinates

## Analysis

### plot information with respect to $cos(2\theta)$, $\theta$ is the angle of A-F-B

```python
structure = []
structure.append(
    read("/work/home/xinyu/workplace/trifluoride/Data/data6/CoCo/AFM/CONTCAR",
         format="vasp"))
structure.append(
    read("/work/home/xinyu/workplace/trifluoride/Data/data6/FeFe/AFM/CONTCAR",
         format="vasp"))
# ! calculate angles of A-F-A
ase.io.vasp.write_vasp("POSCAR",
                       structure[0] * (1, 1, 2), 
                       direct=True,
                       sort=True)
structure.append(read("POSCAR", format="vasp"))
structure[2].get_scaled_positions()
structure[2].get_angle(1,6,2)  ## angles between 1,6,2
```

