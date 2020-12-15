
import Reflux from 'reflux';
import PropTypes from 'prop-types';
import { Upload, message, Modal } from 'antd';

function getBase64 (img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class PictureWall extends Reflux.Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            imageUrl: this.props.value,
         };
    }

    componentWillReceiveProps (nextProps) {
        if ('value' in nextProps) {
            this.setState({
                imageUrl: nextProps.value
            });
        }
    }

    handleCancel = () => {
        this.setState({ previewImage: '', previewVisible: false });
    };

    handlePreview = (file={}) => {
        this.setState({
            previewImage: file.url,
            previewVisible: true
        });
    };

    beforeUpload= (file) => {
        const isImage = file.type && file.type.indexOf('image') > -1;
        if(!isImage) {
            message.warning('请上传图片格式的文件！');
            return false;
        }

        const { limit } = this.props;
        if(limit) {
            const isLtLimit = file.size <= parseFloat(limit) * 1024 * 1024;
            if(!isLtLimit) {
                message.warning(`上传文件过大超过${limit}MB，请压缩后再上传！`);
                return false;
            }
        }

        return true;
    }

    handleChange = ({file, fileList}) => {
        const { onChange } = this.props;
        if(fileList.length && fileList[0].status) {
            getBase64(fileList[0].originFileObj, imageUrl => {
                this.setState({
                    imageUrl,
                })
                onChange && onChange(imageUrl);
            });
        } else {
            this.setState({
                imageUrl: undefined,
            });
            onChange && onChange(undefined);
        }
    }

    trans2file = (url) => {
        return [{ uid: 1, url: url }];
    }

    render() {
        const { imageUrl, previewVisible, previewImage } = this.state, 
              { name, accept, disabled, showUploadList } = this.props;
        const UploadButton = (
            <div>
                <div>+</div>
                <div className="ant-upload-text">上传附件</div>
            </div>
        );

        return (
            <div>
                <Upload
                    listType="picture-card"
                    name={name}
                    accept={accept}
                    disabled={disabled}
                    showUploadList={showUploadList? showUploadList : true}
                    fileList={imageUrl? this.trans2file(imageUrl): []}
                    beforeUpload={this.beforeUpload}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {imageUrl ? null : UploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="image" style={{ width: '100%' }} src={previewImage}/>
                </Modal>
            </div>
        );
    }
}

PictureWall.propTypes = {
    name: PropTypes.string,
    accept: PropTypes.string,
    limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    showUploadList: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    onChange: PropTypes.func,
}

PictureWall.defaultProps = {
    name: 'image',
    accept: 'image/*',
    limit: 2,
    disabled: false,
    showUploadList: true
}

export default PictureWall;