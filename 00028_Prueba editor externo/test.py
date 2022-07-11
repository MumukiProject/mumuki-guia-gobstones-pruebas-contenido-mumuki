import pandas as pd
from io import StringIO

class Test(unittest.TestCase):
  def setUp(self):
    csv = StringIO('''
    DIRECCION,PROPIEDADS,PRECIOUSD,PRECIOPESO,DOLARM2,PESOSM2,COTIZACION,TRIMESTRE_,BARRIO,COMUNA_
Senillosa 1941,314,360000,25020000,1146,79682,70,SEGUNDO,PARQUE CHACABUCO,7
Moliere,225,280000,18816000,1244,83627,67,SEGUNDO,VILLA REAL,10
Esteban A Gascon,553,850000,59075000,1537,106826,70,SEGUNDO,ALMAGRO,5
"AV. Alberdi, Juan Bautista",256,870000,58464000,3398,228375,67,SEGUNDO,FLORES NORTE,7
LAFERRERE GREGORIO,462,250000,16000000,541,34632,64,SEGUNDO,FLORES SUR,7
Constituyentes,752,820000,52480000,1090,69787,64,SEGUNDO,VILLA URQUIZA,12
Plaza 800,142,345000,22080000,2430,155493,64,SEGUNDO,VILLA ORTUZAR,15
    ''')
    self.tabla = pd.read_csv(csv)    

  def test_debe_devolver_3_elementos(self):
    resultado = terrenos_por_barrio(self.tabla)
    self.assertEquals(len(resultado), 3)
  
  def test_debe_devolver_un_dataframe(self):
    resultado = terrenos_por_barrio(self.tabla)
    self.assertEquals(type(resultado), pd.DataFrame)
        

  def test_debe_tener_dos_columnas_barrio_y_cantidad(self):
    resultado = terrenos_por_barrio(self.tabla)
    self.assertEquals(resultado.columns, ["barrio", "cantidad"])        
