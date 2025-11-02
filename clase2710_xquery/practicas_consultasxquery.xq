(:1. Mostrar todos los títulos de los cd:)

(:for $x in doc ("coleccion.xml")//cd
return $x/titulo:)

(:2. Mostrar todos los artistas:)

(:for $x in doc ("coleccion.xml")//cd
return $x/artista:)

(:3. Mostrar titulo y artista juntos:)

(:for $x in doc ("coleccion.xml")//cd
return concat($x/titulo," - ", $x/artista):)

(:4. Mostrar solo el titulo del primer cd:)

(:doc("coleccion.xml")//cd[1]/titulo:)

(:5. Mostrar cd cuyo artista sea "Bob Dylan":)

(:for $x in doc ("coleccion.xml")//cd
where $x/artista = "Bob Dylan"
return $x/titulo:)

(:6. Mostrar todos los titulos ordenados alfabéticamente:)

(:for $x in doc ("coleccion.xml")//cd
order by $x/titulo
return $x/titulo:)

(:7. Crear una nueva estructura XML con titulo y artista:)

(:<catalogo>
{
  for $x in doc("coleccion.xml")//cd
  return
    <disco>
       <nombre>{data($x/titulo)}</nombre> 
       <cantante>{data($x/artista)}</cantante>
     </disco>
  
}
</catalogo>:)

(:8. Mostrar cuantos cd hay en total:)

(:count(doc("coleccion.xml")//cd):)

(:9. Mostrar el título del último cd:)

(:let $x := doc("coleccion.xml")//cd
return $x[last()]/titulo:)

(:10. Mostrar los titulos que contengan la palabra heart:)

(:for $x in doc("coleccion.xml")//cd
where contains (lower-case($x/titulo), "heart")
return $x/titulo:)



