import React from "react";
import { Typography } from "antd";
import ColapSocial from "../../common/social/ColapSocial";
const { Title, Text } = Typography;

export default function WedAndSocialLink() {
    return (
        <div>
            <Title level={4} className="!mb-5">
                Wed & Social Link
            </Title>
            <Text type="secondary" className="font-semibold !my-5 block">
                You can add links to websites you want hiring managers to see!
                Pershap It will be a link to your portfolio, Linkedlin profile,
                or persional website.
            </Text>
            <ColapSocial />
        </div>
    );
}
