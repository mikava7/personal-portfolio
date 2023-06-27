import React from "react";
import styled from "styled-components";

const DummyComponent = () => {
  return (
    <div>
      <h2>Dummy Component</h2>
      <p>
        Lorem <br /> ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        nec semper nunc. Maecenas <br /> fermentum erat id orci gravida, sit
        amet varius justo <br /> suscipit. Fusce <br /> faucibus tristique
        facilisis. Sed id volutpat ex. Nulla facilisi. Donec <br /> rutrum
        placerat dolor, non pulvinar ligula varius a. Nam <br /> tincidunt magna
        quis neque luctus <br /> consequat. Proin congue auctor nisl, at feugiat{" "}
        <br /> ligula congue a. <br /> Nulla facilisi. Sed fringilla condimentum
        tortor, <br /> at gravida purus lobortis sed. Fusce posuere lectus a
        tortor maximus varius. <br /> Vivamus pulvinar sollicitudin arcu a
        suscipit. Nulla facilisi. Mauris <br /> condimentum blandit vulputate.
      </p>
      <p>
        Morbi aliquet eros vitae nisi consequat, vitae <br /> congue sapien
        convallis. <br /> Nunc congue, sapien id tristique sagittis, nunc metus
        hendrerit massa, <br /> eu facilisis metus <br /> orci at mauris. Mauris
        ac arcu at mi laoreet <br /> venenatis vitae vitae <br /> odio. Integer
        gravida condimentum tellus, at <br /> interdum lectus <br /> consequat
        non. Ut ac <br /> nisl euismod, <br /> consectetur lacus <br /> vitae,
        consectetur ex. Fusce aliquam fringilla <br /> <br /> neque at gravida.
        Suspendisse volutpat nisl tortor, id tempus ligula <br /> aliquet in.
        Integer cursus turpis lorem, at ultricies lacus sagittis <br /> sit
        amet. Proin vel purus quis elit elementum cursus at sed leo.
      </p>
      <p>
        Sed non risus id libero consectetur <br /> facilisis in nec justo. Proin
        rhoncus ipsum mi, <br /> id suscipit ligula efficitur vitae. Vestibulum
        tincidunt <br /> purus libero, <br /> at cursus elit faucibus ac.
        Quisque non scelerisque tortor. Sed <br /> efficitur massa arcu, at
        fermentum mauris lacinia ac. Aliquam erat <br /> volutpat. Proin vel
        nulla sagittis, sollicitudin mi ac, <br /> efficitur mi. Maecenas
        venenatis ligula risus, id rhoncus urna rhoncus id. Nulla a fermentum
        libero. Vivamus a ipsum condimentum, <br /> lobortis velit ac, vulputate
        ligula. <br /> In hac habitasse platea dictumst. Aenean varius lorem
        sem, ut aliquet metus ullamcorper sed. Fusce ac mi pellentesque, cursus
        nunc sed, auctor mauris. Nulla lobortis venenatis est, <br /> vitae
        consectetur est lacinia eget. Nullam vitae eros lectus.
      </p>
    </div>
  );
};

const Wrapper = styled.div`
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

const Content = styled.div`
  padding: 20px;
`;

export default DummyComponent;
