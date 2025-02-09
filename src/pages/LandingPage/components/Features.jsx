import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, Divider } from "@mui/material";

const features = [
  {
    title: "The fastest bot on the market",
    icon: "https://s3-alpha-sig.figma.com/img/bee1/51ad/6636af2cee4f7ec13aeb7472bfa48169?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TTkjvHWt8xZtyt7DcAtO6BnCaLOJQSJ1v4H80XkRFRIVan6PnWwDZpFxOb9J2ajVYG5z1CgwqPZFLETNrbBveFjf5NWJFiJZyYnYVXbYgH~vCzVXoEdw8B~fw0CSaEjz7ukIcilvN-wf8ioQIvI6SPFqSjHob0bpt-KUgpA7xtbodJk~WzeS64HwmyDjNhKIX-rUJaA~YxBCzI5gTQnGs4a09zgJliV7KHGiw7fFxmVbworQ-P7a96YKfN~3mKKb2mw7G2ChnMbvOVWyQ6zNHTI7G-~GWWqbgCdBEEbtVMbJoPoHJyVG-eZSlwKpaDU7AlzskXFT5t5ckuahpYsXEA__",
    description:
      "Outperform every competitor with unmatched performance. Snipe players faster than anyone.",
  },
  {
    title: "Easy to use",
    icon: "https://s3-alpha-sig.figma.com/img/05b2/662d/4c92e6bb0aa5f939125f0001881aee5b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nwygscW4Fgd1PlYzDhjusl7Hb4MalT4vo4~hQO02wree71-HnYk0GI3PA84hUyWjQbKge1RF5kfHesmAwGw1PAbnrXcyCy6rLfsZK0u5aUe96nDup6CA3rBl~tdXZjaTRDBV~PYlaPKVu16VeHK1egpSfL8eaDxAn4ESTmNQvQ8frK4bslmWAEgMRstJKRHs0QooXrFxblZCBasjmlyybzFv6cVe~I~LNF0su6gHf2Hr-ASN7J2QRLyb~9-7BBxtyk-oVtmUoDk5xNliHwx0TbqfrQ5esq6UBDPrWKrOcdxTy62sO7iD5eZeWxA9ngNwqogX6LaXEA-lWNRH2Iv-BQ__",
    description:
      "Our tutorial video will have you set up and sniping in less than 5 minutes!",
  },
  {
    title: "Leave the Work to Us",
    description:
      "Our algorithm is powerful. Just pick a player to snipe, and let Baker's Bot handle the rest.",
    icon: "https://s3-alpha-sig.figma.com/img/43ee/604c/e4d796de94cd92a202ae0080d4f6c091?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oaAjC1VVRHu6viEx617PLMzVcjem1cdpHEzVyzoeHaEaWL0fiOV0lADqtu83roqxNTrD88D63~SRqXP2nmRL0Y9TpsoAAF95~Tpu2EmPTFXJZIYPV0xl8UVE1FzvPzFpZgHnyB~Lh~NLfJqSXRMx7l4KdoWUsPbxNw3SOA5ke168fbqjrsBpWqHjkeogemBkbYSJN06bVLSgs1NANF1ngMZw0M2x2hoMTQNqcEMMKaSyFbm-a7DwAJkTAksobbWt76r6o6rzF1i2qDgW7bFhavfrReCMyQi3IBI4wNCkRfBi~4Eehg~bpxiCJFvaO-WgQboFPzTx13WPLt1DXFeXIQ__",
  },
  {
    title: "Simplicity at Its Finest",
    icon: "https://s3-alpha-sig.figma.com/img/ebf4/ce7b/df2ec91df6dd6062228ba51cf643cf30?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HKehYSc6VRQGUmBgEEJA8T8RDjq0HqEUDatTldZsMd7uaLvZp0oivQUS79FQmX1trVYJiJzamOwPBXmaD-fk1McjUDZ-6jNEwmX6cROIQn46KCfhFXmnx4XLZAaQggQvgIj8Lv2RYtOThCSZy82e68wWh8I~ULMyQjp-0bA-mKJSAv8xhmBVjTHTa2oYShy6s-5Xqaqeg7d4SDg~Cf6Q2GhbAVoIDPmwXT7uKlJHC3eQ1035h69NNuPMvmO7quPplhcmLmGVngUuNLc29Wqp~j3aWY5frlKxSdRa9BsOM8OJhN8hIKpTvzTWv-D-mmT5uTI9NpEq0LC9zz60fFcGEQ__",
    description:
      "You’ll be a sniping pro in minutes. No learning curve—just watch our tutorial videos and get results.",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-7xl">
      <h1 className="uppercase text-2xl font-bold">
        Everything You Need to Know About
        <span className="text-primary"> Baker's Bot</span>
      </h1>
      <div className="grid grid-cols-4 text-white w-full">
        {features.map((feature) => (
          <div className="flex flex-col items-center gap-2 p-4 w-[15rem] text-center bg-black rounded-[8px]">
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-[10rem] h-[10rem]"
            />
            <Divider className="h-1 bg-white w-50 rounded-[5px]" />
            <h1 className="uppercase text-lg font-bold">{feature.title}</h1>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <Button endIcon={<ArrowForwardIosIcon />}>Purchase Now</Button>
    </div>
  );
};

export default Features;
