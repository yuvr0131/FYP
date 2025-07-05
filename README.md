

Breast cancer remains one of the leading causes of mortality among women worldwide, highlighting the critical need for early and precise diagnostic systems. 
This research proposes a systematic approach for breast cancer prediction using segmented breast ultrasound images, leveraging both traditional machine learning and advanced deep learning models. 
The dataset employed comprises 780 annotated ultrasound images collected from 600 female patients aged between 25 and 75 years.
These images, provided in PNG format with an average resolution of 500×500 pixels, were organized in 2018 and categorized into three classes: normal, benign, and malignant,
with corresponding ground truth labels.

A robust preprocessing pipeline was implemented to enhance the quality and relevance of features extracted from the images. 
Initially, Anisotropic Diffusion Filtering was applied to reduce speckle noise while preserving crucial edge details.
This was followed by image segmentation, which isolated regions of interest (ROIs) within the ultrasound scans. 
Data augmentation techniques, such as rotation, flipping, and zooming, were employed to synthetically expand the dataset and 
address class imbalance, thereby improving model generalization. Subsequently, bounding box extraction was performed to tightly enclose lesion areas, 
facilitating localized analysis. In the next stage, feature extraction was conducted using handcrafted and automated techniques to derive meaningful descriptors from the ROIs. 
Important features were then identified and selected through statistical and algorithmic methods for training robust classification models.

The predictive analysis involved four machine learning algorithms: Support Vector Machine (SVM), Logistic Regression, Random Forest, and XGBoost,
alongside two deep learning architectures: a custom Convolutional Neural Network (CNN) and ResNet50. Among these, ResNet50 demonstrated the highest performance, 
showcasing its effectiveness in capturing complex patterns in medical imaging data. The models were evaluated using metrics such as 
accuracy, precision, recall, F1-score, and Receiver Operating Characteristic (ROC) curves, providing a comprehensive comparison of their predictive capabilities.

This integrated framework combining classical and deep learning techniques on preprocessed ultrasound images demonstrates promising 
potential for enhancing breast cancer diagnosis and aiding radiologists in clinical decision-making. 
