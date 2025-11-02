(:1. Mostrar nombre del instituto:)

(:doc("ies.xml")//ies/nombre:)

(:2. Mostrar la web del instituto:)

(:doc("ies.xml")//ies/web:)

(:3. Mostrar los nombres de todos los ciclos:)

(:for $x in doc("ies.xml")//ciclo
return $x/nombre:)

(:4. Mostrar los identificadores (id) de todos los ciclos:)

(:for $x in doc("ies.xml")//ciclo
return data ($x/@id):)

(:5. Mostrar los ciclos de grado superior:)

(:for $x in doc("ies.xml")//ciclo
where $x/grado = "Superior"
return $x/nombre:)

(:6. Mostrar el nombre y el año del decreto de cada ciclo:)

(:for $x in doc ("ies.xml")//ciclo
return concat($x/nombre," - Año decreto: ", $x/decretoTitulo/@año):)

(:7. Crea un documento XML nuevo con nombre y año:)

(:<ciclosFormativos>
{
  for $x in doc("ies.xml")//ciclo
  return
    <ciclo>
      <nombre>{data($x/nombre)}</nombre>
      <grado>{data($x/grado)}</grado>
      <año>{data($x/decretoTitulo/@año)}</año>
    </ciclo>
}
</ciclosFormativos>:)

(:8. Mostrar los ciclos cuyo decreto sea anterior a 2010:)

(:for $x in doc("ies.xml")//ciclo
where $x/decretoTitulo/@año < 2010
return $x/nombre:)

(:9. Mostrar los ciclos ordenados por año de decreto:)

(:for $x in doc("ies.xml")//ciclo
order by $x/decretoTitulo/@año
return $x/nombre:)
