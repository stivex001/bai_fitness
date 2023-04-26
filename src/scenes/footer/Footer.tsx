type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="py-16 mt-40">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <p className="  text-orange-500">WORKOUT</p>
          <p className="my-5 font-normal text-sm text-gray-400">
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym. With hundreds of
            professional workouts, healthy recipes and informative articles, as
            well as one of the most positive communities on the web, you’ll have
            everything you need to reach your personal fitness goals – for free!
          </p>
          <p className="font-normal text-sm text-gray-400">
            &copy; WORKOUT All Rights Reserved.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-orange-500">Links</h4>
          <p className="my-5 font-normal text-sm text-gray-400">Amazing Sessions</p>
          <p className="my-5 font-normal text-sm text-gray-400">Amazing Trainers</p>
          <p></p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-orange-500">Contact us</h4>
          <p className="my-5 font-normal text-sm text-gray-400">F.C.T Abuja Nigeria</p>
          <p className="my-5 font-normal text-sm text-gray-400">Lorem ipsum dolor sit.</p>
          <p className="my-5 font-normal text-sm text-gray-400">(+234)8162174754</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
