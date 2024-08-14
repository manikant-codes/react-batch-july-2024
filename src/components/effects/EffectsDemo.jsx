import React, { useEffect, useState } from "react";

function EffectsDemo() {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scroll]);

  console.log(scroll);

  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta corporis
      sunt repellendus nulla rerum numquam, ab perspiciatis consectetur eaque
      atque non, a sapiente illo, necessitatibus perferendis. Neque repellendus
      velit corrupti soluta enim in. Consequatur expedita molestias excepturi
      porro ratione cupiditate quos aspernatur repudiandae officia deleniti
      totam pariatur, quam, est, eveniet eos consequuntur? Cumque recusandae
      quae laudantium ratione ad, blanditiis sit impedit deleniti temporibus
      soluta reprehenderit fugit deserunt laborum aut nisi aperiam? Est, cum?
      Corrupti quam unde, sapiente a commodi hic sed nobis est cum quis
      repudiandae sequi placeat iure pariatur aut quaerat? Facere at praesentium
      velit! Neque enim est repellendus modi porro nobis corrupti. Voluptatem
      autem quae blanditiis laudantium ab accusamus cupiditate alias nulla
      incidunt quidem qui illum voluptate repellendus quod provident dolores, id
      sed assumenda eveniet. Nihil sit quasi ea totam. Aut itaque quasi numquam
      sit commodi delectus, provident quaerat? Sequi molestias officia nisi
      voluptatum laboriosam quae officiis exercitationem temporibus ex
      consequatur soluta amet omnis quos doloribus animi deleniti ipsa, sint sit
      voluptates, culpa laborum esse quas ad consequuntur! Quia quo ab iure
      numquam illum! Quia est illo esse dolorum laudantium saepe molestiae
      tempora omnis sint vero magni, labore itaque deleniti! Nihil quidem esse
      voluptatibus eaque voluptatem incidunt necessitatibus, eum quaerat
      inventore ullam, quam exercitationem veniam. Rerum dolor, hic quas sequi
      optio est doloribus. Aspernatur maiores excepturi quod cumque. Asperiores
      reiciendis sit necessitatibus ipsam sed, debitis deleniti voluptatem
      labore accusantium. Quae aliquam cum perspiciatis, placeat animi sint
      deleniti veniam distinctio, fugiat ex exercitationem voluptas? Error rerum
      ex vitae, pariatur corrupti dolor libero debitis fugit! Atque, nostrum
      voluptatum. Deleniti vero ipsa officiis qui fuga, dolore asperiores modi,
      numquam facilis voluptatibus quasi placeat non eligendi veritatis eius
      nisi nesciunt error soluta. Quas excepturi delectus nisi tempora ad error,
      voluptatum libero eum id? Praesentium voluptate ducimus dolor consequuntur
      id. Error facilis corporis molestias quibusdam illo voluptatibus quod
      asperiores facere voluptate ipsum nemo, repudiandae ipsam reprehenderit
      officiis blanditiis aut architecto ab quia reiciendis suscipit autem odio
      dicta nisi placeat. Saepe ipsa repellat reprehenderit voluptate doloremque
      vel quos illo. A adipisci, praesentium cupiditate reiciendis
      exercitationem non ut ex sapiente molestias temporibus illum culpa
      inventore ab tempora reprehenderit nobis officia maiores. Dolor magnam
      facere quasi deserunt adipisci labore, corporis eum consequuntur repellat
      quo vitae quos accusamus voluptatibus porro cumque, sint quisquam tempora
      blanditiis numquam? Esse libero veritatis aut nisi deserunt ducimus
      officia delectus dolor perferendis, consequatur placeat sequi obcaecati!
      Necessitatibus, ipsum! Accusantium quis, placeat, deleniti nesciunt
      expedita fugit aliquam voluptatibus fugiat pariatur impedit aliquid
      obcaecati reiciendis esse sit qui delectus dolor! Est voluptatibus aliquam
      iste architecto blanditiis, odit nulla. Quidem, cupiditate iusto nesciunt
      recusandae optio facilis nemo! Veritatis reiciendis ipsum cupiditate ab
      omnis amet impedit ex ea saepe, delectus repellat laudantium dignissimos
      quaerat temporibus maiores placeat enim accusamus perspiciatis! Vitae
      consectetur assumenda culpa minus, corporis totam facere quam ipsam
      necessitatibus fuga iure, rerum maiores vero quaerat ab repellendus,
      adipisci suscipit voluptate fugiat quasi veritatis? Sit porro sint,
      laudantium fuga culpa fugit natus ut, at facere necessitatibus suscipit
      dignissimos facilis. Placeat excepturi consequuntur possimus, autem
      deserunt quam, esse culpa repellendus quisquam fuga reprehenderit ullam
      omnis reiciendis aliquam ab harum cum nostrum nesciunt fugiat vero fugit
      dolorem ipsam unde. Quisquam adipisci iure omnis odit facere animi.
      Impedit quaerat illo suscipit at harum, eos voluptatem tenetur fuga quos
      repellat atque facere perspiciatis nostrum mollitia velit in assumenda
      amet tempora numquam, quis a consectetur ipsa. Perferendis eos asperiores
      earum facere pariatur fugit neque quam, alias officia quia quisquam ab.
      Odit totam, quo deleniti sed provident iure enim! Exercitationem autem
      iure pariatur debitis id, dolorum voluptas, doloremque similique magnam
      eum assumenda. Laboriosam nam vero sunt sequi perspiciatis ab, asperiores
      incidunt libero, assumenda dolorem reiciendis, deleniti voluptates
      sapiente unde sit? Deserunt laborum minus culpa recusandae nemo! Impedit
      quae possimus expedita eius illo voluptas assumenda autem dolorem
      eligendi, vero commodi rerum, modi temporibus quaerat consectetur soluta,
      tempore corrupti debitis consequatur! Accusantium reprehenderit ut error
      praesentium accusamus eos iure iusto voluptatibus dolorum quia minima
      atque soluta rerum vitae quas, neque repellendus pariatur rem quod
      possimus. Nostrum similique molestiae at qui neque natus vel est deserunt
      maiores labore dignissimos ut consectetur nisi ad aliquam laborum aperiam
      ullam maxime sed earum ducimus, error, esse ea commodi. Error perferendis
      dignissimos voluptas facere odio cum atque, beatae dolores, cupiditate
      culpa doloribus amet necessitatibus facilis vitae explicabo est vero
      tempora adipisci dolore nostrum. Iusto amet temporibus nemo quia
      aspernatur placeat sunt, accusantium fuga eum saepe sed eos facilis enim
      laboriosam ex possimus praesentium optio modi magnam! A ipsum aut tempora,
      ad inventore nisi repudiandae voluptate consequatur nulla ex sapiente
      soluta blanditiis ducimus recusandae quibusdam sequi nam cumque eos
      quaerat illo obcaecati in. Magnam illo earum sit, sapiente distinctio
      doloremque tempore! Corporis veritatis rerum, quos commodi, ipsam
      dignissimos maiores alias odio ullam, aliquam cupiditate corrupti iure
      amet. Totam quisquam dicta esse temporibus quidem, dolores numquam placeat
      minima distinctio magnam? Consequuntur accusamus ut doloribus asperiores
      quas laboriosam quasi, sunt laborum iste, inventore voluptas maxime
      aspernatur cumque commodi temporibus iusto quibusdam autem? Recusandae
      magni soluta ducimus fugit tenetur assumenda, aut omnis voluptatum libero
      veniam praesentium laborum atque consequuntur nihil ipsum quo molestiae
      tempora voluptates dignissimos similique ullam. Nulla incidunt sed,
      voluptates veritatis ex odit beatae. Totam deleniti, cupiditate, aliquid
      ipsum repellendus dolore nulla suscipit vel pariatur ducimus hic
      voluptatibus enim a corrupti. Explicabo quisquam voluptatem facilis
      tenetur sed architecto, iste non ducimus dolorum nesciunt aut consectetur
      dicta doloremque expedita ipsa tempora odit adipisci, accusantium
      veritatis quae? Reprehenderit, sit quod debitis ullam facere possimus
      dicta natus earum ab modi nihil saepe, expedita velit sed. Eos repudiandae
      expedita, aliquam exercitationem tempore et hic sed fugiat ab culpa nulla
      excepturi autem aspernatur molestias accusantium harum quos numquam vero
      aut. Quaerat, optio repellendus accusantium voluptatem ipsum aperiam
      voluptates atque esse illo iure quasi minus ipsa sint distinctio porro,
      sequi fugit assumenda! Expedita deserunt at officiis cumque similique iure
      veritatis alias porro ipsa error, consectetur voluptate explicabo quas
      sequi. Sunt odio cupiditate quam harum ipsa optio non veritatis deleniti
      dolorum rem explicabo omnis temporibus maiores ullam repellat officia,
      dicta, sequi inventore? Asperiores soluta nisi dignissimos maxime velit,
      pariatur quasi quam sint, accusamus debitis praesentium. Reiciendis
      exercitationem ut nobis cumque fugiat rerum id dolorum repellendus ea?
      Provident deleniti iste, quis vel quae voluptates porro animi non
      distinctio odio. Nemo voluptate enim a neque possimus omnis quis
      blanditiis nam molestias veniam ut nisi dolores praesentium harum, dolor
      soluta facilis aperiam earum totam reprehenderit, consequuntur debitis
      nobis. Ab sequi, inventore, excepturi hic dignissimos iusto error
      explicabo commodi quibusdam itaque aliquid, adipisci ipsum. Ut dolore vero
      error laudantium officiis voluptas amet consectetur sapiente!
      Consequuntur, consequatur ea impedit tempora inventore iure ad modi nemo.
      Quidem eius dolor temporibus cumque rem, assumenda ea architecto sit,
      iusto facilis labore asperiores perspiciatis vel blanditiis laborum
      deleniti delectus, ut ab harum? Saepe dolor non, consectetur magni impedit
      neque? Expedita, recusandae totam odio sunt in hic culpa maxime incidunt
      ipsa dicta aliquam perferendis excepturi architecto, maiores nesciunt
      molestias? Est dolore, totam repudiandae sed facere necessitatibus! Ipsum
      impedit rem ullam dolorem laboriosam corporis ratione, placeat porro earum
      minima! Eaque reprehenderit exercitationem totam explicabo, ea quidem!
      Eos, voluptates exercitationem nemo, officiis numquam labore aliquid ea
      cupiditate iure quas at asperiores ipsam, officia molestiae minus
      consequuntur ducimus fugit dolores eveniet rerum dicta? Quae, laudantium
      minus. Iusto placeat inventore repellat enim odio ratione illo explicabo
      itaque, fuga minus nihil voluptatum magni corrupti incidunt minima quasi
      expedita et pariatur ipsam suscipit voluptates officia. Repudiandae
      commodi facilis eos enim maiores odit a excepturi tempore, corporis
      expedita! Cupiditate, deserunt possimus laudantium explicabo totam magnam
      veniam id consectetur aperiam corporis nostrum aliquid porro itaque cum
      repudiandae ratione excepturi odio? Ea quaerat odit error, perspiciatis
      pariatur fugiat iure maxime soluta est, laboriosam dolore nesciunt
      expedita cupiditate repellat debitis dicta? Dolor odio cupiditate saepe
      architecto consequuntur nam possimus tenetur quia omnis nostrum ullam cum
      provident animi doloremque aut vel fugiat harum iusto, soluta, est
      laudantium iure atque? Odio aliquam sed, labore ex deserunt consectetur a
      eligendi quas est. Maxime dolore quis explicabo et incidunt impedit
      facere, temporibus inventore aspernatur eos suscipit, sapiente rem nulla?
      Nisi modi dolor libero nulla doloribus totam fugit reprehenderit esse
      voluptates voluptatem obcaecati, nobis tempore! Accusantium, velit?
      Officia autem tempore ipsum facilis neque doloremque non rerum ut
      exercitationem labore eum, ratione ullam deserunt magnam ea illum fugiat!
      Eum porro ratione sunt quas doloribus, excepturi dolores error placeat.
      Fugit, id. Saepe harum rerum illum sunt iusto fugit cumque eaque
      consequatur quam porro ab libero molestias, pariatur veniam quo
      necessitatibus vero, magnam tempore laudantium? Non praesentium placeat
      aspernatur, mollitia expedita unde molestiae consectetur dolorum porro
      animi voluptates, aperiam quasi illo. Sint aspernatur quam mollitia,
      maxime dignissimos omnis optio quo esse quibusdam expedita quia,
      consectetur eaque temporibus aliquam exercitationem, adipisci suscipit!
      Commodi ea aut nulla hic sed cumque nam deleniti, quae eveniet. Excepturi
      molestiae dolores reiciendis et modi incidunt, adipisci explicabo
      voluptate quidem consequuntur, magnam repellendus delectus, aut provident
      consequatur optio. Voluptatem perspiciatis sunt iure illum? Quos,
      quibusdam corrupti tenetur alias eaque, dolorum facere perferendis animi
      id sed quasi unde delectus libero modi reiciendis reprehenderit incidunt
      eum provident natus nam commodi aperiam eius ipsa? Debitis a quae
      asperiores vitae impedit facere esse consectetur assumenda ipsa sit ipsam,
      doloremque illo, culpa, libero earum nisi sunt eum autem. Aspernatur, quam
      praesentium? Voluptas minus obcaecati quos. Cum, ullam accusamus saepe
      assumenda numquam rerum aspernatur optio iure nihil minus sed, ab
      recusandae delectus ratione modi natus? Ea ipsum ut harum culpa nemo sit
      nam nihil iste dolorem, molestias quod repudiandae dolores, numquam
      adipisci aut nobis delectus dolore ipsam praesentium quas reprehenderit.
      Rerum facilis, minus perferendis deserunt dicta sapiente expedita magnam,
      cum eveniet, molestias velit quisquam molestiae explicabo provident.
      Eveniet debitis aperiam earum est, praesentium nesciunt corrupti numquam
      ipsam reprehenderit similique dolore perspiciatis, error voluptatibus
      laudantium itaque voluptate dolor voluptates recusandae saepe ut aut porro
      maxime. Ex ipsam officiis recusandae pariatur id hic at consequatur
      accusamus numquam soluta culpa magnam porro voluptates, nobis ipsum eum,
      laudantium quia, asperiores amet reprehenderit incidunt? Illum,
      consequuntur, culpa quo veritatis doloribus ea, eligendi obcaecati dolorum
      beatae libero a vitae ad quibusdam. Error natus commodi iusto quaerat?
      Blanditiis sequi corrupti praesentium harum molestiae ab consectetur sed
      id perspiciatis nulla voluptate, iusto amet reiciendis minus beatae
      cupiditate iste odit ducimus quasi, dolor, ad a in officiis nemo? Quia
      cupiditate nesciunt dolores laboriosam voluptatem officiis molestias
      accusamus sint itaque mollitia ipsam assumenda suscipit consequatur
      voluptate reiciendis non autem nemo quidem, distinctio eum minus unde
      corrupti fugiat voluptatibus. Dolor totam consequuntur voluptates quisquam
      error odio sequi? Id, molestiae? Laborum fugit ipsa voluptatibus eum velit
      ipsum saepe itaque, numquam consequatur eligendi eius nam repudiandae
      dignissimos iste minima, eveniet illo, similique hic? Error quibusdam
      exercitationem consequuntur perferendis accusantium asperiores at tenetur,
      repudiandae molestiae qui debitis placeat laudantium, fuga corporis
      adipisci quisquam culpa doloremque inventore, deleniti incidunt fugiat ab
      officiis praesentium numquam? Voluptas eveniet laudantium dignissimos
      perspiciatis quasi labore hic nobis molestias omnis, repudiandae, harum ex
      rem nemo libero. Quis eaque deserunt id maxime adipisci quibusdam ut
      distinctio laborum perspiciatis dolorem sapiente officiis dignissimos
      neque qui ratione voluptate quos facilis, non tempore velit consequatur
      doloribus tenetur! Veniam, dicta dolore deserunt totam beatae odit eius
      dolorum voluptate, voluptas id numquam natus repellat harum architecto
      fugit! Vero voluptates iste quisquam numquam ipsum temporibus dignissimos
      quos velit quas autem consectetur dolorum dolor aut error ullam, deserunt,
      sint, cumque molestias quibusdam odio expedita? Atque eligendi deserunt
      voluptates voluptate nisi, repellat enim eaque ducimus accusantium vitae
      inventore, corrupti in magni facilis neque officiis ad possimus eveniet.
      Laboriosam dolor, ipsam animi optio aperiam et fugit aliquid sapiente
      neque similique labore incidunt iure natus nisi quod libero. Illum non,
      optio vitae aperiam magni eligendi corporis facilis numquam? At natus sed
      ab labore tempora? Distinctio tenetur quisquam laborum quam voluptas
      facilis similique neque placeat unde optio ipsa rerum aperiam, corrupti
      veniam. Laborum sequi veritatis, cumque, similique incidunt esse nobis
      necessitatibus repellat quae velit qui consectetur veniam fugiat sapiente
      eligendi est. Excepturi veritatis doloremque exercitationem non. Vero
      cupiditate sed harum hic optio ratione ipsa error saepe sequi neque?
      Repellat aperiam corrupti dolor ipsum veniam expedita magnam pariatur. Hic
      excepturi nostrum quam laudantium voluptates vel, fugit deleniti odit
      soluta voluptate reiciendis?
    </div>
  );
}

export default EffectsDemo;
